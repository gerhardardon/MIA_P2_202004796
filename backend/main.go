package main

import (
	"fmt"
	"log"
	"os"
	"strings"

	Analizador "MIA_P1_202004796/analizador"
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
