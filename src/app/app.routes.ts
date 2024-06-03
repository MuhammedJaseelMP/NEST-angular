import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { DepartmentComponent } from './pages/department/department.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'department',component:DepartmentComponent},
    {path:'contact',component:ContactComponent},
];
