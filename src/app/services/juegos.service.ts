import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Juego } from '../interfaces/juego.interface';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private url = 'http://localhost:9990/api/tiendaJuegos';

  constructor(
    private http: HttpClient
  ) { }

  obtenerJuegos() {
    return this.http.get<Juego[]>(this.url);
  }

  obtenerById(id: number) {
    return this.http.get<Juego>(`${this.url}/${id}`)
  }

  crearJuego(juego: Juego) {
    return this.http.post(
      this.url,
      juego
    )
  }

  editarJuego(juego: Juego) {
    return this.http.put(
      this.url,
      juego
    )
  }

  eliminarJuego(juego: Juego) {
    return this.http.delete(`${this.url}/${juego.id}`);
  }

  searchJuego(juego: Juego) {
    return this.http.post<Juego[]>(
      `${this.url}/buscarXAtributo`,
      juego
    )
  }
}
