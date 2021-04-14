export default class Model{
    constructor(){
        this.view = null;
        this.toDos = [];
        this.currentId = 1;
    }

    setView(view){
        this.view = view;
    }

    getToDos(){
        return this.toDos;

    }

    addTodo(title,description){
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed:false,
        }

        this.toDos.push(todo);
        console.log(this.toDos);

        return {...todo};
    }
}