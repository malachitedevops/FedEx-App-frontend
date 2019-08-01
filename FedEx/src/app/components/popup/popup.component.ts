import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassService } from '../../services/class.service'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent {
  public class: any;

  constructor(
    private classService: ClassService,
    private dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) {newClass}) {
      this.class = newClass
    }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSubmit(className: string): void {
    this.classService.createClass(className);
    this.dialogRef.close();
  }

}
