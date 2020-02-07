import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';

// custom imports
import { HttpClient } from '@angular/common/http';
import { Cidade } from '../models/cidade';
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {}

  getEstados() {
    return this.http
      .get<Estado[]>('assets/data/estados.json')
      .pipe(take(1));
  }

  getCidades(idEstado: number) {
    return this.http
      .get<Cidade[]>('assets/data/cidades.json')
      .pipe(
        take(1),
        map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado)),
      );
  }
}
