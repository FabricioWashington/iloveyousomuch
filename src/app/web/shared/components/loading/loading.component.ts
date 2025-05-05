import { Component, OnInit, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: false,

  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  loading = true;

  @Output() onComplete = new EventEmitter<void>();

  constructor(private renderer: Renderer2, private elementRef: ElementRef){}

  ngOnInit(): void {
    this.simularCarregamentoInicial();
  }

  private simularCarregamentoInicial(): void {
    setTimeout(() => {
      const loadingOverlay = this.elementRef.nativeElement.querySelector('.loading-overlay');
      if (loadingOverlay) {
        this.renderer.addClass(loadingOverlay, 'hidden');
      }

      this.loading = false;
      this.onComplete.emit();
    }, 2000);
  }
}
