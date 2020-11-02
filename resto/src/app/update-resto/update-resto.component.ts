import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css'],
})
export class UpdateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(
    private routerParams: ActivatedRoute,
    private resto: RestoService
  ) {}

  ngOnInit(): void {
    console.warn(this.routerParams.snapshot.params.id);
    this.resto
      .getCurrent(this.routerParams.snapshot.params.id)
      .subscribe((result) => {
        //console.warn(result);
        this.editResto = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
        });
      });
  }

  // update function that collects the data
  collectData() {
    //console.warn('item', this.editResto.value);
    this.resto
      .updateResto(this.routerParams.snapshot.params.id, this.editResto.value)
      .subscribe((result) => {
        //console.warn(result);
        this.alert = true;
      });
  }
  alert: boolean = false;
  closeAlert() {
    this.alert = false;
  }
}
