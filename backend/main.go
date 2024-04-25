package main

import (
	"log"

	Analizador "MIA_P1_202004796/analizador"

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

		//fmt.Println(data)
		Analizador.Analizar(data)

		response := struct {
			Message string `json:"message"`
		}{Message: "ok"}
		return c.Status(fiber.StatusOK).JSON(response)
	})

	log.Fatal(app.Listen(":3000"))
}
