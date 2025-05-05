import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-convite',
  standalone: false,
  templateUrl: './dialog-convite.component.html',
  styleUrl: './dialog-convite.component.scss'
})
export class DialogConviteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogConviteComponent>) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
