import { Component } from '@angular/core';

@Component({
  selector: 'app-background-hearst',
  standalone: false,
  templateUrl: './background-hearst.component.html',
  styleUrl: './background-hearst.component.scss'
})
export class BackgroundHearstComponent {
  hearts: { left: number, duration: number }[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 30; i++) {
      this.hearts.push({
        left: Math.random() * 100,
        duration: 5 + Math.random() * 5
      });
    }
  }
}
