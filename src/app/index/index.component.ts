import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  @ViewChild('formulario') formulario: any;

  nombre = '';
  apellido = '';
  provincia = '';
  pais = '';
  direccion = '';
  image: File | null = null;
  imageURL: string | null = null;

  elementos: any = [];

  agregarElemento() {
    const nuevoElemento = {
      nombre: this.nombre,
      apellido: this.apellido,
      pais: this.pais,
      provincia: this.provincia,
      direccion: this.direccion,
      image: this.imageURL
    };

    this.elementos.push(nuevoElemento);

    this.nombre = '';
    this.apellido = '';
    this.pais = '';
    this.provincia = '';
    this.direccion = '';
    this.image = null;
    this.imageURL = '';
    
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.image = event.target.files[0];
      this.createImageURL(); // Llamar a la función para crear la URL de la imagen
    }
  }

  private createImageURL() {
    if (this.image) {
      const blob = new Blob([this.image], { type: this.image.type });
      this.imageURL = URL.createObjectURL(blob);
    }
  }
}
