import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoformComponent } from "./todoform/todoform.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoformComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
}
