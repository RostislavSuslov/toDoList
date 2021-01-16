 var newTask = document.querySelector('#new-task');
 var added = document.querySelector('#added');
 var taskList = document.querySelector('.tasks-list');
 var item = document.querySelector('.item');

 added.addEventListener('click', mainEvent);

 function mainEvent() {
     creatTask();
     runUpDestroy();
 }



 function creatTask() {

     title = document.createTextNode(newTask.value);

     const newItem = document.createElement("li");
     newItem.classList.add('item');

     const newCheckbox = document.createElement("input");
     newCheckbox.type = 'checkbox';

     const newSpan = document.createElement("span");
     newSpan.classList.add('delete');
     newSpan.title = 'delete';


     newItem.appendChild(newCheckbox);
     newItem.appendChild(title);
     newItem.appendChild(newSpan);

     taskList.insertBefore(newItem, null);


 };

 function runUpDestroy() {
     var destroy = document.getElementsByClassName('delete');
     for (var i = 0; i < destroy.length; i++) {
         destroy[i].onclick = function () {
             var el = destroy[0];
             this.closest('li').remove();
         }
     }
 }
 runUpDestroy();

