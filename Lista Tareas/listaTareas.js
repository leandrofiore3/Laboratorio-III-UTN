const form = document.querySelector('#form');
const taskList = document.querySelector('#taskList');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const taskName = event.target.elements.taskName.value;
  const taskDescription = event.target.elements.taskDescription.value;
  
  const task = document.createElement('li');
  task.innerHTML = `<h2>${taskName}</h2><p>${taskDescription}</p>`;
  taskList.appendChild(task);
  
  event.target.reset();
});
