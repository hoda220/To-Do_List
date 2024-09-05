/*
Students Tasks:::
[1] Use Sweet Alert -> Done
[2] Check if Task Is Exist -> Done
[3] Create Delete All Tasks Button
[4] Create finish All Tasks Button
[5] Add to Tasks To The Local Storage
*/

// Setting Up Variables
let input = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
let delAll = document.querySelector(".del")
let comAll = document.querySelector(".com");



// Focus on Input Field
window.onload = function () {
    input.focus();  
}

// Adding The Task
addButton.onclick = function () {

    let j=0;

        // get all Span
        let res =  Array.from(document.querySelectorAll(".task-box"));

        if(res.length > 0) {
        // Loop On res
          for(let i=0;i<res.length;i++) {
             // Check if Task Is Exist
             if(res[i].childNodes[0].textContent === input.value) {
     
                // sweetAlert
                sweetAlert("Exist");
                j++;
                input.value = "";
     
           }
         }
        }

        // It Input Is Empty
    if(input.value === "") {
        sweetAlert("empty");
    }
    else if(j === 0 ){
        let noTasksMsg = document.querySelector(".no-tasks-message");

        // Check if span message is exist
        if(document.body.contains(noTasksMsg)) {

            // Remove No Tasks Element
            noTasksMsg.remove();

        }

        // Create Span Element
        let mainSpan = document.createElement("span");

        // Create Delete Button
        let deleteElement = document.createElement("span");

        // Create The Span Text 
        let text = document.createTextNode(input.value);

        // Create The Delete Button Text
        let deleteText = document.createTextNode("delete")

        // Add Text To Main Span
        mainSpan.appendChild(text);

        // Add Class To Main Span
        mainSpan.className = "task-box";

        // Add Text To Delete Button
        deleteElement.appendChild(deleteText);

        // Add Class To Delete Button
        deleteElement.className = "delete";

        // Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);

        // Add The task To the Container
        tasksContainer.appendChild(mainSpan);

        // Add Task to Local Storage
        localStorage.setItem(input.value,"added");

        // Empty The Input
        input.value ="";

        // focus On Field 
        input.focus();

        // calculate tasks
        Calculatetasks();

    }

}

document.addEventListener("click",function (e) {
    
    // delete Task
    if(e.target.className === "delete") {
        e.target.parentNode.remove();

        //  check The Number Of tasks inside Conatiner
        if(tasksContainer.childElementCount === 0) {
            createNoTasks();
        }
    }

    // finish task
    if(e.target.classList.contains("task-box")) {

        // Toggle Class "finished"
        e.target.classList.toggle("finished");
    }
            // calculate tasks
            Calculatetasks();
});

// Function To Create No tasks Message
function createNoTasks() {
    
    // Create Message Span Element
    let msgSpan = document.createElement("span");

    // Create The text Message
    let msgtext = document.createTextNode("No tasks To Show");

    // Add Text To Message Span Element
    msgSpan.appendChild(msgtext);

    // Add Class To Message Span
    msgSpan.className = "no-tasks-message"
    
    // Append the Message Span Element To The Task Container
    tasksContainer.appendChild(msgSpan);
}

// function to Calculate Tasks
function Calculatetasks() {
    
        // calculate All tasks
        tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length

        // calculate Completed tasks
        tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length
}

  // 
   delAll.onclick = function () {

    let res = document.querySelectorAll(".task-box");
    for(let i =0;i<res.length;i++) {
        res[i].remove()
    }
    let s = document.createElement("span");
    let t =  document.createTextNode("No Tasks To Show");
    s.appendChild(t);
    tasksContainer.appendChild(s)
   }

   let x=0;
   comAll.onclick = function () {

    if(x === 0) {

    let all = Array.from(document.querySelectorAll(".task-box"));

    all.forEach((span) => {
        
        span.classList.add("finished");
        x++;

    })
       
   }
   else {
    
    let all = Array.from(document.querySelectorAll(".task-box"));

    all.forEach((span) => {
        
        span.classList.remove("finished");
        x=0;

    })
   }
}

