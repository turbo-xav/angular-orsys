import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {
      id: 1,
      name: 'Xavier'
    },
    {
      id: 2,
      name: 'Ahmidou'
    },
    {
      id: 3,
      name: 'Thierry'
    },
    {
      id: 4,
      name: 'Gilles'
    },
    {
      id: 5,
      name: 'Obiwan'
    },
    {
      id: 6,
      name: 'L\'homme mystère'
    },
    {
      id: 7,
      name: 'Superman'
    }

  ];

  constructor() { }
}
