"use strict";
var _a;
// Object.defineProperty(exports, "__esModule", { value: true });
import * as createTask from "./functions/taskFunctions.js";
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    var taskInput = document.getElementById('taskText');
    var taskInputValue = taskInput.value;
    createTask.addTask(taskInputValue);
    taskInput.value = '';
});

createTask.upDateTask(); 
