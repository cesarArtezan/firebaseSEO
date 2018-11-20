import { Component, OnInit } from '@angular/core';
import { FireBaseService, StudentsModel } from '../services/fire-base.service';
import { Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  students$: Observable<StudentsModel[]>;

  constructor(
    private fireBaseSvc: FireBaseService,
    private meta: Meta,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.getStudents();
    // Set meta tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'inmobiliaria,renta,venta',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Inmobiliaria Cobian Venta y renta de casas en Puebla. inmobiliariacobian@gmail.com. Bienvenidos a Inmobiliaria Cobian.',
    });
    // ... and so on
  }
  getStudents() {
    this.students$ = this.fireBaseSvc.getItems();
  }
}
