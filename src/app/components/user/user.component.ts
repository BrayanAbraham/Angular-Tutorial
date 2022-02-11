import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User;

  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
    };
  }

  ngOnInit(): void {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
    };
  }
}
