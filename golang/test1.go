package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	const (
		aa = iota
		a2
		a3
	)
	//结构体是否可以满足
	Fuzi := [5]struct {
		x int
		y int
	}{}
	Fuzi[0].x = 100
	Fuzi[0].y = 50
	fmt.Println(Fuzi)
	var randTotal int = 0
	rand.Seed(time.Now().Unix())
	fmt.Println("Hello world", aa, a2, a3)
	var arrayData = [10]int{1, 1, 23, 4, 54, 5, 52, 0, 34, 21}
	for i := 0; i < len(arrayData); i++ {
		fmt.Println(arrayData[i])
	}
	//随机下
	var randNums [15]int = [15]int{0}
	for i := 0; i < 15; i++ {
		randNums[i] = rand.Intn(1000)
		fmt.Println("随机数字是", randNums[i])
	}
	addNumToOneArray(randNums, &randTotal)

	fmt.Println("total=============", randTotal)

	var s4 []int = make([]int, 1999, 2000)
	fmt.Println(s4)
}

func addNumToOneArray(aa [15]int, target *int) {
	for i := 0; i < len(aa); i++ {
		*target += aa[i]
	}

}
