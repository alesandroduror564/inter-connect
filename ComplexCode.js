/* 
Filename: ComplexCode.js
Description: This code is a complex implementation of a task management system.
It demonstrates various advanced JavaScript concepts such as object-oriented programming, functional programming, and asynchronous programming.
*/

// Object representing a task
class Task {
  constructor(description, dueDate) {
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }
  
  complete() {
    this.completed = true;
  }
}

// Function to create a new task
function createTask(description, dueDate) {
  return new Task(description, dueDate);
}

// Array to store all tasks
const tasks = [];

// Add tasks to the array
tasks.push(createTask("Implement authentication", "2022-01-15"));
tasks.push(createTask("Refactor codebase", "2022-02-28"));
tasks.push(createTask("Write documentation", "2022-03-10"));

// Function to retrieve incomplete tasks
function getIncompleteTasks() {
  return tasks.filter(task => !task.completed);
}

// Function to print all tasks
function printTasks() {
  tasks.forEach(task => {
    console.log(`Description: ${task.description}`);
    console.log(`Due Date: ${task.dueDate}`);
    console.log(`Completed: ${task.completed}`);
    console.log("==============================");
  });
}

// Function to mark a task as completed
function completeTask(index) {
  tasks[index].complete();
}

// Function to delay execution
function delay(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

// Asynchronous function to complete tasks with a delay
async function completeAllTasksWithDelay() {
  for (const [index, task] of tasks.entries()) {
    console.log(`Completing task '${task.description}'...`);
    await delay(1000);
    completeTask(index);
  }
  
  console.log("All tasks completed!");
}

// Function to calculate the total number of completed tasks
function getTotalCompletedTasks() {
  return tasks.reduce((count, task) => count + (task.completed ? 1 : 0), 0);
}

// Usage example
console.log(`Incomplete tasks: ${getIncompleteTasks().length}`);
printTasks();
completeTask(0);
console.log(`Total completed tasks: ${getTotalCompletedTasks()}`);

// Asynchronous task completion example
completeAllTasksWithDelay().then(() => {
  console.log(`Total completed tasks after delay: ${getTotalCompletedTasks()}`);
});
