import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'David';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n plural

  public clients: string[] = [
    'Maria',
    'Pedro',
    'Juanita',
    'Angel',
    'Rodrigo',
    'Samantha',
  ];

  public clientsMaps = {
    '=0': 'no tenemos clientes esperando',
    '=1': ' tenemos un cliente esperando',
    '=2': ' tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // Key value Pipe

  public person = {
    name: 'David',
    age: 21,
    adress: 'Ecuador',
  };

  // async Pipe

  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tememos data en nuestro promise');
    }, 3500);
  });
}
