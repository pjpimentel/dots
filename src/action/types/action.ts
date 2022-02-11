export type ActionStatus = 'in-progress' | 'completed' | 'errored';
export interface IAction {
  completed_at: string;
  id: number;
  region_slug: string;
  resource_id: number;
  resource_type: string;
  started_at: string;
  status: ActionStatus | string;
  type: string;
}
