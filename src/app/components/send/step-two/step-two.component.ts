import { Component, OnInit } from '@angular/core';

// angular imports
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { tap, takeWhile, map, switchMap } from 'rxjs/operators';
import { interval, of, empty } from 'rxjs';

import { TeamsService } from 'src/app/services/teams.service';
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

  teams = [];
  estadoSelected = false;
  cidadeSelected = false;
  objectTest: Cidade = null;

  categories: any = [];

  form: FormGroup;

  cidades: Cidade[];
  estados: Estado[];

  constructor(
    private teamService: TeamsService,
    private testService: TestService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getTeams();

    this.testService.getEstados().subscribe(
      estados => this.estados = estados
    );

    this.form = this.formBuilder.group({
      category: [null]
    });
    // this.testService.getCidades(8).subscribe();

  }

  getTeams() {
    this.teams = this.teamService.getTeams();
  }

  // another code

  scrollLeft(el: Element) {
    const animTimeMs = 400;
    const pixelsToMove = 315;
    const stepArray = [0.001, 0.021, 0.136, 0.341, 0.341, 0.136, 0.021, 0.001];
    interval(animTimeMs / 8)
      .pipe(
        takeWhile(value => value < 8),
        tap(value => el.scrollLeft -= (pixelsToMove * stepArray[value])),
      )
      .subscribe();
  }

  scrollRight(el: Element) {
    const animTimeMs = 400;
    const pixelsToMove = 315;
    const stepArray = [0.001, 0.021, 0.136, 0.341, 0.341, 0.136, 0.021, 0.001];
    interval(animTimeMs / 8)
      .pipe(
        takeWhile(value => value < 8),
        tap(value => el.scrollLeft += (pixelsToMove * stepArray[value])),
      )
      .subscribe();
  }

  /**
   * Filters specific data form a stream
   * @param estado
   */
  selectEstado(estado: Estado) {

    this.estadoSelected = true;

    of(estado)
    .pipe(
      tap(estado => console.log('Novo estado: ', estado)),
      map(estado => this.estados.filter(e => e.id === estado.id)),
      map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
      switchMap((idEstado: number) => this.testService.getCidades(idEstado)),
      tap(console.log)
    )
    .subscribe(cidades => this.cidades = cidades);
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
    this.estadoSelected = !this.estadoSelected;
    this.cidadeSelected = !this.cidadeSelected;
    this.form.get('category').patchValue('');
  }

  removeProduct() {
    this.estadoSelected = !this.estadoSelected;
    this.cidadeSelected = !this.cidadeSelected;
    this.categories.shift();
    this.form.reset();
  }

}
