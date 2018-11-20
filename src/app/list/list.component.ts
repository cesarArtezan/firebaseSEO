import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsModel, FireBaseService } from '../services/fire-base.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
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
  addItem(name: any, number: any) {
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
