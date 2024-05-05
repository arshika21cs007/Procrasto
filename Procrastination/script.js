// script.js
const taskStack = document.querySelector('.task-stack');
function addTask() {
const taskName = prompt('Enter task name:');
if (taskName) {
const taskElement = document.createElement('div');
taskElement.classList.add('task');
taskElement.textContent = taskName;
taskElement.addEventListener('click', completeTask);
taskStack.appendChild(taskElement);
}
}
function completeTask(event) {
const taskElement = event.target;
taskElement.classList.add('completed');
setTimeout(() => {
taskStack.removeChild(taskElement);
}, 300); // Delay removal for animation
}
//requirements
var button = document.getElementsByTagName("button")[0];
var inp = document.getElementsByTagName("input")[0];
var ull = document.querySelector("ul");

function length(){
   return inp.value.length;
}

//transform
function biggerInput(n){
   inp.style.transform = n;
   return inp.style.transform;
};

function createElement(){
   var li = document.createElement("li");
   var div = document.createElement("div");
   var butt2 = document.createElement("button")
   div.classList.add("wrapper");
   ull.appendChild(div);
   div.append(li,butt2);
   li.classList.add("taskclass");
   li.appendChild(document.createTextNode(inp.value));
   inp.value ="";
   butt2.classList.add("delClass");
   butt2.innerText = 'Del';
}

//For click
function  addListAfterClick(){
   biggerInput("none");
   //createElement is used to create the element here coo!    
   if(length()>0){
       createElement();
   }
};

//keypress
function addListAfterKeypress(event){
  biggerInput("scale(2)");
   if(length() >0 && event.keyCode === 13){
       biggerInput("none");
       createElement();
}};

function deleteListElement(element){
   if(element.target.className === "delClass"){
       //for making perfect animation delay
     element.target.parentElement.remove();
      
   } 
}

function ULClick(element){ 
   //element -> mouseevent
   deleteListElement(element);

}



var a = ull.addEventListener("click",ULClick);

button.addEventListener("click",addListAfterClick);

inp.addEventListener("keypress",addListAfterKeypress);

// script.js

// Function to handle adding a task
function addTask() {
    // Get task details from input fields
    const taskName = document.getElementById('taskName').value;
    const duration = document.getElementById('duration').value;
    const deadline = document.getElementById('deadline').value;

    // Perform validation if needed

    // Redirect to motivated.html
    window.location.href = 'motivated.html';
}

// Add event listener to the "Add Task" button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Function to create and animate the decreasing overloaded tasks
function animateTasksDecrease() {
    // Create a new div for the animated element
    const animationDiv = document.createElement('div');
    animationDiv.className = 'animate__animated animate__zoomOut';

    // Add your choice of animated content here
    // For example, adding a spinning star emoji
    animationDiv.innerText = '📉';

    // Add the animated element to the container
    const container = document.getElementById('motivationAnimation');
    container.appendChild(animationDiv);

    // Remove the animated element after the animation duration
    const animationDuration = getAnimationDuration('animate__zoomOut');
    setTimeout(() => {
        container.removeChild(animationDiv);
    }, animationDuration);
}

// Function to get the animation duration based on the animation class
function getAnimationDuration(animationClass) {
    const animationDuration = window.getComputedStyle(document.querySelector(`.${animationClass}`)).animationDuration;
    return parseFloat(animationDuration) * 1000;
}

// Call the animateTasksDecrease function to start the animation
animateTasksDecrease();
