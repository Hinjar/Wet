import {Component, OnInit} from '@angular/core';
import {AnimalsService} from '../../services/animals.service';
import {from, Observable} from 'rxjs';
import {scan, take} from 'rxjs/operators';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  all: Observable<object>;
  visibli = false;

  constructor(public AnimalService: AnimalsService) { }

  getCard(count: number): void {
    this.all = from(this.AnimalService.Animals).pipe(take(count), (scan((acc, v) => acc.concat(v), [])));
    console.log(this.all);
    this.all.subscribe((e) => {
      console.log(e);
    });
    this.visibli = true;
  }

  ngOnInit(): void {
    this.getCard(3);
    this.visibli = false;
  }
}
