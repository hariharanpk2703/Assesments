const container = document.getElementById('container');                      //container

const addlistBtn = document.getElementById('addListBtn');                   //add list button
const flex = document.getElementById('flex');                               // task cards body

const addNewList = document.getElementById('addNewList');                   //add task name
const listText = document.getElementById('listText');
const listBtn = document.getElementById('listBtn');
const cancelBtn = document.getElementById('cancelBtn');

const addNewItem = document.getElementById('addNewItem');                   //add task content
const itemText = document.getElementById('itemText');
const itemBtn = document.getElementById('itemBtn');

let page2BackBtn = document.getElementById('page2BackBtn');
let page2AddBtn = document.getElementById('page2AddBtn');

const page2Contains = document.getElementById('page2Contains');

function toggleList() {
    addNewList.classList.toggle('addNewListActive');

}

addlistBtn.addEventListener('click', toggleList);
cancelBtn.addEventListener('click', toggleList)

listBtn.addEventListener('click', () => {
    toggleList();

    //List Card

    let card = document.createElement('div');
    card.classList.add('task');
    flex.appendChild(card);

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('cardHeader');
    card.appendChild(cardHeader);

    let newListTitle = document.createElement('h2');
    newListTitle.classList.add('task_title');
    // newListTitle.id = task_title;
    newListTitle.style.color = 'tomato';
    newListTitle.innerHTML = `
        ${listText.value} 
        `;
    cardHeader.appendChild(newListTitle);

    let line = document.createElement('hr');
    line.classList.add('line');
    cardHeader.appendChild(line);

    // on click to newListTitle, make only that list active and all others inactive 
    newListTitle.addEventListener('click', myFunc)
    function myFunc(e) {
        e.target.parentElement.parentElement.classList.toggle('active');
        let activeList = document.querySelectorAll('.task');
        for (let i = 0; i < activeList.length; i++) {
            if (activeList[i] !== e.target.parentElement.parentElement) {
                activeList[i].classList.add('inactive');
                container.classList.add('inactive');
                page2Contains.classList.add('active');

                let page2Title = document.createElement('h2');
                page2Title.innerHTML = `
                <span style="color:tomato;">${newListTitle.innerHTML}</span> 
                `;
                page2BackBtn.after(page2Title);

                page2BackBtn.addEventListener('click', () => {
                    container.classList.remove('inactive');
                    activeList[i].classList.remove('inactive');
                    page2Contains.classList.remove('active');
                    page2Title.remove();

                });
                page2AddBtn.addEventListener('click', () => {
                    toggleList();
                    container.classList.remove('inactive');
                    activeList[i].classList.remove('inactive');
                    page2Contains.classList.remove('active');
                    page2Title.remove();
                });
                // page2Title.remove();
                // listText.value = '';
            }
        }
        e.target.removeclass('task_title');

    }


    let newTaskBody = document.createElement('div');
    newTaskBody.classList.add('task_body');
    newTaskBody.innerHTML = `
        <div class="btn-ListBody">
        <span class="material-icons removeTask"  >
        remove_circle
        </span>
        <span class="material-icons addTask"  >
        add_circle
        </span>
        </div>
        `;
    card.appendChild(newTaskBody);

    // itemText.value = '';
    // listText.value = '';
});

//scratch completed tasks

flex.addEventListener('click', scratchTodo);

function scratchTodo(e) {
    let item = e.target;
    if (item.classList.contains('pendingIcon')) {

        // let id = item.id;
        // let newid = document.getElementById(id);
        item.parentElement.classList.toggle('me');

    }
}

// remove tasks

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeTask')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
});

// adding tasks

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('addTask')) {
        addNewItem.classList.toggle('addNewItemActive');
        parentNode = e.target.parentNode.parentNode.parentNode;
    }
});

itemBtn.addEventListener('click', () => {

    addNewItem.classList.toggle('addNewItemActive');

    let newTask = document.createElement('p');
    newTask.classList.add('taskText');
    parentNode.appendChild(newTask);

    let pTask = document.createElement('div');
    pTask.classList.add('pTask');
    pTask.id = 'pendingtasks';

    pTask.innerHTML = `
        <span class="material-icons pendingIcon ">indeterminate_check_box</span>
        <p class="scratch" id="">${itemText.value}</p>
        `;
    parentNode.appendChild(pTask);
    itemText.value = '';
});
