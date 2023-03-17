import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
import { Router } from '@angular/router';
import { MacroBulkingService } from '../services/macro-bulking.service';
import { MacronutrientesService } from '../services/macronutrientes.service';
import { ResultadoService } from '../services/resultado.service';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})


export class CalcComponent implements OnInit {

  public calculo: FormGroup;


 public gastoCalCut: number
 public gastoCalBulk: number

  public pronto: boolean;
 
    constructor(private fb: FormBuilder, public resultado: ResultadoService, public macro: MacronutrientesService, public macroBulk: MacroBulkingService) {
    this.calculo = this.fb.group({
      peso: ['', Validators.required],
      altura: ['', Validators.required],
      atividade: ['', Validators.required],
      sexo: ['', Validators.required],
      idade: ['', Validators.required]
    });

  

    



  }
  
  ngOnInit() {
    this.pronto = false
  }




  onSubmit() {


    //debug 
    if (this.calculo.invalid) {
      console.log('Form INVALID!');
      console.log(this.calculo);
    };



    //construção do objeto Calculo
    const data = {
      peso: this.calculo.value.peso,
      altura: this.calculo.value.altura,
      sexo: this.calculo.value.sexo,
      atividade: this.calculo.value.atividade,
      idade: this.calculo.value.idade
    };
    console.log(data);




    // calculo do gasto calórico
    let metabolismoBasal = 0;
    if (data.sexo === "masculino") {
      metabolismoBasal = 88.36 + 13.4 * data.peso + 4.8 * data.altura - 5.7 * data.idade;
    } else {
      metabolismoBasal = 447.6 + 9.2 * data.peso + 3.1 * data.altura - 4.3 * data.idade;
    }



    let gastoCal = Math.round(metabolismoBasal * data.atividade);

    console.log("Gasto calórico adquirido:", gastoCal)

    this.resultado.altura = data.altura
    this.resultado.peso = data.peso
    this.resultado.sexo = data.sexo
    this.resultado.atividade = data.atividade
    this.resultado.gastoCal = gastoCal
    this.resultado.idade = data.idade
    console.log(this.resultado)

    // Calculo macronutrientes

    this.gastoCalBulk = gastoCal + 500
    this.gastoCalCut = gastoCal * 0.75

  
    this.macro.proteina = this.gastoCalCut *  0.4 / 4;
    this.macro.gordura = this.gastoCalCut *  0.4 / 9;
    this.macro.carbo = this.gastoCalCut * 0.4 / 4;


    this.macroBulk.proteinaBulk = this.gastoCalBulk * 0.3 / 4;
    this.macroBulk.gorduraBulk = this.gastoCalBulk * 0.2 / 9;
    this.macroBulk.carboBulk = this.gastoCalBulk * 0.5 / 4;
  

    // Convertendo macro para inteiros

    this.macro.proteina = Math.round(this.macro.proteina)
    this.macro.carbo = Math.round(this.macro.carbo)
    this.macro.gordura = Math.round(this.macro.gordura)



    this.macroBulk.proteinaBulk = Math.round(this.macroBulk.proteinaBulk)
    this.macroBulk.gorduraBulk = Math.round(this.macroBulk.gorduraBulk)
    this.macroBulk.carboBulk = Math.round(this.macroBulk.carboBulk)
  
    console.log(this.macro)


    this.pronto = true




  }

}







