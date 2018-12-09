/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom done');

        var addBtn = document.querySelector('#addTaskButton');
        var taskInput = document.querySelector('#taskInput');
        var newTaskList = document.querySelector('#taskList');

        addBtn.addEventListener('click', function (event) {
            console.log('klik');
            console.log(taskInput.value)

            var info = taskInput.value;

            var newTask = document.createElement('li');
            newTaskList.appendChild(newTask);

                var newTaskTitle = document.createElement('h1');
                this.appendChild(newTaskTitle);
                newTaskTitle.innerText = info;

                var newTaskBtnDelete = document.querySelector('button');
                newTask.appendChild(newTaskBtnDelete);
                newTaskBtnDelete.innerText = 'Delete';

                var newTaskBtnComplete = document.querySelector('button');
                newTask.appendChild(newTaskBtnComplete);
                newTaskBtnComplete.innerText = 'Complete';


        })





});










