import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Dashboard} from '../interfaces/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() {
  }

  public getDashboardDummyData(): Observable<Dashboard> {
    return of({
      buckets: [
        {
          name: 'New',
          percentage: Math.floor(Math.random() * 101),
          amount: Math.floor(Math.random() * 1001)
        }, {
          name: 'Approval',
          percentage: Math.floor(Math.random() * 101),
          amount: Math.floor(Math.random() * 1001)
        }, {
          name: 'Planned',
          percentage: Math.floor(Math.random() * 101),
          amount: Math.floor(Math.random() * 1001)
        }
      ],
      totalStock: Math.floor(Math.random() * 10001),
      inPlanning: Math.floor(Math.random() * 10001),
      successes: Math.floor(Math.random() * 1001),
      exceptions: Math.floor(Math.random() * 1001)
    });
  }
}
