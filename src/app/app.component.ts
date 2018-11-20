import { Observable } from 'rxjs';
import { FireBaseService, StudentsModel } from './services/fire-base.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  students$: Observable<StudentsModel[]>;
  title = 'app';
  name: string;
  number: number;
  isEdit = false;
  itemId;

  constructor(private fireBaseSvc: FireBaseService) {
    this.getItems();
  }
  getItems() {
    this.students$ = this.fireBaseSvc.getItems();
  }
  addItem(name, number) {
    this.fireBaseSvc.addItem(name, number);
  }
  editItem() {
    console.log();
    this.fireBaseSvc.edit(this.itemId, this.name, this.number);
  }
  startEdit(student: StudentsModel) {
    this.name = student.name;
    this.number = student.numero;
    this.isEdit = true;
    this.itemId = student.id;
  }
  cancel() {
    this.name = undefined;
    this.number = undefined;
    this.itemId = undefined;
    this.isEdit = false;
  }
  deleteItem(itemId) {
    this.fireBaseSvc.deleteItem(itemId);
  }
}
