import {Component, OnInit} from '@angular/core';
import {all, AnimalsService, Dog} from '../../services/animals.service';



@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  dogs: Dog[];
  all: all[];
  visibli = false;


  constructor(private AnimalService: AnimalsService) { }
  takeAll(): any {
    this.all = this.AnimalService.getDogs();
    this.visibli = true;
  }

  ngOnInit(): void {
  this.all = this.AnimalService.getDogs(3, 0);
  }
}
