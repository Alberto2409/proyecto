import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  form:FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      nuevaTarea:["",Validators.required],
      titulo:["",Validators.required],
    })
  }


  ngOnInit(): void {
  }
  guardarTarea(){
    const guardarTarea = this.form.value.guardarTarea;
    const titulo = this.form.value.titulo;

  }

}
