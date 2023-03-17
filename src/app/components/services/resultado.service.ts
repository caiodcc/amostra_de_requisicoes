import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
      peso: number
      altura: number
      sexo: string
      atividade: number
      idade: number
      gastoCal: number
  constructor() { }
}
