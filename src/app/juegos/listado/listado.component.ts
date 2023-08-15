import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from 'src/app/interfaces/juego.interface';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {
  juegos?: Juego[];
  juego: Juego = {
  }

  constructor(
    private router: Router,
    private juegoService: JuegosService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.juegoService.obtenerJuegos().subscribe({
      next: (data) => {
        this.juegos = data;
      }
    });
  }

  buscarAtributos() {
    this.juegoService.searchJuego(this.juego).subscribe({
      next: data => {
        this.juegos = data
      }
    })
  }

  crear() {
    this.router.navigate(['crear'])
  }

  editar(id: number) {
    this.router.navigate(['editar', id])
  }

  eliminar(id: number) {
    this.router.navigate(['eliminar', id])
  }
}
