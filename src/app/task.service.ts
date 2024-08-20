// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


  // Send a new task to the server
  createTask(task: { title: string, description: string }): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  deleteTask(title: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${encodeURIComponent(title)}`);
  }

  editTask(title:string,task:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/${encodeURIComponent(title)}`,task)
  }
}
