import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];
  data: Observable<any> = new Observable();

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@gmail.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true,
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true,
      },
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
      setTimeout(() => {
        observer.next(5);
      }, 5000);
    });
    return this.data;
  }
}
