import './style.css';
import sidebar from './sidebar.js';

sidebar();

const inboxBtn = document.getElementById('inboxBtn');
const completedBtn = document.getElementById('completedBtn');
const upcomingBtn = document.getElementById('upcomingBtn');
const filterBtn = document.getElementById('filterBtn');

function pageSwitcher() {
  // default page - inbox page
  inboxPage();
  inboxBtn.classList.add('selectedBtn');

  inboxBtn.addEventListener('click', function() {
    inboxPage();
    inboxBtn.classList.add('selectedBtn');
    completedBtn.classList.remove('selectedBtn');
  }); 
  completedBtn.addEventListener('click', function() {
    completedPage();
    completedBtn.classList.add('selectedBtn');
    inboxBtn.classList.remove('selectedBtn');
  });
}

let taskArray = [];
let taskCount = 0;
let completedTaskArray = [];
let completedTaskCount = 0;

function CreateTask(id, name, desc, date, label) {
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.dueDate = date;
  this.label = label;
}

function parseDate(date) {
  date.toString();
  let dd = date.slice(0, 2);
  let mm = date.slice(2, 4);
  let yy = date.slice(4);
  return(`${dd}-${mm}-${yy}`);
}

function newTask(taskName, description, dueDate, label) {
  const f_date = parseDate(dueDate); 
  const newTask = new CreateTask(taskCount++, taskName, description, f_date, label);
  taskArray.push(newTask);
}

function completedTask(taskId) {
  const taskIndex = taskArray.findIndex(task => task.id === taskId);
  if (taskIndex > -1) {
    completedTaskArray.push(taskArray[taskIndex]);
    taskArray.splice(taskIndex, 1);
    completedTaskCount++;
    displayTaskInbox(taskArray);
  }
} 
function reverseCompletedTask(taskId) {
  const taskIndex = completedTaskArray.findIndex(task => task.id === taskId);
  if (taskIndex > -1) {
    const task = completedTaskArray.splice(taskIndex, 1)[0];
    taskArray.push(task);
    completedTaskCount--;
    taskCount++;
    displayTaskInbox(taskArray);
    displayTaskCompleted(completedTaskArray);
  }
}

function initTasks() {
  newTask(`Meditate`, `do some yoga after waking up`, `20072024`, `purple`);
  newTask(`Read`, `King Arthur & The Knights of The Round Table`, `31052024`, `red`);
  newTask(`Wash`, `Bike and Car`, `03062024`, `purple`);
}

function displayTaskInbox(arr) {
  const sectionTask = document.getElementById('sectionTask');
  sectionTask.innerHTML = '';
  arr.forEach(task => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');
    const taskActions = document.createElement('div');
    taskActions.classList.add('taskActions');

    const taskDoneSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M2.5 13.8333L6 17.5L7.02402 16.4272M16.5 6.5L10.437 12.8517" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.5 13.8333L11 17.5L21.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
    const taskDoneBtn = document.createElement('div'); 
    taskDoneBtn.classList.add('taskDoneBtn');
    taskDoneBtn.innerHTML = taskDoneSVG;
    taskDoneBtn.addEventListener('click', () => completedTask(task.id));
    taskActions.appendChild(taskDoneBtn);

    const taskEditSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M11 20H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>`;
    const taskEditBtn = document.createElement('div') 
    taskEditBtn.classList.add('taskEditBtn'); 
    taskEditBtn.innerHTML = taskEditSVG;
    taskActions.appendChild(taskEditBtn);

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('taskDetails');
    const taskName = document.createElement('span');
    taskName.classList.add('taskName');
    taskName.innerHTML = task.name;
    const taskDesc = document.createElement('span');
    taskDesc.classList.add('taskDesc');
    taskDesc.innerHTML = task.desc;
    const taskDate = document.createElement('span');
    taskDate.classList.add('taskDate');
    taskDate.innerHTML = task.dueDate;
    const taskLabel = document.createElement('span');
    taskLabel.classList.add('taskLabel');
    taskLabel.innerHTML = task.label;
    
    taskDetails.appendChild(taskName);
    taskDetails.appendChild(taskDesc);
    taskDetails.appendChild(taskDate);
    taskDetails.appendChild(taskLabel);
    taskContainer.appendChild(taskActions);
    taskContainer.appendChild(taskDetails);

    sectionTask.appendChild(taskContainer);
  });
}

function displayTaskCompleted(arr) {
  const sectionTask = document.getElementById('sectionTask');
  sectionTask.innerHTML = '';
  arr.forEach(task => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');
    const taskActions = document.createElement('div');
    taskActions.classList.add('taskActions');

    const taskDoneSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M2.5 13.8333L6 17.5L7.02402 16.4272M16.5 6.5L10.437 12.8517" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.5 13.8333L11 17.5L21.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
    const taskDoneBtn = document.createElement('div'); 
    taskDoneBtn.classList.add('taskDoneBtn');
    taskDoneBtn.classList.add('selectedBtn');
    taskDoneBtn.innerHTML = taskDoneSVG;
    taskDoneBtn.addEventListener('click', () => reverseCompletedTask(task.id));
    taskActions.appendChild(taskDoneBtn);

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('taskDetails');
    const taskName = document.createElement('span');
    taskName.classList.add('taskName');
    taskName.innerHTML = task.name;
    const taskDesc = document.createElement('span');
    taskDesc.classList.add('taskDesc');
    taskDesc.innerHTML = task.desc;
    const taskDate = document.createElement('span');
    taskDate.classList.add('taskDate');
    taskDate.innerHTML = task.dueDate;
    const taskLabel = document.createElement('span');
    taskLabel.classList.add('taskLabel');
    taskLabel.innerHTML = task.label;
    
    taskDetails.appendChild(taskName);
    taskDetails.appendChild(taskDesc);
    taskDetails.appendChild(taskDate);
    taskDetails.appendChild(taskLabel);
    taskContainer.appendChild(taskActions);
    taskContainer.appendChild(taskDetails);

    sectionTask.appendChild(taskContainer);
  });
}

function createTaskForm() {
  const taskFormContainer = document.createElement('div');
  taskFormContainer.id = "taskFormContainer";
  taskFormContainer.classList.add('background-blur');
  taskFormContainer.style.display = 'block';
  
  const form = document.createElement('form');
  form.setAttribute('id', 'taskForm');
  
  const taskName = document.createElement('input');
  taskName.setAttribute('type', 'text');
  taskName.setAttribute('name', 'taskName');
  taskName.setAttribute('placeholder', 'Task Name');
  taskName.required = true;
  
  const taskDesc = document.createElement('textarea');
  taskDesc.setAttribute('name', 'taskDesc');
  taskDesc.setAttribute('placeholder', 'Task Description');
  taskDesc.required = false;
  
  const taskDueDate = document.createElement('input');
  taskDueDate.setAttribute('type', 'date');
  taskDueDate.setAttribute('name', 'taskDueDate');
  taskDueDate.required = false;
  
  const taskLabel = document.createElement('select');
  taskLabel.setAttribute('name', 'taskLabel');
  const tags = ["Red", "Purple", "Green"];
  tags.forEach(tag => {
    const option = document.createElement('option');
    option.value = tag.toLowerCase();
    option.textContent = tag;
    taskLabel.appendChild(option);
  });
  
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.textContent = 'Add Task';

  const closeBtn = document.createElement('button');
  closeBtn.id = "taskFormClose";
  closeBtn.innerHTML = `Exit & Discard`;
  closeBtn.addEventListener('click', function() {
    taskFormContainer.style.display = 'none';
  });

  form.appendChild(taskName);
  form.appendChild(taskDesc);
  form.appendChild(taskDueDate);
  form.appendChild(taskLabel);
  form.appendChild(submitBtn);

  taskFormContainer.appendChild(form);
  taskFormContainer.appendChild(closeBtn);
  document.body.appendChild(taskFormContainer);

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = taskName.value;
    const desc= taskDesc.value;
    const dueDate = taskDueDate.value.replaceAll('-', '');
    const label = taskLabel.value;

    newTask(name, desc, dueDate, label);
    displayTaskInbox(taskArray);
    taskFormContainer.style.display = 'none';
  });
}

const window = document.getElementById('window');

function inboxPage() {
  window.innerHTML = ''; // clear page
  const sectionContainer = document.createElement('div');
  sectionContainer.classList.add('sectionContainer');
  const sectionHeader = document.createElement('span');
  sectionHeader.classList.add('sectionHeader');
  sectionHeader.innerHTML = `Inbox`;
  sectionContainer.appendChild(sectionHeader);

  const sectionTask = document.createElement('div');
  sectionTask.id = "sectionTask";
  sectionTask.classList.add('sectionTask');
  sectionContainer.appendChild(sectionTask);

  window.appendChild(sectionContainer);
  displayTaskInbox(taskArray);
}

function completedPage() {
  window.innerHTML = ''; // clear page
  const sectionContainer = document.createElement('div');
  sectionContainer.classList.add('sectionContainer');
  const sectionHeader = document.createElement('span');
  sectionHeader.classList.add('sectionHeader');
  sectionHeader.innerHTML = `Completed Tasks`;
  sectionContainer.appendChild(sectionHeader); 

  const sectionTask = document.createElement('div');
  sectionTask.id = "sectionTask";
  sectionTask.classList.add('sectionTask');
  sectionContainer.appendChild(sectionTask);

  window.appendChild(sectionContainer);
  displayTaskCompleted(completedTaskArray);
}

document.addEventListener('DOMContentLoaded', function() {
  initTasks();

  pageSwitcher();

  const addTaskBtn = document.getElementById('addTaskBtn');
  addTaskBtn.addEventListener('click', function() {
    createTaskForm();
  });

  const sidebar = document.getElementById('sidebar');
  const sidebarClose = document.getElementById('sidebarCloseBtn');
  sidebarClose.addEventListener('click', function() {
    sidebar.style.display = 'none';
  });
});