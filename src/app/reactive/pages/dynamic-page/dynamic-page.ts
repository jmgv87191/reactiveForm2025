import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe],
  templateUrl: './dynamic-page.html',
  styleUrl: './dynamic-page.css'
})
export class DynamicPage {

}
