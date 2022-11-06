let car = "Ford"
const color = "black"
let model = 2020
const bike = "Yamaha"
console.log(`The ${car}`,car == "Ford"?"is my fav car":"not interested")

if(car == "Ford"){
    console.log("LOVE Ford")
}else if(car != "Ford"){
    console.log("Not interested")

}
if(car == "Ford" && color =="black"){
    console.log("I like it")
}else if(car == "Ford" && color !="Black"){
    console.log("Ahh I want it in black")
}

if(car == "Ford" && model ==2020){
    console.log("Perfect")
}else if(car =="Ford" && model == 2021 ){
    console.log("Not a bad option")
}

if(bike == "Yamaha"){
    console.log("I like it")
}else if(bike !="Yamaha"){
    console.log("Think about it")
}

if(bike == "Yamaha" && model == 2021){
        console.log("Perfect")
}else if (bike == "Yamaha" && color == "black") {
    console.log("Like this combination")
}
