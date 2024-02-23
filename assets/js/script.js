const formEl = document.querySelector("#task-form");
const tasksToDoEl = document.querySelector("#tasks-to-do");
let taskIdCounter = 0;

const taskFormHandler = function(event) {
  event.preventDefault();
  const taskNameInput = document.querySelector("input[name='task-name'").value;
  const taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if inputs are empty (validate)
  if (taskNameInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }
  
  formEl.reset();

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  const taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  createTaskEl(taskDataObj);
};

const createTaskEl = function(taskDataObj) {
  // create list item
  const listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  listItemEl.setAttribute("data-task-id", taskIdCounter)

  // create div to hold task info and add to list item
  const taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  const taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);
  

  // add list item to list
  tasksToDoEl.appendChild(listItemEl);

  taskIdCounter++;
};

const createTaskActions = function(taskId) {
  const actionContainerEl = document.createElement("div");
  actionContainerEl.className = "task-actions";

  const editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Edit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.setAttribute("data-task-id", taskId);

  actionContainerEl.appendChild(editButtonEl);


  const deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "Delete";
  deleteButtonEl.className = "btn delete-btn";
  deleteButtonEl.setAttribute("data-task-id", taskId)

  actionContainerEl.appendChild(deleteButtonEl);

  const statusSelectEl = document.createElement("select");
  statusSelectEl.className = "select-status";
  statusSelectEl.setAttribute("name", "status-change");
  statusSelectEl.setAttribute("data-task.id", taskId);

  actionContainerEl.appendChild(statusSelectEl);

  const statusChoices = ["To Do", "In Progress", "Completed"];

  for (var i = 0; i <statusChoices.length; i++){
    const statusOptionEl = document.createElement("option");
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute("value", statusChoices[i]);

    //apend to select
    statusSelectEl.appendChild(statusOptionEl);
  }

  return actionContainerEl;
};


formEl.addEventListener("submit", taskFormHandler);
