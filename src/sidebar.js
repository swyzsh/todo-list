import userPfp from './metadata/user-pfp.jpg';
import sidebarLeft from './metadata/icons/sidebar-left-01-stroke-rounded.svg'

function sidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.add('background-blur');
  
  const sidebarAction = document.createElement('div');
  sidebarAction.classList.add('sidebarAction');

  const profile = document.createElement('div');
  
  let profilePicture = document.createElement('img');
  profilePicture.id = `profileImg`;
  profilePicture.src = userPfp;
  profile.appendChild(profilePicture);
  
  let profileName = document.createElement('span');
  profileName.id = "profileName";
  profileName.innerHTML = `Swyzsh`;
  profile.appendChild(profileName);
  
  sidebarAction.appendChild(profile);

  const actions = document.createElement('div');
  
  const sidebarClose = document.createElement('button');
  sidebarClose.id = "sidebarCloseBtn";
  const sidebarLeftImg = document.createElement('img');
  sidebarLeftImg.src = sidebarLeft;
  sidebarClose.appendChild(sidebarLeftImg);
  actions.appendChild(sidebarClose);
  
  sidebarAction.appendChild(actions);
  sidebar.appendChild(sidebarAction);

  const taskAction = document.createElement('div');
  taskAction.classList.add('taskbarAction');

  function TaskBtn(id, icon, text) {
    this.button = document.createElement('button');
    this.button.classList.add("background-blur");
    this.button.id = id;

    this.icon = document.createElement('div');
    this.icon.innerHTML = icon;
    this.icon.classList.add('sidebarIcon');
    this.button.appendChild(this.icon);

    this.text = document.createElement('span');
    this.text.innerHTML = text;
    this.text.classList.add('sidebarText');
    this.button.appendChild(this.text);

    taskAction.appendChild(this.button);
  }

  const addTaskSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"> <path d="M12 8V16M16 12L8 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" /></svg>`;
  new TaskBtn(`addTaskBtn`, addTaskSvg, `Add Task`);

  const searchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M14 14L16.5 16.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>`;
  new TaskBtn(`searchBtn`, searchSvg, `Search`);

  const inboxSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>`;
  new TaskBtn(`inboxBtn`, inboxSvg, `Inbox`);

  const todaySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M3.5 9.36842C3.5 5.89491 3.5 4.15816 4.52513 3.07908C5.55025 2 7.20017 2 10.5 2H13.5C16.7998 2 18.4497 2 19.4749 3.07908C20.5 4.15816 20.5 5.89491 20.5 9.36842V14.6316C20.5 18.1051 20.5 19.8418 19.4749 20.9209C18.4497 22 16.7998 22 13.5 22H10.5C7.20017 22 5.55025 22 4.52513 20.9209C3.5 19.8418 3.5 18.1051 3.5 14.6316V9.36842Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.5 11H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M7 12C7 12 7.5 12 8 13C8 13 9.58824 10.5 11 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.5 17H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M8 2L8.0822 2.4932C8.28174 3.69044 8.38151 4.28906 8.80113 4.64453C9.22075 5 9.82762 5 11.0414 5H12.9586C14.1724 5 14.7793 5 15.1989 4.64453C15.6185 4.28906 15.7183 3.69044 15.9178 2.4932L16 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M8 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
  new TaskBtn(`todayBtn`, todaySvg, `Today`);

  const upcomingSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M11.05 22C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.4267 5.62803 21.4957 7.63364 21.4997 11.5V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M21 18.5L13 18.5M21 18.5C21 19.2002 19.0057 20.5085 18.5 21M21 18.5C21 17.7998 19.0057 16.4915 18.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 2V4M6 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 8H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
  new TaskBtn(`upcomingBtn`, upcomingSvg, `Upcoming`);

  const filterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><rect x="18" y="18" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="18" y="10.5" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="18" y="3" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="10.5" y="18" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="10.5" y="10.5" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="10.5" y="3" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="3" y="18" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="3" y="10.5" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="3" y="3" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /></svg>`;
  new TaskBtn(`filterBtn`, filterSvg, `Filters & Labels`);

  sidebar.appendChild(taskAction);
}
export default sidebar;