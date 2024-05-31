import './style.css';
import sidebar from './sidebar.js';

// Show Sidebar by default
sidebar();

document.addEventListener('DOMContentLoaded', function() {

  const sidebar = document.getElementById('sidebar');
  const sidebarClose = document.getElementById('sidebarCloseBtn');
  sidebarClose.addEventListener('click', function() {
    sidebar.style.display = 'none';
  });

});