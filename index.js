#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
//I hvve created this  function to generate random colors using random function of MATHS
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return chalk.rgb(red, green, blue);
}
//using inquirer to take input from user
let userinput = await inquirer.prompt([
    {
        type: "string", name: "username", message: "Enter your good name please: "
    }
]);
//coverting name to uppercase for better visibility
let uppercasename = userinput.username.toUpperCase();
//using split funnction to save each character including space to new array 
let namearray = uppercasename.split("");
// usng for loop to print the name 10 times using randomcolor function
for (let i = 0; i <= 10; i++) {
    for (let characters of namearray) {
        process.stdout.write(" ".repeat(3));
        process.stdout.write(getRandomColor()(characters));
    }
    console.log();
    console.log("-".repeat(namearray.length * 4));
}
