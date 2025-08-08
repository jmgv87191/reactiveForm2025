import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {  FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe,ReactiveFormsModule ],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css'
})
export class BasicPage {

  private fb = inject(FormBuilder)

  myForm = this.fb.group({
    name: ["",[Validators.required, Validators.minLength(3)]]  ,
    price: [0, Validators.required]  ,
    inStorage: [0, Validators.required]  ,
  })

}
