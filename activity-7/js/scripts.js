// Array to hold tasks
var tasks = [];

//Task Status 'enum'
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

// Task constructor function- only constructor items can be capitalized 
function Task (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

// Create a new task element and add it to the DOM 
function addTaskElement (task) {
    // Create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    // Set attribute
    taskEl.setAttribute('id', task.id);

    // Add text to task element
    taskEl.appendChild(textEl);

    // Add task element to list
    listEl.appendChild(taskEl);
}

// Click handler to add a new task
function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value != '') {
        // Create a unique id
        var id = 'item-' + tasks.length;

        // Create a new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        // Add the task to the DOM
        addTaskElement(task);

        //Reset input
        inputEl.value = '';
    }
}

// Click handler to complete a task
function completeTask (event) {
    // Get the task element 
    var taskEl = event.target;
    var id = taskEl.id;

    // Find corresponding task in tasks array and update status
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task.id === id) {
            task.status = taskStatus.completed;
            break;
        }
    }

    // Move task element from active list and add to completed list 
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

// (Optional) Key press handler to automatically click add task button
function clickButton (event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

// Initializes the app
function init () {
    // Wire up the add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //Wire up the task completed list item click handler 
    document.getElementById('active-list').onclick = completeTask;

    // (Optional) Wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}

init();