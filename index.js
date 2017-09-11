var list = document.querySelector('#book-list ul');
var forms = document.forms;

//delete books
list.addEventListener('click', function(e){
    if(e.target.className === 'delete'){
        var li = e.target.parentElement;
        list.removeChild(li);
    }
});

var addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    var value = addForm.querySelector('input[type="text"').value;
    //create elements
    var liElem = document.createElement('li');
    var bookName = document.createElement('span');
    var deleteBtn = document.createElement('span');
    //add text content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    //append elements
    liElem.appendChild(bookName);
    liElem.appendChild(deleteBtn);
    list.appendChild(liElem)
});

//hide books
var hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
});

//search books
var searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    var term = e.target.value.toLowerCase();
    var books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        var title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});

//tabs
var tabs = document.querySelector('.tabs');
var panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI'){
        var targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach (function(panel) {
            if (panel === targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
})