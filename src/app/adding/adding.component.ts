import {Component, OnInit} from '@angular/core';
import {allAnimals, AnimalsService, Cat, Dog} from '../../services/animals.service';
import {from, Observable} from "rxjs";
import {scan, take} from "rxjs/operators";

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.scss']
})
export class AddingComponent implements OnInit{

  all: Observable<object>;
  typ: string;
  types: string[] = ['собака', 'кошка'];
  berres: string[] = [];
  catBreed: 'русская' | 'голубая' | 'экзот' | 'сфинкс';
  dogBreed: 'овчарка' | 'такса' | 'пудель';
  animals: {

  };

  animalList: allAnimals;
  age = 1;
  accept: boolean;
  name = '';
  pedigree: 'да' | 'нет';
  showElem(): any {
  if (this.typ === 'собака'){
      this.berres = ['овчарка', 'такса', 'пудель'];
  }
    else{
      this.berres =  ['русская', 'голубая', 'экзот', 'сфинкс'];
    }
  }

  addAnimal(): void {
    if (this.typ !== ''  && this.age.toString() !== ''  && this.name !== '' && this.dogBreed != null){
      console.log(!!this.accept);
      if (this.typ === 'собака'){
        const dog: Dog = {
          name: this.name,
          type: this.typ,
          breed: this.dogBreed,
          age: this.age
        };
        console.log(dog);
        this.AnimalService.AddCard(dog);
      }
      if (this.typ === 'кошка'){
        if (this.accept === true){
          this.pedigree = 'да';
        }
        else {
          this.pedigree = 'нет';
        }
        const cat: Cat = {
          name: this.name,
          type: this.typ,
          breed: this.catBreed,
          pedigree: this.pedigree
        };
        console.log(this.accept);

        this.AnimalService.AddCard(cat);
      }
      console.log(this.animalList);
      this.name = this.typ = '';
    }
    else {
      alert('Введите все данные');
    }
    this.getCard(1);
  }

  getCard(count: number): void {
    this.all = from(this.AnimalService.Animals).pipe(take(count), (scan((acc, v) => acc.concat(v), [])));
    console.log(this.all);
    this.all.subscribe((e) => {
      console.log(e);
    });
  }

  constructor(public AnimalService: AnimalsService) {
  }

  ngOnInit(): void {
    this.getCard(1);
    this.all.subscribe()
    // alert(this?.animals?.dog);
  }

}
