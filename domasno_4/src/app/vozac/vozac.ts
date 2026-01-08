import { Component, input, Input } from '@angular/core';
import { sofer } from '../sofer';

@Component({
  selector: 'app-vozac',
  imports: [],
  templateUrl: './vozac.html',
  styleUrl: './vozac.css',
  template:`
    <ng-container>
      <td>{{ motordzija.id }}</td>
      <td><img [src]="motordzija.iconUrl" width="80"></td>
      <td>{{ motordzija.name }}</td>
      <td>{{ motordzija.team }}</td>
      <td>{{ motordzija.category }}</td>
      <td>{{ motordzija.points }}</td>
    </ng-container>`
})
export class Vozac {
    @Input()
    ime:String="";
    @Input()
    motordzija!: any;
    @Input()
    indeks:number=0;
    funk(){
        console.log("YOU CLICKED ME!");
    }
}
