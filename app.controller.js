"use strict";
function ToDoController() {
    const controller = this;

    controller.jobList [
        {
            task: "Walk the dog",
            completed: false
        },

        {
            task: "Go to store",
            completed: true
        }, 

        {
            task: "Get gas",
            completed: false
        }, 

        {
            task: "Wash the car",
            completed: false
        }
    ];
    
    controller.addTask = function(input) {
        task = {}; 
        task.input = input; 
        task.completed = false;
        controller.jobList.push(input); 
    };

    controller.removeTask = function(input){
        controller.todoList.splice(input, 1);
    };

    controller.complete = function(input){
        controller.jobList.completed = true; 
    };



}
angular
  .module("App")
  .controller("ToDoController", ToDoController);