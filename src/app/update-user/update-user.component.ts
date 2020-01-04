import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  matricule: number;
  user: User;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.matricule = this.route.snapshot.params.matricule;
    this.userService.getUser(this.matricule)
    .subscribe(data => {
      console.log(data);
      this.user = data;
    }, error => console.log(error));
  }

  updateUser() {
    this.userService.updateUser(this.matricule, this.user)
    .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();

    }

  onSubmit() {
    this.submitted=true;
      this.updateUser();
    }

  gotoList() {
    this.router.navigate(['/users']);
  }
}
