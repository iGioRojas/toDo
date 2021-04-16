export default class Model{
    constructor(){
        this.view = null;
        this.toDos = JSON.parse(localStorage.getItem('todos'));
        if(!this.toDos || this.toDos.length < 1){
            this.toDos = [
                {
                    id:0,
                    title: 'Do Portfolio',
                    description: 'Portfolio with HTML,CSS and JS',
                    completed:false,
                }
            ];
            this.currentId = 1;
        }else{
            this.currentId = this.toDos[this.toDos.length - 1].id + 1;
        }
        
    }

    setView(view){
        this.view = view;
    }

    getToDos(){
        return this.toDos;

    }

    findTodo(id){
        return this.toDos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id){
        const index = this.findTodo(id);
        const todo = this.toDos[index];
        todo.completed = !todo.completed;
        this.save();
    }

    addTodo(title,description){
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed:false,
        }

        this.toDos.push(todo);
        
        this.save();

        return {...todo};
    }

    removeTodo(id){
        const index = this.findTodo(id);
        this.toDos.splice(index,1);//elimina datos del array
        //Imprime el objeto console.log(this.toDos[index]);
        this.save();
    }

    save(){
        localStorage.setItem('todos', JSON.stringify(this.toDos));
    }
}