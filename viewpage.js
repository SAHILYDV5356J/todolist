const ids=document.getElementById("id");
const titles=document.getElementById("title");
const descriptions=document.getElementById("description");
const remove=document.getElementById("delete");
const mark=document.getElementById("mark");


const myid = sessionStorage.getItem('id');
const mytitle = sessionStorage.getItem('title');
const mydescription = sessionStorage.getItem('description');
const mycompletion=sessionStorage.getItem('iscompleted');


if(mycompletion=="true"){

  mark.style.color="#28a91cff";

}
else{
  mark.style.color="white"
}

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



ids.innerText=myid;
titles.innerText=mytitle;
descriptions.innerHTML=mydescription;





//remove an element
remove.onclick=function(){
    render();
     todos = todos.filter((value) => {
      if (value.id === myid && value.title===mytitle) {
        flag = true;
        return !value;
      } else {
        return value;
      }
    });

    tostring();
    window.location.href = "index.html";

}


//mark/unmark an element
mark.onclick=function(){

        render();

     for(let object in todos){
        if(todos[object]["id"]===myid){

          if( !todos[object]["iscompleted"]){
            todos[object]["iscompleted"]=true;
            mark.style.color="#28a91cff";
          }
          else{
             todos[object]["iscompleted"]=false;
            mark.style.color="#ffffffff";
           
          }
            
        }
     }

     tostring();
}




