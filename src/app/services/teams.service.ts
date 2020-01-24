import { Injectable } from '@angular/core';

// custom imports
import { teams } from 'src/assets/data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  // return temas from assets/mock-data.ts
  getTeams() {
    return teams;
  }

}
