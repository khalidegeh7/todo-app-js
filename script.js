let todos = ['Take shower', 'Go to gym', 'Code'];


function startTodoApp (){
  for (let i=0; i< todos.length; i++){
   console.log(`${i + 1}. ${todos[i]}`);
  }
  console.log('*******');
}


function addTask(task){
  todos.push(task);
  console.log(`Added Task ✅: ${task}`);
  console.log('*******');
}

function removeTask(index){
  if(index>0 && index<=todos.length){
  let remove = todos.splice(index-1, 1);
  console.log(`Removed Task ❌: ${remove}`);
  }
  else{
    console.log('Removed invalid task, try again.');
  }
  console.log('*******');
}

startTodoApp();
addTask('go shopping');
removeTask(1);
startTodoApp();