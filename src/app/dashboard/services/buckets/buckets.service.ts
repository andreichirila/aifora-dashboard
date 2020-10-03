import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BucketsService {

  private actualActiveBucket: number;

  constructor() {
  }

  public getActiveBucket(): number {
    if (this.actualActiveBucket === undefined) {

    }
    return this.actualActiveBucket;
  }

  public setActiveBucket(id: number): void {
    this.actualActiveBucket = id;
  }
}
