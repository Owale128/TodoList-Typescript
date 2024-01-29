import { Task } from "../interface/taskInterface";

let taskList: Task[] = JSON.parse(localStorage.getItem('task') || JSON.stringify([
    {task: 'Code', completed: false},
    {task: 'Sleep', completed: false},
    {task: 'Repeat', completed: false}
]));

export const saveTask = () => {
    localStorage.setItem('task', JSON.stringify(taskList))
};


export const addTask = (task: string) => {
   
    if(task.trim() !== '') {
        const todo = {task: task, completed: false}
        taskList.push(todo)
      saveTask()
      upDateTask()
    }  

}

export const upDateTask = () => {
    const incomplete = document.querySelector('#incomplete-list') as HTMLElement;
    const complete = document.querySelector('#complete-list') as HTMLElement;

    incomplete.innerHTML = '';
    complete.innerHTML = '';

    taskList.forEach((todo, index) =>{
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        taskItem.innerHTML= `<div class="checkmark">&#10004;</div>
        ${todo.task}
        <button class="delete-button">Delete</button>`;

        taskItem.querySelector('.checkmark')?.addEventListener('click', ()=> toggleTask(index))
        taskItem.querySelector('.delete-button')?.addEventListener('click', ()=> deleteTask(index))

        if(todo.completed) {
        taskItem.classList.add('checked')
        complete.appendChild(taskItem)
        } else {
            incomplete.appendChild(taskItem)
        }
    })
}


export const toggleTask = (index: number) => {
taskList[index].completed = !taskList[index].completed
saveTask()
upDateTask()
}

export const deleteTask = (index: number) => {
taskList.splice(index, 1)
saveTask()
upDateTask()
}

upDateTask()