let guest = ["Ali","Musab","Faiz"]
for(let i=0;i<guest.length;i++){
console.log("You are invted for dinner "+guest[i])
}
console.log("\n"+guest[2]+" Sorry I am bussy\n")

guest.splice(2,1,"Sarim") 

for(let i =0; i<guest.length;i++){
    console.log("Please be our guest for dinner "+guest[i])
}
