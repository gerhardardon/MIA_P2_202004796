package objs

import (
	"fmt"
)

type MBR struct {
	Mbr_tamano         int32
	Mbr_fecha_creacion [10]byte
	Mbr_dsk_signature  int32
	Mbr_dsk_fit        [1]byte
	Mbr_partitions     [4]Partition
}

func PrintMBR(mbr MBR) {
	fmt.Println("-----")
	fmt.Println("mbr_tamano:", mbr.Mbr_tamano)
	fmt.Println("mbr_fecha_creacion:", string(mbr.Mbr_fecha_creacion[:]))
	fmt.Println("mbr_dsk_signature:", mbr.Mbr_dsk_signature)
	fmt.Println("mbr_dsk_fit:", string(mbr.Mbr_dsk_fit[:]))
	for i := 0; i < 4; i++ {
		PrintPartition(mbr.Mbr_partitions[i])
	}
	fmt.Println("-----")
}

type Partition struct {
	Part_status      [1]byte
	Part_type        [1]byte
	Part_fit         [1]byte
	Part_start       int32
	Part_s           int32
	Part_name        [16]byte
	Part_correlative int32
	Part_id          [4]byte
}

func PrintPartition(part Partition) {
	fmt.Println("-----")
	fmt.Println("part_status:", string(part.Part_status[:]))
	fmt.Println("part_type:", string(part.Part_type[:]))
	fmt.Println("part_fit:", string(part.Part_fit[:]))
	fmt.Println("part_start:", part.Part_start)
	fmt.Println("part_s:", part.Part_s)
	fmt.Println("part_name:", string(part.Part_name[:]))
	fmt.Println("part_correlative:", part.Part_correlative)
	fmt.Println("part_id:", string(part.Part_id[:]))
	fmt.Println("-----")
}
