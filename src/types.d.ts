export interface Auth {
  username: string;
  password: string;
}

export interface Invite {
  id: number;
  already_requested: boolean;
  approved: boolean;
  approved_at: Date;
  email_address: string;
  full_name: string;
  github_username?: string;
  requested_at: Date;
}

export interface InviteRequest {
  email_address: string;
  full_name: string;
  github_username?: string;
}
