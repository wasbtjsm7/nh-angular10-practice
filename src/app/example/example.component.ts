import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  title = 'developteca';
  imageUrl = 'https://via.placeholder.com/150';
  isUnchanged = true;
  classes = 'aClassDemo';
  buttonTitle = 'Eliminar imagen';
  displayNone: string;
  directives: string[] = ['*ngIf', '*ngFor', '*ngSwitch', '*ngSwitchCase', '*ngModel', '*ng-template'];
  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    this.displayNone = this.displayNone ? '' : 'none';
  }

}
