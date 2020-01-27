import { Component, OnInit } from '@angular/core';

// angular imports
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { tap, map, switchMap } from 'rxjs/operators';
import { of, empty } from 'rxjs';

import { TestService } from 'src/app/services/test.service';
import { Cidade } from 'src/app/models/cidade';
import { Estado } from 'src/app/models/estado';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
  preserveWhitespaces: true
})
export class StepTwoComponent implements OnInit {

  estadoSelected = false;
  cidadeSelected = false;
  objectTest = null;

  form: FormGroup;

  cidades: Cidade[];
  estados: Estado[];
  categories: any = [];

  constructor(
    private testService: TestService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.testService
      .getEstados()
      .subscribe(estados => (this.estados = estados));

    this.form = this.formBuilder.group({
      category: [null]
    });
  }

  /**
   * Filters specific data form a stream
   * @param estado
   */
  selectEstado(estado: Estado) {

    this.estadoSelected = true;
    this.cidadeSelected = false;

    of(estado)
      .pipe(
        tap(estado => console.log('Novo estado: ', estado)),
        map(estado => this.estados.filter(e => e.id === estado.id)),
        map(estados =>
          estados && estados.length > 0 ? estados[0].id : empty()
        ),
        switchMap((idEstado: number) => this.testService.getCidades(idEstado)),
        tap(console.log)
      )
      .subscribe(cidades => (this.cidades = cidades));
  }

  /**
   * Fill de selected city in the input
   * @param cidade
   */
  fillCity(cidade: Cidade) {
    this.cidadeSelected = true;
    this.objectTest = cidade;
    console.log(this.objectTest);
    this.form.get('category').patchValue(this.objectTest.nome);
  }

  /**
   * Pushing categories to its array
   *
   */
  addCategory() {
    this.categories.push(this.objectTest.nome);
    for (const c of this.categories) {
      console.log(c);
    }
    this.estadoSelected = false;
    this.cidadeSelected = true;
    this.form.get('category').patchValue('');
  }

  removeProduct() {
    this.estadoSelected = false;
    this.cidadeSelected = true;
    if (this.categories.length > 0) {
      this.categories.shift();
    }
    this.form.reset();
  }
}
