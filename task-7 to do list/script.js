function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button class="delete" onclick="removeTask(this)">Delete</button>
      `;
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  }
  
  function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
  }
  
  function editTask(button) {
    const taskItem = button.parentNode;
    const taskText = taskItem.querySelector('span');
    const newTaskText = prompt('Edit task:', taskText.textContent);
  
    if (newTaskText !== null) {
      taskText.textContent = newTaskText;
    }
  }
  