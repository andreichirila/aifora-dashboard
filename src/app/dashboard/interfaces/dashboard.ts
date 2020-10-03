import {Bucket} from './bucket';
import {AdditionalDashboardInfos} from './additional-dashboard-infos';

export interface Dashboard {
  buckets: Bucket[];
  dashboardAdditionalsInfo: AdditionalDashboardInfos;
}
