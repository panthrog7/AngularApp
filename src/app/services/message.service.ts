import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private notService: NotificationsService) { }

  public onSuccess(title: string, message: string) {
    this.notService.success(title, message, {
      position: ['bottom', 'right'],
      timeout: 2000,
      animate: 'scale',
      showProgressBar: true
    });
  }

  public onWarn(title: string, message: string) {
    this.notService.warn(title, message, {
      position: ['bottom', 'right'],
      timeout: 2000,
      animate: 'scale',
      showProgressBar: true
    });
  }
}


