import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
  @Input()
  rating!: number;
  starWidth!: number;

  @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();  
  
  
  ngOnChanges():void{
      this.starWidth = this.rating * (90/5);
  }

  onClick():void{
      this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
  }

  }

