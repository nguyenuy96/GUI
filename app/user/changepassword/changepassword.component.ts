import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './changepassword.component.html'
})
export class ChangePasswordComponent {
  constructor(private rout: ActivatedRoute){}
}