interface Task {
    task: string;
    completed: boolean;
};

let taskList: Task[] = JSON.parse(localStorage.getItem('task') || JSON.stringify([]));

const saveTask = () => {
    localStorage.setItem('task', JSON.stringify(taskList))
};

document.getElementById('form')?.addEventListener('submit', (e: SubmitEvent) =>{
    e.preventDefault();

    const taskInput = document.getElementById('taskText') as HTMLInputElement;
    const taskInputValue = taskInput.value;

    if(taskInputValue.trim() !== ''){
        const todo = {task: taskInputValue, completed: false}
        taskList.push(todo)
        saveTask()
        upDateTask()
    }   
    taskInput.value = '';
})

const upDateTask = () => {
    const incomplete = document.querySelector('#incomplete-list') as HTMLElement;
    const complete = document.querySelector('#complete-list') as HTMLElement;

    incomplete.innerHTML = '';
    complete.innerHTML = '';

    taskList.forEach((todo, index) =>{
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        taskItem.innerHTML= `<div class="checkmark">&#10004;</div>
        ${todo.task}
        <button class="delete-button">Delete Button</button>`;

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


const toggleTask = (index: number) => {
taskList[index].completed = !taskList[index].completed
saveTask()
upDateTask()
}

const deleteTask = (index: number) => {
taskList.splice(index, 1)
saveTask()
upDateTask()
}

upDateTask()