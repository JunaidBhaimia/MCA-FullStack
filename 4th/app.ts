import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
selector: 'app-root',
imports: [RouterOutlet, FormsModule],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
    public number1:number = 0;
    public number2:number = 0;
    public result:number = 0;
Add()
{
    this.result = this.number1 + this.number2;
}
Sub()
{
    this.result = this.number1 - this.number2;
}
Mul()
{
    this.result = this.number1 * this.number2;
}
Div()
{
    this.result = this.number1 / this.number2;
}
}
