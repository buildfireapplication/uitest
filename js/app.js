
function loadTasks(taskList){
    let container = document.getElementById('taskContainer');
    container.innerHTML='';

    taskList.forEach((task,i)=>{
        let divTask = document.createElement('div');
        divTask.className="taskCard list-group-item";
        divTask.innerHTML = `
            ${task.img?"<img class='img-fluid' src='" + task.img + "' />":""}
            <h4>
            <div class="input-group mb-3">
            <div class="input-group-prepend">
            <div class="input-group-text">
                <input type="checkbox" ${task.completed?"checked":""} title="check completed"> 
            </div></div> 
            <input type="text" class="form-control" placeholder="${task.title + ' ' + i}">
            </div>
            </h4>
            <span class="small">created on ${task.createdOn} by ${task.createdBy}</span>
            <p class="text-justify">${task.description}</p>
            <span class="due shadow p-1 mb-5 bg-white rounded">Due on ${task.dueDate}</span>            
        `;

        if(task.completed)
            divTask.classList.add("list-group-item-success");
        else if(task.dueDate < Date.now() )
            divTask.classList.add("list-group-item-danger");


        container.appendChild(divTask);
    });
}


loadTasks(taskList);


function addTask(task){
    taskList.unshift(task);
    loadTasks(taskList);
}