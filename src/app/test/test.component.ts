import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      welcome {{name}}
    </h2>
    <input [id]="myId" type="text" value="kunal">
    <input id="{{myId}}" type="text" value="kunal">
    <h2 [style.color]="'orange'">Style Binding </h2>
    <h2 [style.color]="highlightColor">Style Binding 2</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
    <button (click)="onClick($event)">Greet</button>
    {{greeting}}
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
    <input [(ngModel)]="fname" type="text">
    {{fname}}

    <h2 *ngIf="displayName; else elseBlock">
      Codevolution
    </h2>

    <ng-template #elseBlock>
    <h2>
      Name is hidden
    </h2>
    </ng-template>

    <div *ngIf="displayName; then thenBlock; else ElseBlock"></div>
    <ng-template #thenBlock>
    <h2>
      Codevolution
    </h2>
    </ng-template>
    <ng-template #ElseBlock>
    <h2>
      Hidden
    </h2>
    </ng-template>
    
    `,
  styles: []
})

export class TestComponent implements OnInit {
  displayName= true;
  public fname="";
  public name="kunal";
  public myId="testId";
  public greeting = "";
  public highlightColor="orange";
  public titleStyles={
    color: "blue",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log(event);
    this.greeting ='welcome to codevolution';
  }
  logMessage(value)
  {
    console.log(value);
  }


}
