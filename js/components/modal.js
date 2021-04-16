export default class Modal{
    constructor(){
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.btn = document.getElementById('modal-btn');
        this.completed = document.getElementById('modal-completed');
    }

    onClick(callback){
        this.btn.onclick = () => {
            if(title.value === '' || description.value === ''){
                this.alert.show('Title and Description are required');
                return;    
            }

            $('#modal').modal('toggle');
        }
    }
}