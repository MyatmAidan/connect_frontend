export interface DashboardStats {
  total_users: number;
  active_users: number;
  banned_users: number;
  total_connections: number;
  pending_requests: number;
  total_events: number;
  telegram_connected_users: number;
  total_jobs: number;
  open_jobs: number;
  total_applications: number;
  pending_applications: number;
}

export interface DashboardActivity {
  new_users_7d: number;
  new_connections_7d: number;
  new_events_7d: number;
}

export interface UserGrowthPoint {
  date: string;
  count: number;
}

export interface StatusCountPoint {
  status: string;
  count: number;
}

export interface DashboardCharts {
  jobs_by_status: StatusCountPoint[];
  applications_by_status: StatusCountPoint[];
}

export interface RecentApplicationSummary {
  id: string;
  applicant_name: string | null;
  job_title: string | null;
  status: string;
  created_at: string;
}

export interface CompanyDashboardStats {
  total_jobs: number;
  open_jobs: number;
  draft_jobs: number;
  total_applications: number;
  pending_applications: number;
  shortlisted_applications: number;
  jobs_by_status: StatusCountPoint[];
  applications_by_status: StatusCountPoint[];
  applications_7d: UserGrowthPoint[];
  recent_applications: RecentApplicationSummary[];
}
