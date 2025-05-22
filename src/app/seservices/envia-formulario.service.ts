import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  enviaInfoBackend(info: string) {
    console.log(info);
  }

  constructor() { }
}
