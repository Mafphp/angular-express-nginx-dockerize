import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpService: HttpService) {}
  title = 'app';
  ngOnInit(): void {
    this.loadData();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  
  async loadData() {
    const users = await this.httpService.getUsers().toPromise()
    console.log(users);
  }
}
