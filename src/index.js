import './style.css';
import sidebar from './sidebar.js';
import { inboxPage } from './inbox.js';
import { task, taskArray } from './task.js';

sidebar();

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
}

document.addEventListener('DOMContentLoaded', function() {

  task();
  inboxPage();

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