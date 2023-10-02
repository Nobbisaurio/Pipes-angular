import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'mateo';
  public nameUpper: string = 'MATEO';
  public fullName: string = 'MATeo CasTRo';

  public customDate: Date = new Date();
}
