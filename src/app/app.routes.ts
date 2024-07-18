import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './guards/auth.guard';

export  const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

    //{ path: 'perfil', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'dieta', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'treino', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'configuracoes', component: HomeComponent, canActivate: [AuthGuard] },
  ];
