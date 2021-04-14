import AddTodo from './components/add-todo.js';

export default class View {
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();

        this.addTodoForm.onClick((title,description) => this.addToDo(title,description));
    }

    setModel(model){
        this.model = model;
    }

    addToDo(title,description){
        const todo = this.model.addTodo(title,description);

    }

}