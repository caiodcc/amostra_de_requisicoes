import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jsonp',
  templateUrl: './jsonp.component.html',
  styleUrls: ['./jsonp.component.css']
})
export class JsonpComponent {

  posts : any 


  constructor(http: HttpClient) {
    
    let apiURL = http.get('https://jsonplaceholder.typicode.com/posts');
    apiURL.subscribe((data) => this.posts = data);
  }
  

}
