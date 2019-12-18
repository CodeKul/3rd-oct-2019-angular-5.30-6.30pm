import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProgressService {

  em: EventEmitter<ProgressData> = new EventEmitter()

  constructor() { }
}

export interface ProgressData {
  progress: number
}

export enum ProgressBar {
  POSITIVE = 2, NEGATIVE = 1
}
