import { taskArray } from './task.js';

export function inboxPage() {
  const window = document.getElementById('window');

  const sectionContainer = document.createElement('div');
  sectionContainer.classList.add('sectionContainer');

  const sectionHeader = document.createElement('span');
  sectionHeader.classList.add('sectionHeader');
  sectionHeader.innerHTML = `Inbox`;
  sectionContainer.appendChild(sectionHeader);

  const sectionTask = document.createElement('div');
  sectionTask.classList.add('sectionTask');
  sectionContainer.appendChild(sectionTask);

  function displayTasks(arr) {
    arr.forEach(task => {

      const taskContainer = document.createElement('div');
      taskContainer.classList.add('taskContainer');

      const taskActions = document.createElement('div');
      taskActions.classList.add('taskActions');

      const taskDoneSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M2.5 13.8333L6 17.5L7.02402 16.4272M16.5 6.5L10.437 12.8517" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.5 13.8333L11 17.5L21.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
      const taskDoneBtn = document.createElement('div'); 
      taskDoneBtn.classList.add('taskDoneBtn');
      taskDoneBtn.innerHTML = taskDoneSVG;
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
  displayTasks(taskArray);
  
  window.appendChild(sectionContainer);
}