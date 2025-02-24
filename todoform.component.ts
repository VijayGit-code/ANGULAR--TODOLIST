import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {
  todoinput=""
  constructor(private ts:TodoService){}
  ngOnInit():void{

  }
  addtask()
  {
    this.ts.addTodo(this.todoinput);
    this.todoinput=""

  }
  // resttask(){

  // }

}
