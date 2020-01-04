import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserListComponent } from '../user-list/user-list.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  matricule: number;
  user: User;
  users: Observable<User[]>;
  submitted= false;

  constructor(private route: ActivatedRoute, private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.user = new User();

    this.matricule = this.route.snapshot.params.matricule;

    this.userService.getUser(this.matricule)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      }, error => console.log(error));

  }

  list() {
    this.router.navigate(['users']);

  }

  updateUser(matricule: number) {
    this.router.navigate(['update', matricule]);
  }

  reloadData() {
    this.users = this.userService.getUsersList();

  }
  deleteUser(matricule: number) {
    this.submitted=true;

  }
  annuler(){
    this.list();
  }
  confirmer(matricule: number){
    this.userService.deleteUser(matricule)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
      this.reloadData();
      this.list();
  }

}
