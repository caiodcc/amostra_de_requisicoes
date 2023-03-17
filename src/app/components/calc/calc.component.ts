import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
import { Router } from '@angular/router';
import { ResultadoService } from '../services/resultado.service';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})


export class CalcComponent implements OnInit {

  public calculo: FormGroup;

  
 

  public pronto: boolean;
 
    constructor(private fb: FormBuilder, private router: Router, public resultado: ResultadoService) {
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

    
    
    this.pronto = true

  }

}







