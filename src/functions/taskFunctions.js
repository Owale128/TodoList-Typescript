"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const _deleteTask = exports.toggleTask = exports.upDateTask = exports.addTask = exports.saveTask = void 0;
// export { _deleteTask as deleteTask };
var taskList = JSON.parse(localStorage.getItem('task') || JSON.stringify([
    { task: 'Code', completed: false },
    { task: 'Sleep', completed: false },
    { task: 'Repeat', completed: false }
]));
var saveTask = function () {
    localStorage.setItem('task', JSON.stringify(taskList));
};
const _saveTask = saveTask;
export { _saveTask as saveTask };
var addTask = function (task) {
    if (task.trim() !== '') {
        var todo = { task: task, completed: false };
        taskList.push(todo);
        (0, _saveTask)();
        (0, _upDateTask)();
    }
};
const _addTask = addTask;
export { _addTask as addTask };
var upDateTask = function () {
    var incomplete = document.querySelector('#incomplete-list');
    var complete = document.querySelector('#complete-list');
    incomplete.innerHTML = '';
    complete.innerHTML = '';
    taskList.forEach(function (todo, index) {
        var _a, _b;
        var taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = "<div class=\"checkmark\">&#10004;</div>\n        ".concat(todo.task, "\n        <button class=\"delete-button\">Delete</button>");
        (_a = taskItem.querySelector('.checkmark')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return (0, _toggleTask)(index); });
        (_b = taskItem.querySelector('.delete-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return (0, _deleteTask)(index); });
        if (todo.completed) {
            taskItem.classList.add('checked');
            complete.appendChild(taskItem);
        }
        else {
            incomplete.appendChild(taskItem);
        }
    });
};
const _upDateTask = upDateTask;
export { _upDateTask as upDateTask };
var toggleTask = function (index) {
    taskList[index].completed = !taskList[index].completed;
    (0, _saveTask)();
    (0, _upDateTask)();
};
const _toggleTask = toggleTask;
export { _toggleTask as toggleTask };
var deleteTask = function (index) {
    taskList.splice(index, 1);
    (0, _saveTask)();
    (0, _upDateTask)();
};
const _deleteTask = deleteTask;
export { _deleteTask as deleteTask };
(0, _upDateTask)();
