import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CardsComponent } from './units/cards/cards.component';
import { CarouselComponent } from './units/carousel/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,NavbarComponent,AboutusComponent,DepartmentComponent,ContactComponent,CardsComponent,CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nest';
}
