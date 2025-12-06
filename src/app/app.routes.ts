import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { ExplorarProjetosComponent } from './pages/explorar-projetos/explorar-projetos.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'workspace', component: WorkspaceComponent},
    {path: 'login', component: LoginComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'explorar-projetos', component: ExplorarProjetosComponent},
    {path: '**', redirectTo: ''}

];
