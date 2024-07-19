import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

import { HomeComponent } from './pages/home/home.component';

import { AuthGuard } from './guards/auth.guard';

export  const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    { path: 'login', component: LoginComponent},
    { path: 'cadastro', component: CadastroComponent},

    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

    //{ path: 'perfil', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'dieta', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'treino', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'configuracoes', component: HomeComponent, canActivate: [AuthGuard] },
  ];
