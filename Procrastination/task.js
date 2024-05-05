document.getElementById('taskEntryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add logic to handle task entry here
    // For example, save tasks to local storage or send to server
  });
  // Inside your display_tasks.js file

// Function to display tasks from local storage
function displayTasks() {
    // Get the tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Get the task list element
    let taskList = document.getElementById('taskList');
    
    // Clear the current list
    taskList.innerHTML = '';
    
    // Loop through the tasks and add them to the task list
    tasks.forEach(function(task) {
      let li = document.createElement('li');
      li.textContent = `Task: ${task.name}, Deadline: ${task.deadline}, Duration: ${task.duration} minutes`;
      taskList.appendChild(li);
    });
  }
  
  // Call the displayTasks function to show the tasks
  displayTasks();
  // Inside your task.js file

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the task details from the form inputs (you can use your existing logic here)
    const taskName = document.querySelector('#taskForm input[type="text"]').value;
    const deadline = document.querySelector('#taskForm input[type="date"]').value;
    const duration = document.querySelector('#taskForm input[type="number"]').value;

    // Save the task details (you can use local storage or any other storage method)

    // Redirect to the tasks display page (tasks.html)
    window.location.href = 'tasks.html';
});

// task.js

document.getElementById('taskEntryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get task details from the form
    const taskName = document.getElementById('taskName').value;
    const deadline = document.getElementById('deadline').value;
    const duration = document.getElementById('duration').value;
    
    // Clear the form fields
    document.getElementById('taskName').value = '';
    document.getElementById('deadline').value = '';
    document.getElementById('duration').value = '';

    // Create a new task object
    const task = {
        name: taskName,
        deadline: deadline,
        duration: duration
    };

    // Add the task to the task list
    addTaskToList(task);
});

function addTaskToList(task) {
    // Get the task list element
    const taskList = document.getElementById('taskList');
    
    // Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = `Task: ${task.name}, Deadline: ${task.deadline}, Duration: ${task.duration} minutes`;

    // Append the list item to the task list
    taskList.appendChild(li);
}

