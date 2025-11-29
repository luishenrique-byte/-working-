import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'workspace', component: WorkspaceComponent},
    {path: 'auth/login', component: LoginComponent},
    {path: 'auth/signUp', component: SignUpComponent},
    {path: '**', redirectTo: ''}

];
