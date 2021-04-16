import AddTodo from './components/add-todo.js';
import Modal from './components/modal.js';

export default class View {
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();
        this.modal = new Modal();
        this.addTodoForm.onClick((title,description) => this.addToDo(title,description));
    }

    setModel(model){
        this.model = model;
    }

    addToDo(title,description){
        const todo = this.model.addTodo(title,description);
        this.createRow(todo);
    }

    toggleCompleted(id){
        this.model.toggleCompleted(id);
    }
    
    removeTodo(id){
        this.model.removeTodo(id);
        document.getElementById(id).remove();    
    }

    createRow(todo){
        const row = table.insertRow();
        row.setAttribute('id',todo.id);
        row.innerHTML = `
        <td>${todo.title}
        </td>
        <td>${todo.description}
        </td>
        <td class="text-center">

        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
            </button>
        </td>
        `;

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = todo.completed;
        checkBox.onclick = () => this.toggleCompleted(todo.id);
        row.children[2].appendChild(checkBox); //arbolito de html


        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn','btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class = "fa fa-trash"></i>';
        removeBtn.onclick = () =>this.removeTodo(todo.id);
        row.children[3].appendChild(removeBtn);
    }

    render(){
        const todos = this.model.getToDos();
        //for(const todo of todos){
         //   this.createRow(todo);
        //}
        todos.forEach((element) => this.createRow(element));
    }
}