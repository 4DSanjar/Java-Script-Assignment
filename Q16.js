let guest = ["Ali","Musab","Faiz"]
for(let i=0;i<guest.length;i++){
console.log("You are invted for dinner "+guest[i])
}
console.log("\n"+guest[2]+" Sorry I am bussy\n")

guest.splice(2,1,"Sarim") 

for(let i =0; i<guest.length;i++){
    console.log("Please be our guest for dinner "+guest[i])
}
console.log("\nI am gladly to inform you that I am successful in reserving a table that has more seats for the guests \n")

guest.unshift("Asiq");
guest.splice(2,0,"Moazzam")
guest.push("Sami")
for(let i =0;i<guest.length;i++){
    console.log("Please be our guest for dinner "+guest[i])
}
