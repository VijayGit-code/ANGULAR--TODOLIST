import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
   constructor(private ts:TodoService){}
   todos:any;
   ngOnInit():void{
    this.todos=this.ts.todolist

   }
   removetodo(index:any)
   {
    this.ts.deletetodo(index)
   }

}
