import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MacronutrientesService {

  proteina: number
  carbo: number
  gordura: number

  constructor() { }
}
