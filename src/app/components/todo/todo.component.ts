import { formatCurrency } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from './../../model/todo';


export class TodoComponent implements OnInit {


    todo!: Todo
    id!: Todo
    description!: Todo;

    constructor( 
        todoService: TodoService,
        todoForm: FormControl) {

       
    }
    ngOnInit(): void {
         this.todo = {
            id : "",
            nameTask: "",
            description: ""
        }

    }



    ngOnSubmit(form :FormGroup){
        if(form.valid) {
            this.mapFormValuesToTodoModel()
        }

    }

    mapFormValuesToTodoModel() {
        this.todo.id = this.todoForm.value.id
        this.todo.nameTask = this.todoForm.value.id
        this.todo.description = this.todoForm.value.id

    }


    todoForm = new FormGroup({
        id: new FormControl('')
    })

}