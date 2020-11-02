import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css'],
})
export class AddRestoComponent implements OnInit {
  // alert
  alert: boolean = false;
  constructor(private resto: RestoService) {}
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  collectResto() {
    //console.warn(this.addResto.value);
    // gets the data from the form name"add resto" and puts it in the fuction called saveResto in service file
    this.resto.saveResto(this.addResto.value).subscribe((result) => {
      // puts the data
      //console.warn(result);
      this.alert = true;
    });
    this.addResto.reset({});
  }
  closeAlert() {
    this.alert = false;
  }
  ngOnInit(): void {}
}
