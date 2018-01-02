import { Injectable } from '@angular/core';
//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class FirebaseService {

  //constructor(private afs: AngularFirestore) { }
  constructor() { }

  getCatagories(): Observable<any> {
    // let collectionRef = this.afs.collection('catagories');
    // return collectionRef.valueChanges();
    return null;
  }

}