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

console.log("\nI am extremely sorry to inform you that the reservation for large guest table"+ 
" is cancelled now I can invite only two peoples\n ")

for (let i=guest.length-1;i>1;i--) {
    console.log("Sorry I can’t invite you to dinner "+guest[i] )
    guest.pop()
}

for (let i of guest) {
    console.log("You are still invted "+ i)
}
