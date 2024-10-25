import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  startDate: string;
  endDate: string;
  daysDifference: number | null = null;

  constructor() {
    // Inicializar las fechas con un valor por defecto si es necesario
    this.startDate = '';
    this.endDate = '';
  }

  calculateDays() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const timeDifference = end.getTime() - start.getTime();
      this.daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convertir de milisegundos a días
    } else {
      this.daysDifference = null; // Resetear si alguna fecha no está definida
    }
  }
  
}
