const current_user = ["Sami","ASHIQ","Admin","Ali","Faiz"]

const new_user = ["Sami","Ashiq","Sarim","Musab","Faiz"]

const curr = current_user.map(nam => nam.toLowerCase())
const new_us = new_user.map(nam => nam.toLowerCase())

for (let i = 0; i < new_user.length; i++) {
    if (curr.includes(new_us[i])) {
        console.log("Enter a different username");
    } else {
        console.log(`Usernmae ${new_user[i]} is available`)
    }
}
