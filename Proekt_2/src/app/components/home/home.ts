import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  @Output() startExploring = new EventEmitter<void>();

  onStartExploring() {
    this.startExploring.emit();
  }
}