import {Component, Input} from '@angular/core';
import {Cat, Dog} from '../../services/animals.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
  @Input() cat: Cat;
  @Input() dog: Dog;
  @Input() any: any;


  constructor() {
 }
}
