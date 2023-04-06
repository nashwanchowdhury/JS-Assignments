let taskmanager = (function() {
    let tasks = [];
    
    function addTask(x) {
       tasks.push(x);
    }
    function displayTasks() {
        console.log(`Tasks: ${tasks}`);
    }
    return {
        addTask: addTask,
        displayTasks: displayTasks
    };
})();


taskmanager.addTask('Do Laundry');
taskmanager.addTask('Do Dishes');
taskmanager.addTask('Do Homework');

taskmanager.displayTasks();