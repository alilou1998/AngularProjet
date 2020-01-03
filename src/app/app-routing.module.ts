import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full' },
  {path:'users',component:UserListComponent},
  {path:'users/add',component:CreateUserComponent},
  { path: 'update/:matricule', component: UpdateUserComponent },
  { path: 'details/:matricule', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
