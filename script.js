// script.js
let workTime = 25 * 60; // 25 minutes in seconds
let timerInterval;
const tasks= [];

function updateDisplay() {
  const minutes = Math.floor(workTime / 60);
  const seconds = workTime % 60;
  document.getElementById('time').textContent = 
    `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function updateProgressRing() {
    const progress = (workTime / (25 * 60)) * 100;
    document.querySelector('.progress-ring').style.setProperty('--progress', `${progress}%`);
  }
  
  
function addTask() {
    const taskInput = document.getElementById('task-input');
    if (taskInput.value.trim() === '') return;
  
    tasks.push(taskInput.value);
    renderTasks();
    taskInput.value = '';
  }
  
  // Call this inside startTimer():
  updateProgressRing();

function startTimer() {
  timerInterval = setInterval(() => {
    workTime--;
    updateDisplay();
    if (workTime <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }, 1000);
}

document.getElementById('start-btn').addEventListener('click', startTimer);