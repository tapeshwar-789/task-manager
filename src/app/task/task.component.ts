import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks: { title: string, description: string }[] = [];
  newTask: { title: string, description: string } = { title: '', description: '' };


    constructor(private taskService: TaskService) {}

  // ngOnInit(): void {
  //   this.loadTasks();
  // }

  // loadTasks(): void {
  //   this.taskService.getTasks().subscribe((data) => {
  //     this.tasks = data;
  //   });
  // }

  addTask() {
    if (this.newTask.title.trim() && this.newTask.description.trim()) {
      this.tasks.push({ title: this.newTask.title, description: this.newTask.description });
      this.newTask = { title: '', description: '' }; // Clear input fields after adding the task
    }
  }


  // Add task to the server and update the frontend
  // addTask(): void {
  //   if (this.newTask.title.trim() && this.newTask.description.trim()) {
  //     this.taskService.createTask(this.newTask).subscribe((task) => {
  //       this.tasks.push(task); // Add the new task to the task list
  //       this.newTask = { title: '', description: '' }; // Clear input fields
  //     });
  //   }
  // }


}
