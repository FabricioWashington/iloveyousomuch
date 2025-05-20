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
    { type: 'image', src: 'assets/img17.jpeg' },
    { type: 'image', src: 'assets/img18.jpeg' },
    { type: 'image', src: 'assets/img19.jpeg' },
    { type: 'image', src: 'assets/img20.jpeg' },
    { type: 'image', src: 'assets/img21.jpeg' },
    { type: 'image', src: 'assets/img22.jpeg' },
    { type: 'image', src: 'assets/img23.jpeg' },
    { type: 'image', src: 'assets/img24.jpeg' },
    { type: 'image', src: 'assets/img25.jpeg' },


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

    const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);

    carouselInner.addEventListener('touchstart', (event: Event) => {
      const touch = (event as TouchEvent).changedTouches[0];
      this.touchStartX = touch.screenX;
    });

    carouselInner.addEventListener('touchend', (event: Event) => {
      const touch = (event as TouchEvent).changedTouches[0];
      this.touchEndX = touch.screenX;
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
    const now = new Date();
    let start = new Date(this.startDate);

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDiff = now.getTime() - start.getTime();
    const seconds = Math.floor(totalDiff / 1000) % 60;
    const minutes = Math.floor(totalDiff / (1000 * 60)) % 60;
    const hours = Math.floor(totalDiff / (1000 * 60 * 60)) % 24;

    this.timeDiff = {
      years,
      months,
      days,
      hours,
      minutes,
      seconds
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
