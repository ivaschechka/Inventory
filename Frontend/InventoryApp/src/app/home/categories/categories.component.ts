import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
// Services
import { StorageService } from '../../core/storage.service';
// Models
import { ICategory } from '../../core/models/ICategory.model';
// rxjs
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[];

  // Autocomplete params
  values: string[] = [];
  stateCtrl: FormControl;
  filteredValue: any;

  constructor(private storageService: StorageService) {
    this.stateCtrl = new FormControl();
    this.filteredValue = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterValue(name));
  }

  ngOnInit() {
    this.categories = this.storageService.categories;
    this.values = this.storageService.categoryNames;
  }

  filterValue(val: string) {
    return val ? this.values.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.values;
  }

}
