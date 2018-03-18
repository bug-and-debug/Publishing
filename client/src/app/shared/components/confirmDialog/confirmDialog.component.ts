import { Component, Inject } from '@angular/core';
import { MdSnackBar, MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'confirm-dialog',
  styleUrls: ['./confirmDialog.component.css'],
  templateUrl: './confirmDialog.component.html',
})
export class ConfirmDialog {

  constructor(@Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<ConfirmDialog>) {
  }

  onConfirm(): void {
    this.dialogRef.close({action: this.data['action']})
  }

  onCancel(): void {
    this.dialogRef.close({action: 'cancel'})
  }
}
