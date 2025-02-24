import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId:any=2;
  todolist=[{
    id:1,'task':"TASK1"
  },
  // {
  //   id:2,'task':"TASK2"
  // },
]

  constructor() { }
  addTodo( taskName:any){
    this.todolist.push({'id':this.taskId++,'task':taskName})
  }
  deletetodo(index:any){
    this.todolist.splice(index,1)
  }
}
