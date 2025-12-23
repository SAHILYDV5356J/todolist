const searchbtn=document.getElementById("searchbtn");
const search=document.getElementById("search");
const show=document.getElementById("searchcontent");
const addbtn=document.getElementById("add");
const scrolpart=document.querySelector("#scrolpart")



var todos = [];

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


 


searchbtn.onclick=function(){

  console.log("clicked");
   let flag=false;
  for(let object in todos){
  
    if(search.value===todos[object]["id"]  || search.value===todos[object]["title"]){

      let ans="#"+ todos[object]["id"] + "     "+ todos[object]["title"] ;

      

      if(todos[object]["iscompleted"]===true){
        

        show.innerHTML="<a id='show' href='viewpage.html' style=''><pre></pre><i class='fa-regular fa-circle-check' style='color: #28a91cff;'></i></a>";

        document.getElementById("show").firstChild.innerHTML=ans;
      }
      else{

         show.innerHTML="<a id='show' href='viewpage.html'><pre></pre><i class='fa-regular fa-circle-check' style='color: #ff0000ff;'></i></a>";

        document.getElementById("show").firstChild.innerHTML=ans;

      }
      
      document.getElementById("show").firstChild.onclick=function(){
         sessionStorage.setItem('id', todos[object]["id"]);  
         sessionStorage.setItem('title',todos[object]["title"]);
         sessionStorage.setItem('description',todos[object]["description"]);
         sessionStorage.setItem('iscompleted',todos[object]["iscompleted"]);

        
      }
      
      
      flag=true;
    }
     
  }

  if(!flag){
    show.innerHTML="<a href='' style='color:red;justify-content:center'> NOT FOUND! </a>";
    
  }
}





// scrollbar

if(todos.length===0){
  var ans=" <i style='font-size: 8rem;color:white;' class='fa-regular fa-folder-open'></i>"
  document.getElementById("scrolpart").innerHTML=ans;
  document.getElementById("scrolpart").style.justifyContent="center";


}
if(todos.length!==0){
  
  for(let object in todos){
    const task=document.createElement("a");
    scrolpart.appendChild(task);
    task.setAttribute("href","viewpage.html");

    const taskpre=document.createElement("pre");
    task.appendChild(taskpre);
    const mark=document.createElement("div");
    task.appendChild(mark);
   
    
    let id=todos[object]["id"];
    let title=todos[object]["title"];
    let description=todos[object]["description"];
    let iscompleted=todos[object]["iscompleted"];

    

    let ans="#"+ id+"      "+title;
     task.firstChild.innerHTML=ans;

    if(iscompleted){
       mark.innerHTML="<i class='fa-regular fa-circle-check' style='color: #28a91cff;'></i>";

      

    }
    else{
      mark.innerHTML="<i class='fa-regular fa-circle-check' style='color: #ff0000ff;'></i>";

    }


    task.onclick=function(){
       sessionStorage.setItem('id', todos[object]["id"]);  
         sessionStorage.setItem('title',todos[object]["title"]);
         sessionStorage.setItem('description',todos[object]["description"]);
         sessionStorage.setItem('iscompleted',todos[object]["iscompleted"]);
    }

  }
}



















