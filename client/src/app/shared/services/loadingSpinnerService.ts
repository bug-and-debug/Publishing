import { Injectable } from '@angular/core';

@Injectable()
export class LoadingSpinnerService {
	public  bShow: boolean = false;

	public show() {
		this.bShow = true;
	}
	public hide() {
		this.bShow = false;
	}
}