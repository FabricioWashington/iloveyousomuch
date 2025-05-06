import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { loadFull } from "tsparticles";
import { DialogConviteComponent } from '../../shared/components/dialog-convite/dialog-convite.component';
import { MatDialog } from '@angular/material/dialog';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('spotifyCarousel', { static: false, read: ElementRef }) carouselRef!: ElementRef;

  private touchStartX = 0;
  private touchEndX = 0;
  public resultado: boolean = false;
  public startDate = new Date('2022-05-13T00:00:00');
  public timeDiff: any = {};
  public currentYear: number = new Date().getFullYear();
  public mostrarConvite = false;
  public media: { type: 'image' | 'video', src: string }[] = [
    { type: 'image', src: 'assets/img1.jpg' },
    { type: 'image', src: 'assets/img2.jpg' },
    { type: 'image', src: 'assets/img3.jpg' },
    { type: 'image', src: 'assets/img4.jpg' },
    { type: 'image', src: 'assets/img5.jpg' },
    { type: 'image', src: 'assets/img6.jpg' },
    { type: 'image', src: 'assets/img7.jpg' },
    { type: 'image', src: 'assets/img8.jpeg' },
    { type: 'image', src: 'assets/img9.jpeg' },
    { type: 'image', src: 'assets/img10.jpeg' },
    { type: 'image', src: 'assets/img11.jpeg' },
    { type: 'image', src: 'assets/img12.jpeg' },
    { type: 'image', src: 'assets/img13.jpeg' },
    { type: 'image', src: 'assets/img14.jpeg' },
    { type: 'image', src: 'assets/img15.jpeg' },
    { type: 'image', src: 'assets/img16.jpeg' },

    { type: 'video', src: 'assets/video1.mp4' },
    { type: 'video', src: 'assets/video2.MOV' },
    { type: 'video', src: 'assets/video3.mp4' },
    { type: 'video', src: 'assets/video4.mp4' },
    { type: 'video', src: 'assets/video5.mp4' }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  ngAfterViewInit(): void {
    const carousel = document.getElementById('spotifyCarousel');
    const carouselInner = carousel?.querySelector('.carousel-inner');

    if (!carousel || !carouselInner) return;

    const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);

    carouselInner.addEventListener('touchstart', (event: Event) => {
      const touchEvent = event as TouchEvent;
      this.touchStartX = touchEvent.changedTouches[0].screenX;
    });

    carouselInner.addEventListener('touchend', (event: Event) => {
      const touchEvent = event as TouchEvent;
      this.touchEndX = touchEvent.changedTouches[0].screenX;
      this.handleGesture(bsCarousel);
    });
  }

  private handleGesture(bsCarousel: any): void {
    if (this.touchEndX < this.touchStartX - 50) {
      bsCarousel.next();
    }
    if (this.touchEndX > this.touchStartX + 50) {
      bsCarousel.prev();
    }
  }

  updateTime() {
    const now = new Date().getTime();
    const start = this.startDate.getTime();
    let diff = now - start;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(months / 12);

    this.timeDiff = {
      years,
      months: months % 12,
      days: days % 30,
      minutes: minutes % 60,
      seconds: seconds % 60
    };
  }


  atualizarResultado() {
    this.resultado = true;
  }

  abrirConvite(): void {
    this.dialog.open(DialogConviteComponent, {
      width: '350px',
      panelClass: 'convite-dialog'
    });
  }
}
