import {InjectionToken} from '@angular/core';

export let TOAST_TOKEN = new InjectionToken<ToastInterface>('it does not matter');

export interface ToastInterface {

  success(msg: string, title?: string): void;

  info(msg: string, title?: string): void;

  warning(msg: string, title?: string): void;

  error(msg: string, title?: string): void;

}
