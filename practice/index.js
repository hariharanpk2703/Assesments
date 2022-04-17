const task=[]

function addtask(){
 const name = document.getElementById("name").value
 console.log(name)
 const tempObj ={

taskname: name
}
task.push(tempObj)
console.log(task)


}

