export type UserRole = "user" | "admin" | "super_admin";
export type UserStatus = "active" | "banned" | "suspended";
export type ConnectionRequestStatus =
  | "pending"
  | "accepted"
  | "rejected"
  | "cancelled";
export type EventRequestStatus = "pending" | "approved" | "rejected";
export type EventRegistrationStatus = "pending" | "accepted" | "rejected";
export type ReportStatus = "pending" | "reviewed" | "resolved" | "rejected";
export type NotificationChannel = "in_app" | "telegram" | "push";

export interface Category {
  id: string;
  slug: string;
  name_en: string;
  name_my: string;
  name: string;
}

export interface Skill {
  id: string;
  name: string;
  slug: string;
  category_id: string | null;
  image?: string | null;
  category?: Category | null;
}

export type JobStatus = "draft" | "open" | "closed" | "filled";
export type JobApplicationStatus =
  | "pending"
  | "reviewed"
  | "shortlisted"
  | "accepted"
  | "rejected"
  | "withdrawn";
export type EmploymentType =
  | "full_time"
  | "part_time"
  | "contract"
  | "internship"
  | "remote";
export type ExperienceLevel = "junior" | "mid" | "senior" | "lead";

export interface CompanyAccount {
  id: string;
  name: string;
  email: string;
}

export interface CompanyProfile {
  id: string;
  company_id: string;
  company_name: string;
  description: string | null;
  logo: string | null;
  website: string | null;
  location: string | null;
  industry: string | null;
  contact_email: string | null;
  contact_phone: string | null;
  is_verified: boolean;
  is_active: boolean;
  company?: CompanyAccount;
  created_at: string;
}

export interface JobPosting {
  id: string;
  company_profile_id: string;
  category_id: string | null;
  category?: Category | null;
  title: string;
  description: string;
  requirements: string | null;
  employment_type: EmploymentType;
  experience_level: ExperienceLevel | null;
  location: string | null;
  salary_min: number | null;
  salary_max: number | null;
  salary_currency: string;
  status: JobStatus;
  published_at: string | null;
  closes_at: string | null;
  company_profile?: CompanyProfile;
  created_at: string;
}

export interface JobApplication {
  id: string;
  job_id: string;
  applicant_id: string;
  cover_letter: string | null;
  status: JobApplicationStatus;
  company_notes?: string | null;
  reviewed_at: string | null;
  interview_ack_sent_at?: string | null;
  job?: JobPosting;
  applicant?: User;
  created_at: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  role: UserRole;
  status: UserStatus;
  telegram_username: string | null;
  telegram_notify_enabled: boolean;
  telegram_linked_at: string | null;
  developer_profile?: DeveloperProfile;
  created_at: string;
}

export interface DeveloperProfile {
  id: string;
  user_id: string;
  category_id: string | null;
  category?: Category | null;
  company_id: string | null;
  employer?: { id: string; company_name: string; logo: string | null } | null;
  profile_photo: string | null;
  headline: string | null;
  bio: string | null;
  experience_level: ExperienceLevel | null;
  location: string | null;
  github_url: string | null;
  linkedin_url: string | null;
  portfolio_url: string | null;
  phone: string | null;
  cv_path: string | null;
  cv_original_name: string | null;
  is_public: boolean;
  user?: User;
  skills?: Skill[];
  created_at: string;
}

export interface ConnectionRequest {
  id: string;
  sender_id: string;
  receiver_id: string;
  message: string | null;
  status: ConnectionRequestStatus;
  sender?: User;
  receiver?: User;
  created_at: string;
}

export interface Connection {
  id: string;
  user_one_id: string;
  user_two_id: string;
  user_one?: User;
  user_two?: User;
  conversation?: { id: string; connection_id: string; last_message_at: string | null };
  created_at: string;
}

export interface Event {
  id: string;
  created_by: string;
  title: string;
  section: string;
  event_date: string | null;
  photo: string | null;
  meeting_url: string | null;
  display_order?: number;
  creator?: User;
  can_manage_registrations?: boolean;
  my_registration?: EventRegistration | null;
  registrations_count?: number;
  created_at: string;
  updated_at: string;
}

export interface EventRegistration {
  id: string;
  event_id: string;
  user_id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string | null;
  status: EventRegistrationStatus;
  reviewed_by: string | null;
  reviewed_at: string | null;
  user?: User;
  reviewer?: User;
  event?: Event;
  created_at: string;
  updated_at: string;
}

export interface EventRequest {
  id: string;
  user_id: string;
  title: string;
  section: string;
  event_date: string | null;
  photo: string | null;
  meeting_url: string | null;
  message: string | null;
  status: EventRequestStatus;
  reviewed_by: string | null;
  reviewed_at: string | null;
  event_id: string | null;
  user?: User;
  reviewer?: User;
  event?: Event;
  created_at: string;
  updated_at: string;
}

export interface Report {
  id: string;
  reporter_id: string;
  reported_user_id: string;
  reason: string;
  description: string | null;
  status: ReportStatus;
  reviewed_by: string | null;
  reviewed_at: string | null;
  reporter?: User;
  reported_user?: User;
  reviewer?: User;
  created_at: string;
}

export interface NotificationLog {
  id: string;
  channel: string;
  type: string;
  title: string;
  body: string | null;
  status: string;
  read_at: string | null;
  sent_at: string | null;
  created_at: string;
  user_id?: string | null;
  payload?: object | null;
  error_message?: string | null;
}

export interface AdminLog {
  id: string;
  admin_id: string;
  action: string;
  target_type: string | null;
  target_id: string | null;
  description: string | null;
  admin?: User;
  created_at: string;
}

export interface TelegramStats {
  connected_users: number;
  notify_enabled_users: number;
  failed_notifications: number;
}
