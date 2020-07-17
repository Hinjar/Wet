import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {map, take} from "rxjs/operators";


 export interface Animal {
  name: string
  type: 'кошка' | 'собака'
}

export class Cat implements Animal{
  name
  type: 'кошка'
  breed: 'русская' | 'голубая' | 'сфинкс' | 'экзот'
  pedigree: string
}

export class Dog implements Animal{

  name
  type: 'собака'
  breed: 'овчарка' | 'такса' | 'пудель'
  age: number
}


export type all = Dog | Cat
@Injectable({
  providedIn: 'root'
})



export class AnimalsService {
   private Animals: all[] = [

     ]

  private  sbj = new BehaviorSubject(this.Animals);


  get animalSbj(){
   const source = this.sbj.asObservable()
    return source
    }

    AddCard(item) {
      this.Animals.push(item)
      this.animalSbj.pipe(take(1))
        .subscribe((item) => {
          this.sbj.next(item)
    })
    }


    getDogs(limit = this.Animals.length, offset = 0): all[] {
      return this.takeThreeElem(this.Animals, limit, offset)
    }

    takeThreeElem(mass: all[], limit , offset ) {
      let newMass = []
      console.log(mass.length)
      if(mass.length < 3){

        for (let i=offset; i<mass.length; i++ ){
          newMass.push(mass[i])
        }
        return newMass
      }
      else {
        for (let i=offset; i<limit; i++ ){
          newMass.push(mass[i])
        }
        return newMass
      }
    }

    takeLastDogs( ) {
      const dogs: any[] = this.getDogs()
      if(dogs.length == 0){
        return ""
      }
      else {
        return dogs[dogs.length-1]
      }

    }
}
