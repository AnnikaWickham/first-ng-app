import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  imports: [Greeting],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  greetingMessage = signal("Hello, I'm from home!");

  keyUpHandeler() {
    console.log('user typed something in the input');
  }
}
