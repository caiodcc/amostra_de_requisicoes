import { Component, OnInit} from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})


export class CalcComponent implements OnInit {
    
   public calculo: FormGroup;
  
  constructor(private fb : FormBuilder){
    this.calculo = this.fb.group({
      peso: ['', Validators.required],
      altura: ['', Validators.required],
      atividade: ['', Validators.required],
      sexo: ['', Validators.required],
      idade: ['', Validators.required]
    });
  }
  ngOnInit() {
    
  }
    
  
    onSubmit(){

      if (this.calculo.invalid) {
        console.log('Form INVALID!');
        console.log(this.calculo);
        return;
      };
  
      const data = {
        peso: this.calculo.value.peso,
        altura: this.calculo.value.altura,
        sexo: this.calculo.value.sexo,
        atividade: this.calculo.value.atividade,
        idade: this.calculo.value.idade
  
      };
     
      console.log(data);
  
  
    }
  
  }
  


   

    