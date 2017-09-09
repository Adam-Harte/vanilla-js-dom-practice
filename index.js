var list = document.querySelector('#book-list ul');
var forms = document.forms;

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