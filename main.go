package main

import (
	Analizador "MIA_P1_202004796/analizador"
)

func main() {
	//entrada := "mkdisk -size=1 -fit=f -unit=m"
	//entrada := "rmdisk -driveletter=a"
	//entrada := "fdisk -size=10 -driveletter=a -name=ext -type=e"
	//entrada := "fdisk -size=1 -driveletter=a -name=new3 -type=p"
	//entrada := "fdisk -name=Particion1 -delete=full -driveletter=A"
	//entrada := "fdisk  -unit=M -driveletter=A -name=Particion4 -add=1"
	//entrada := "fdisk -delete=full -name=ext -driveletter=A"
	//entrada := "fdisk -add=-1 -driveletter=a -name=new1 -unit=k"

	//execute -path=/home/gerhard/Escritorio/MIA/MIA_P1_202004796/entrada.adsj
	Analizador.Analizar()
}
