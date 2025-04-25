document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('tasks-container');
  
    addButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
  
        // Delete functionality
        li.querySelector('.delete-btn').addEventListener('click', () => {
          li.remove();
        });
      }
    });
  });