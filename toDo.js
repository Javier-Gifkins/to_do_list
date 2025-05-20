//NOTE - Import the readline module for handling command line input/output
const readline = require("readline")

// import filesystem module for reading/writing files
const fs = require("fs")

//NOTE - Define the file where tasks will be saved
const FILE = "tasks.json"

// initialise an empty array to stare tasks
let toDo = []

//TODO - Check if the tasks.json file exists
if(fs.existsSync(FILE)) {
    try {
        // If file exists, read its contents (sync)
        const data = fs.readFileSync(FILE, utf8)
        // parse json string into the todo array
        todo = JSON.parse(data)
    } catch(e) {
        todo = []
    }
}

//NOTE - Create a command line interaface
const rl = readline.createInterface({
    input: process.stdin, // set standard input (keyboard) as input
    output: process.stdout // set standard output (keyboard) as output
})

//TODO - function to display the mainmenu options
function showMenu() {
    console.log("\nTo-Do List App ===") // app header
    console.log("1. Show Tasks") // option 1 show all tasks
    console.log("2. New Task") // option 2 add new task
    console.log("3. Mark Task as Done") // option 3 mark task as complete
    console.log("`4. Delete a Task") // option 4 delete a task
    console.log("Exit the App") // Exit app
    rl.question("\nChoose an Option (1-5): ", handleMenu) // prompt user for a choice
}

//NOTE - function to save tasks into the array

function saveTasks() {
    fs.writeFileSync(FILE, JSON.stringify(todo, null, 2)) // write todo arrays as json file
}

//TODO - function to handle the menu option entered by the user
function handleMenu(choice) {
    switch(choice.trim()) {
        case "1": 
            listTasks() // if 1 pressed show all atsks
            break
        
        case "2": 
            addTask() // if 2 pressed add new task
            break

        case "3": 
            promptMarkTaskAsDone() // if 3 pressed mark as done
            break
        
        case "4": 
            promptDeleteTask() // if 4 pressed delete task
            break
        
        case "5": 
            console.log("Goodbye! ")
            rl.close() // if 5 pressed goodbye
            break

    
    }
}

