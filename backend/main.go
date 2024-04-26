package main

import (
	"fmt"
	"log"
	"os"
	"strings"

	Analizador "MIA_P1_202004796/analizador"
	"MIA_P1_202004796/cmds"
	"MIA_P1_202004796/objs"
	"MIA_P1_202004796/utilities"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	//execute -path=/home/gerhard/Escritorio/MIA/MIA_P2_202004796/backend/entrada.adsj
	//Analizador.Analizar()

	//Crear nuestra aplicación de Fiber
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowMethods: "GET,POST,PUT,DELETE",
		AllowHeaders: "Content-Type, Authorization",
	}))

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World 👋!")
	})

	app.Post("/cmds", func(c *fiber.Ctx) error {
		data := c.FormValue("data")

		fmt.Println(data)
		Analizador.Analizar(data)

		response := struct {
			Message string `json:"message"`
		}{Message: "ok"}
		return c.Status(fiber.StatusOK).JSON(response)
	})

	app.Get("/disks", func(c *fiber.Ctx) error {
		disks := listDisks()

		response := struct {
			Message []string `json:"disks"`
		}{Message: disks}
		//fmt.Println(response)
		return c.Status(fiber.StatusOK).JSON(response)
	})

	app.Post("/partitions", func(c *fiber.Ctx) error {
		driveletter := c.FormValue("driveletter")
		partitions := listPartitions(driveletter)

		response := struct {
			Message []string `json:"partitions"`
		}{Message: partitions}
		//fmt.Println(response)
		return c.Status(fiber.StatusOK).JSON(response)
	})

	app.Post("/login", func(c *fiber.Ctx) error {
		pass := c.FormValue("pass")
		user := c.FormValue("user")
		disk := c.FormValue("disk")
		part := c.FormValue("part")

		driveletter := disk[:1]
		fmt.Println("driveletter:", driveletter, "part:", part, "user:", user, "pass:", pass)
		//modificar para buscar el ID de la part y pasarselo al login
		id := searchId(part, driveletter)
		fmt.Println("id:", id, "|")
		if id == "nil" {
			response := struct {
				Message string `json:"message"`
			}{Message: "-err particion no montada o no formateada"}
			return c.Status(fiber.StatusOK).JSON(response)
		}
		msg := cmds.Login(user, pass, id)
		response := struct {
			Message string `json:"message"`
		}{Message: msg}
		//fmt.Println(response)
		return c.Status(fiber.StatusOK).JSON(response)
	})

	app.Get("/logout", func(c *fiber.Ctx) error {
		msg := cmds.Logout()

		response := struct {
			Message string `json:"message"`
		}{Message: msg}
		//fmt.Println(response)
		return c.Status(fiber.StatusOK).JSON(response)
	})

	log.Fatal(app.Listen(":3000"))
}

func listDisks() []string {
	files, err := os.ReadDir("./MIA/P1/")
	if err != nil {
		log.Fatal(err)
	}
	var disks []string
	for _, file := range files {
		disks = append(disks, file.Name())
	}
	if len(disks) == 0 {
		disks = append(disks, "")
	}
	return disks
}

func listPartitions(driveletter string) []string {
	driveletter = strings.ToUpper(driveletter)
	//abrimos dsk
	ruta := "./MIA/P1/" + string(driveletter) + ".dsk"
	fmt.Println("ruta:", ruta)
	file, err := utilities.OpenFile(ruta)
	if err != nil {
		return nil
	}

	//leemos mbr
	var tmpMbr objs.MBR
	if err := utilities.ReadObject(file, &tmpMbr, 0); err != nil {
		return nil
	}
	return objs.ListPartitions(tmpMbr)
}

func searchId(name string, driveletter string) string {
	driveletter = strings.ToUpper(driveletter)
	//abrimos dsk
	ruta := "./MIA/P1/" + string(driveletter) + ".dsk"
	fmt.Println("ruta:", ruta)
	file, err := utilities.OpenFile(ruta)
	if err != nil {
		return "nil"
	}

	//leemos mbr
	var tmpMbr objs.MBR
	if err := utilities.ReadObject(file, &tmpMbr, 0); err != nil {
		return "nil"
	}
	for i := 0; i < 4; i++ {
		if name == objs.ReturnPartitionName(tmpMbr.Mbr_partitions[i]) && string(tmpMbr.Mbr_partitions[i].Part_status[:]) == "1" {
			return string(tmpMbr.Mbr_partitions[i].Part_id[:])
		}
	}
	return "nil"
}
