// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task object 
function newTask(title,description) {
  const task = {
    title, description, 
    complete: false,
    markCompleted: function () {
      this.complete = true;
    },
    logTaskState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    }
  }; 
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter","Take all the poop out the litter box") 
const task2 = newTask("Do Laundry",":(")
const tasks = [task1, task2];
console.log(tasks)


task1.logTaskState; // Clean Cat Litter has not been completed
task1.markCompleted;
task1.logTaskState; // Clean Cat Litter has been completed
