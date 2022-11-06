const magicians = ["Sarim","Faiz","Ateeb"]
const make_great_magicians = (arr)=>{
   const great = [...arr]
        arr.forEach((ele,index)=>{
            great[index] = "Great "+ ele 
        })
        return great
}

console.log(make_great_magicians(magicians))
