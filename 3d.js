// This will create an empty array called myTasks
let myTasks = [];

// Define an arrow function 'addTasks' that takes 'task' as a parameter
let addTasks = (task) => {
    // Add the 'task' to the 'myTasks' array
    myTasks.push(task);
    // Log a message to the console indicating the task has been added
    console.log(task + " has been added to my tasks!");
    // Return the number of elements in the 'myTasks' array after the insertion
    return myTasks.length;
}

// Lists all tasks using console.log
let listAllTasks = () => {


    myTasks.forEach((item) => {
        console.log(item);

    })
}

// Deletes a task if a task is found
let deleteTask = (task)=>{

    let index = myTasks.indexOf(task);
    if(index > -1){
        myTasks.splice(index,1);
        console.log(task +"has been deleted!");
    }   else    {
        console.log(task +" not found in my Tasks.")
    }
        return myTasks.length;
}

// Call the 'addTasks' function with the argument "Work" to add a task and log the message
addTasks("Work");
addTasks("eat");
addTasks("sleep");
listAllTasks();
deleteTask("Work")
deleteTask("Run")