import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {map, scan, take} from 'rxjs/operators';


export interface Animal {
  name: string;
  type: 'кошка' | 'собака';
}

export class Cat implements Animal{
  name;
  type: 'кошка';
  breed: 'русская' | 'голубая' | 'сфинкс' | 'экзот';
  pedigree: string;
}

export class Dog implements Animal{
  name;
  type: 'собака';
  breed: 'овчарка' | 'такса' | 'пудель';
  age: number;
}

export type allAnimals = Dog | Cat;
@Injectable({
  providedIn: 'root'
})



export class AnimalsService {
    Animals: allAnimals[] = [
     {name: 'Дрейк', type: 'собака', breed: 'пудель', age: 5},
     ];

  private sbj = new BehaviorSubject(this.Animals);

  get animalSbj(): Observable<object>{
   const source$ = this.sbj.asObservable();
   return source$;
    }
    AddCard(item: any): void {
      this.animalSbj.pipe (scan((acc) => acc.concat(item), []))
        .subscribe((val) => {
         this.Animals.push(val[0]);
    });

    }

    getDogs(limit = this.Animals.length, offset = 0): object {
      return this.takeThreeElem(this.Animals, limit, offset);
    }

    takeThreeElem(mass: allAnimals[], limit, offset): object {
      const newMass = [];
      if (mass.length < 3){
        for (let i = offset; i < mass.length; i++ ){
          newMass.push(mass[i]);
        }
        return newMass;
      }
      else {
        for (let i = offset; i < limit; i++ ){
          newMass.push(mass[i]);
        }
        return newMass;
      }
    }

    takeLastDogs(): any {
      const dogs: any = this.getDogs();
      if (dogs.length === 0){
        return '';
      }
      else {
        return dogs[dogs.length - 1];
      }
    }




}
