import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

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
      .pipe(tap(console.log));
  }

  getCidades(idEstado: number) {
    return this.http
      .get<Cidade[]>('assets/data/cidades.json')
      .pipe(
        map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado)),
        // tap(console.log)
      );
  }
}
