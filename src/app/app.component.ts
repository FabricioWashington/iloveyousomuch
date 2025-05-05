import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'iloveyousomuch';
  loading = true;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.simularCarregamentoInicial();
  }

  ngOnInit(): void {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.remove();
    }
  }

  private simularCarregamentoInicial(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const overlay = this.elementRef.nativeElement.querySelector('.loading-overlay');
        if (overlay) {
          this.renderer.addClass(overlay, 'hidden');
        }
        setTimeout(() => (this.loading = false), 500);
      }, 4800);
    }
  }

  setLoading(isLoading: boolean): void {
    this.loading = isLoading;
  }
}
