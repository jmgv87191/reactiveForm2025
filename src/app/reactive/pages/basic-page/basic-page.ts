import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {  FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe,ReactiveFormsModule ],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css'
})
export class BasicPage {

  myForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0)
  })

}
