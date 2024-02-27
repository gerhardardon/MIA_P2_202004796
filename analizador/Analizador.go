package Analizador

import (
	"MIA_P1_202004796/cmds"
	"flag"
	"strings"
)

func Analizar(entrada string) {
	//parseamos a minusculas
	entrada = strings.ToLower(entrada)

	//obtenemos el comando
	cmd := strings.Split(entrada, " ")

	//declaramos todas las flags para los cmds
	size := flag.Int("size", 0, "size of disk")
	fit := flag.String("fit", "f", "fit of disk")
	unit := flag.String("unit", "m", "unit of memory")
	driveletter := flag.String("driveletter", "a", "disk to erase")
	flag.Parse()

	if cmd[0] == "mkdisk" {
		cmds.ParseMkdisk(entrada, size, fit, unit)
		cmds.Mkdisk(*size, *fit, *unit)
	} else if cmd[0] == "rmdisk" {
		cmds.ParseRmdisk(entrada, driveletter)
		cmds.Rmdisk(*driveletter)
	}
}
