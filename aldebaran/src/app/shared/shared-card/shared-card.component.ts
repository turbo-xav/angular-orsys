import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent implements OnInit {

 defaultUrl = '/assets/solar.jpg';

  @Input() url = '';
  @Input() title = '';
  @Input() btnText;
  @Output() cardAction = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {

  }

  clickButton(evt) {
    console.log(evt);
    this.cardAction.emit(true);
  }
}
