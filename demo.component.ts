import { Component,OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit {
  additionResult: number;
  subtractionResult: number;

  constructor(private arithmeticService: ArithmeticService){}
  
  ngOnInit(): void {
  const num1 = 10;
  const num2 = 5;

  this.additionResult = this.arithmeticService.add(num1, num2);
  this.subtractionResult = this.arithmeticService.sub(num1,num2);
  }

}
