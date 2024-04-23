package main

import (
	Analizador "MIA_P1_202004796/analizador"
)

func main() {
	/*
		mkdisk -size=1200 -unit=K
		fdisk -size=300 -driveletter=A -name=part1
		fdisk -size=300 -driveletter=A -name=part2
		mount -name=part1 -driveletter=a
	*/

	//execute -path=/home/gerhard/Escritorio/MIA/MIA_P2_202004796/entrada.adsj
	Analizador.Analizar()
}
