//adding a todo

const ids=document.getElementById("id1");
const titles=document.getElementById("title1");
const descriptions=document.getElementById("description1");
const save=document.getElementById("savebtn");

var todos=[];

var fromstorage,parsed,todosstring;

function render(){
    fromstorage=localStorage.getItem('todos');
    todos=JSON.parse(fromstorage);
}
function tostring(){
    
    todosstring=JSON.stringify(todos);
    localStorage.setItem('todos',todosstring);
}

   
render();
console.log(todos);


save.onclick=function(){
  
  addtodo();


  
  window.location.href="index.html";
}


function addtodo() {
  var object = {
  
    id:ids.value,
    title:titles.value,
    description:descriptions.value,

    iscompleted: false
  };

    
    render();
    if(object["id"]!=="" && object["title"]!==""){
    todos.push(object);
    }
   
    
    tostring();

  
 
}