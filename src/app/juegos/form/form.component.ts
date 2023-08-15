import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/interfaces/juego.interface';
import { JuegosService } from '../../services/juegos.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  isDelete: boolean = false
  isUpdate: boolean = false

  juego: Juego = {
    id: 0,
    nombre: '',
    plataforma: '',
    precio: 0,
    stock: 0,
    formato: ''
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private juegosService: JuegosService
  ) { }

  ngOnInit(): void {
    
    if (this.router.url.includes('crear')) {
       return;
    }

    if (this.router.url.includes('editar')) {
      this.isUpdate = true
    } else {
      this.isDelete = true
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.juegosService.obtenerById(id))
      )
      .subscribe({
        next: data => {
          this.juego = data
        }
      })
  }

  submit() {
    if (this.isDelete) {
      this.juegosService.eliminarJuego(this.juego).subscribe({
        next: () => {
          this.router.navigate(['listar'])
        }
      })
      return
    }

    if (this.isUpdate) {
      this.juegosService.editarJuego(this.juego).subscribe({
        next: () => {
          this.router.navigate(['listar'])
        }
      })
      return
    }

    this.juegosService.crearJuego(this.juego).subscribe({
      next: () => {
        this.router.navigate(['listar'])
      }
    })
  }

  regresar() {
    this.router.navigate(['listar'])
  }
}
