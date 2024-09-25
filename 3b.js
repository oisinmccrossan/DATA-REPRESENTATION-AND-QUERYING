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

// Call the 'addTasks' function with the argument "Work" to add a task and log the message
addTasks("Work");
