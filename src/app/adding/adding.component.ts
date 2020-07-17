import {Component, EventEmitter, Output} from '@angular/core';
import {all, AnimalsService, Cat, Dog} from "../../services/animals.service";

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.scss']
})
export class AddingComponent  {

  typ: string
  types: string[] = ["собака", "кошка"]
  berres: string[] = []
  berr: any = ""
  any: any = ""
  age: number = 0
  accept: boolean
  name: string = ""
  pedigree = ""

  showElem() {
  if(this.typ === "собака"){
      this.berres =  ["овчарка","такса","пудель"]
  }
    else{
      this.berres =  ["русская","голубая","экзот","сфинкс"]
    }
  }

  addAnimal() {
    if(this.typ != "" && this.berr != "" && this.age.toString() != ""  && this.name != ""){
      console.log(!!this.accept);
      if(this.typ === "собака"){
        const dog: Dog = {
          name: this.name,
          type: this.typ,
          breed: this.berr,
          age: this.age
        }
        this.AnimalService.AddCard(dog)
      }
      if(this.typ === "кошка"){
        if(this.accept == true){
          this.pedigree = 'да'
        }
        else {
          this.pedigree = 'нет'
        }
        const cat: Cat = {
          name: this.name,
          type: this.typ,
          breed: this.berr,
          pedigree: this.pedigree
        }
        console.log(this.accept)

        this.AnimalService.AddCard(cat)
      }
      this.any = this.AnimalService.takeLastDogs()
      console.log(this.any)
      this.berr = this.name = this.typ = ''
    }
    else {
      alert("Введите все данные")
    }


  }



  constructor(private AnimalService: AnimalsService) {


  }

  ngOnInit(): void {
    console.log(this.any)
    this.any = this.AnimalService.takeLastDogs()
  }

}
