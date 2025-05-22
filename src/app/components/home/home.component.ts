import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { EnviaFormularioService } from '../../seservices/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  meuBool = false;

  name = "sergio"
  idButton = "btn"
  deveMostrarTitulo = false
  listItems = ["a", "b", "c"]
  private EnviaFormularioService = inject(EnviaFormularioService)

  @Input("name") minhaPropsDeFora!: string

  // submit() {
  //   this.EnviaFormularioService.enviaInfoBackend("Enviando info")
  // }

  // atualizaBool(valor: boolean) {
  //   this.meuBool = valor
  // }
}

