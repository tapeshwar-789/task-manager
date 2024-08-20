import { CommonModule } from '@angular/common';
import { Component, NgModule ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  tasks: { title: string, description: string }[] = [];
  newTask: { title: string, description: string } = { title: '', description: '' };
  temp:string=""


  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  DeleteTask(title:string){
    console.log("hello Working well..",title)
    this.taskService.deleteTask(title).subscribe({
      next: () => {
        // Remove task from the list after successful deletion
        this.tasks = this.tasks.filter(task => task.title !== title);
        console.log(`Task with title "${title}" deleted successfully`);
      },
      error: (err) => {
        console.error('Failed to delete task', err);
      }
    });
  }
  // addTask() {
  //   if (this.newTask.title.trim() && this.newTask.description.trim()) {
  //     this.tasks.push({ title: this.newTask.title, description: this.newTask.description });
  //     this.newTask = { title: '', description: '' }; // Clear input fields after adding the task
  //   }
  // }

  editTask(title:string){
    console.log("Hello Working well....")
  }

  // Add task to the server and update the frontend
  addTask(): void {
    if (this.newTask.title.trim() && this.newTask.description.trim()) {
      this.taskService.createTask(this.newTask).subscribe((task) => {
        this.tasks.push(task); // Add the new task to the task list
        this.newTask = { title: '', description: '' }; // Clear input fields
      });
    }
  }
  
  
}
