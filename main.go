package main

import (
	Analizador "MIA_P1_202004796/analizador"
)

func main() {
	//entrada := "mkdisk -size=3000 -unit=K -fit=f"
	entrada := "rmdisk -driveletter=a"
	Analizador.Analizar(entrada)
}
