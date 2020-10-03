import {Bucket} from './bucket';

export interface Dashboard {
  buckets: Bucket[];
  totalStock: number;
  inPlanning: number;
  successes: number;
  exceptions: number;
}
