import inquirer from "inquirer";
const answer:{
    sentence:string
}=await inquirer.prompt([
    {
        type:"input",
        name:"sentence",
        message:"Enter your sentence to count the word:"
    }
])
const words=answer.sentence.split(" ")
console.log(`Your word sentence count is ${words.length}`)
