import * as createTask from './functions/taskFunctions';




document.getElementById('form')?.addEventListener('submit', (e: SubmitEvent) =>{
    e.preventDefault();

    const taskInput = document.getElementById('taskText') as HTMLInputElement;
    const taskInputValue = taskInput.value;

    createTask.addTask(taskInputValue)
 
    taskInput.value = '';
})


createTask.upDateTask()
