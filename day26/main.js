var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var addTask = $('#add');
var todoList = $('.todo-list');

addTask.addEventListener('submit', addItems);
todoList.addEventListener('click', deleteItem);
todoList.addEventListener('click', fixItem);

// Add Tasks

function addItems(e) {
    e.preventDefault();
    var newTask = $('#search').value;

    var todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    var taskNote = document.createElement('p');
    // taskNote.textContent = newTask;
    taskNote.appendChild(document.createTextNode(newTask));
    todoItem.appendChild(taskNote);

    var tools = document.createElement('div');
    tools.className = 'fix-and-delete';

    var fixBtn = document.createElement('i');
    fixBtn.className = 'fa-solid fa-pen-to-square fix';

    var deleteBtn = document.createElement('i');
    deleteBtn.className = 'fa-solid fa-trash delete';


    tools.appendChild(fixBtn);
    tools.appendChild(deleteBtn);
    todoItem.appendChild(tools);
    todoList.appendChild(todoItem);

    $('#search').value = '';
}

// Delete Tasks

function deleteItem(e) {
    if(e.target.classList.contains('delete')) {
        var tools = e.target.parentElement;
        var todoItem = tools.parentElement;
        todoList.removeChild(todoItem);
    }
}


// Fix Tasks
function fixItem(e) {
    if(e.target.classList.contains('fix')) {
        var tools = e.target.parentElement;
        var todoItem = tools.parentElement;

        var todoInput = document.createElement('input');
        todoInput.type = 'text';
        todoInput.style.width = '300px';
        todoInput.style.background = 'none';
        todoInput.style.padding = '0.5rem 1rem';
        todoInput.style.border = '1px solid #8758ff';
        todoInput.style.color = '#fff';
        todoInput.style.outline = 'none';

        var todoSubmit = document.createElement('input');
        todoSubmit.type ='submit';
        todoSubmit.style.border = 'none';
        todoSubmit.style.padding = '0.55rem';
        todoSubmit.style.background = '#8758ff';
        todoSubmit.style.color = '#fff';
        todoSubmit.style.marginLeft = '-4px';
        todoSubmit.style.cursor = 'pointer';
        todoSubmit.value = 'Add Task';

        var todoFix = document.createElement('form');
        todoFix.appendChild(todoInput);
        todoFix.appendChild(todoSubmit);

        todoInput.value = todoItem.innerText;
        todoItem.replaceWith(todoFix);
        
        todoFix.addEventListener('submit', function(e) {
            e.preventDefault();
            var newTask = todoInput.value;
            todoFix.replaceWith(todoItem);
            todoItem.querySelector('p').innerText = newTask;
        })
    }
}
