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
    }
    taskInput.value = '';
})