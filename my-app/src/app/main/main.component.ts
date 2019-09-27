import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private _users: any[];
  letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  filter = '';

  public get users() {
    return this._users.filter(user => {
      if(!this.filter) {
        return true;
      }
      return user.name.startsWith(this.filter);
    });
  }

  constructor(@Inject(UserService) private readonly userService: UserService) { }

  ngOnInit() {
    this._users = this.userService.users;
  }

  public delete(id: number) {

    for(let i = 0 ; i < this._users.length ; i++) {

      if( id === this._users[i].id) {
        this._users.splice(i,1);
      }
    }
  }

}
