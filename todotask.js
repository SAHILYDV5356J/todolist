







var todos = [];






// adding a todo
function addtodo() {
  var object = {
    // id: prompt("enter ID of todo:"),
    // title: prompt("enter title of todo:"),
    // description: prompt("enter the description of todo:"),

    id:ids.value,
    title:titles.value,
    description:descriptions.value,

    iscompleted: false
  };

    todos.push(object);
 
}

// mark the todo

function marktodo() {
  let flag = false;
  while (true) {
    let id = prompt("enter id of todo");

    for (let object in todos) {
      if (todos[object]["id"] === id) {
        todos[object]["iscompleted"] = true;

        flag = true;
        break;
      }
    }

    if (!flag) {
      console.log("this id is not exist in todolist: try again");
    }
    if (flag) {
      break;
    }
  }
}

//  for editing todo

function edittodo() {
  let flag = false;
  while (true) {
    let id = prompt("enter id of todo");

    for (let object in todos) {
      if (todos[object]["id"] === id) {
        todos[object] = {
          id: prompt("enter ID of todo:"),
          title: prompt("enter title of todo:"),
          description: prompt("enter the description of todo:"),
          iscompleted: false,
        };
        flag = true;
        break;
      }
    }

    if (!flag) {
      console.log("this id is not exist in todolist: try again");
    }
    if (flag) {
      break;
    }
  }
}

// list all todos

function listalltodo() {
  if (todos.length === 0) {
    console.log("You have no task yet:");
  } else {
    console.log(todos);
  }
}

//remove the todo
function removeatodo() {
  while (true) {
    let flag = false;
    var id = prompt("enter id of your todo");

    todos = todos.filter((value) => {
      if (value.id === id) {
        flag = true;
        return !value;
      } else {
        return value;
      }
    });

    if (!flag) {
      console.log("this id is not exist in todolist: try again");
    }

    if (flag) {
      break;
    }
  }
}




