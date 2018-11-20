import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
export interface StudentsModel {
  name: string;
  numero: number;
  id: any;
}
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  constructor(private afs: AngularFirestore) {}
  getItems(): Observable<StudentsModel[]> {
    return this.afs
      .collection('items', ref => {
        return ref.orderBy('name');
      })
      .snapshotChanges()
      .pipe(
        map(actions => {
          return <StudentsModel[]>actions.map(item => ({
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          }));
        })
      );
  }
  addItem(name, number) {
    this.afs.collection('items').add({ name: name, numero: number });
  }
  edit(itemId, name, number) {
    const id = String(itemId);
    this.afs.doc('items/' + id).update({ name: name, numero: number });
  }
  deleteItem(itemId) {
    const id = String(itemId);
    this.afs.doc('items/' + id).delete();
  }
}
