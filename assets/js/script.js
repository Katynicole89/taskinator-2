const formEl = document.querySelector("#task-form");
const tasksToDoEl = document.querySelector("#tasks-to-do");

const taskFormHandler = function() {

  event.preventDefault();

  const taskNameInput = document.querySelector("input[name='task-name']").value;
  const taskTypeInput = document.querySelector("select[name='task-type']").value;
 
  if (!taskNameInput || !taskTypeInput){
    alert("You need to fill out the form!");
    return false;
  }

  formEl.reset();
  
  // package up data as an object
 const taskDataObj = {
  name: taskNameInput,
  type: taskTypeInput
};

// send it as an argument to createTaskEl
createTaskEl(taskDataObj);

};

const createTaskEl = function(taskDataObj) {
 // create list item
 var listItemEl = document.createElement("li");
 listItemEl.className = "task-item";
 
 // create div to hold task info and add to list item
 var taskInfoEl = document.createElement("div");
 // give it a class name
 taskInfoEl.className = "task-info";
 // add HTML content to div
 taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
 
 listItemEl.appendChild(taskInfoEl);
 
 // add entire list item to list
 tasksToDoEl.appendChild(listItemEl);
}


formEl.addEventListener("submit", taskFormHandler);
