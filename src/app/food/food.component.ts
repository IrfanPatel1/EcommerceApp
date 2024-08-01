import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  products = [
    {
      name: 'Greenhouse Cucumber - 1lb',
      price: 'RS-70',
      description: 'Boat Immortal 121 description',
      imageUrl: 'public/coffee1.png'  
    },
    // {
    //   name: 'head phone',
    //   price: 'RS2500',
    //   description: 'Description of Product ',
    //   imageUrl: 'src/assets/headphone.jpg'
    // },
    // {
    //   name: 'Iphone12 pro',
    //   price: 'RS1,00,000',
    //   description: 'Description of Product',
    //   imageUrl: 'src/assets/iphone.jpg'
    // }
    ];
}
