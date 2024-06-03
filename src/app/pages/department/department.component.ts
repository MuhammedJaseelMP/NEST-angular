import { Component } from '@angular/core';
import { CardsComponent } from '../../units/cards/cards.component';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  department=[
    {
      id:1,
      Title:"GIS",
      image:"../../../assets/GIS.jpg"

    },
    {
      id:2,
      Title:"Aeronautical",
      image:"../../../assets/Aeronautical.jpg"

    },
    {
      id:3,
      Title:"Healthcare",
      image:"../../../assets/health.jpg"

    },
    {
      id:4,
      Title:"Banking and Finance",
      image:"../../../assets/Banking and Finance.jpg"

    },
    {
      id:5,
      Title:"Mobility",
      image:"../../../assets/Mobility.jpeg"

    },
    

  ]

}
