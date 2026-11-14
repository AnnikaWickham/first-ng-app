import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-greeting',
  styleUrl: './greeting.scss',
  templateUrl: './greeting.html',
})
export class Greeting {
  greetingMessage = input('Default greeting message :/');
}
