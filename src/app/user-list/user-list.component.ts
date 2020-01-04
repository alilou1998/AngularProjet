import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;

  matricule: number;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getUsersList();

  }

  deleteUser(matricule: number) {
    this.userService.deleteUser(matricule)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(matricule: number) {
    this.router.navigate(['details', matricule]);
  }

  userUpdate(matricule: number) {
    this.router.navigate(['update', matricule]);
  }

  searchUser(matricule: number) {

    this.router.navigate(['details',matricule]);
  }

}
