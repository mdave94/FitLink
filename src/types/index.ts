export interface User {
  id: string;
  name: string;
  nickName?: string;
  email: string;
  birthDate: string;
  phone?: string;
  createdAt: string;
  status: "active" | "inactive";
  membershipType?: "premium" | "basic" | "daily";
  remainingSessions?: number;
  sessionHistory?: SessionHistory[];
}

export interface SessionHistory {
  id: string;
  date: string;
  fromCount: number;
  toCount: number;
}

export interface MembershipOption {
  id: string;
  name: string;
  sessionCount: number;
  price: number;
  description?: string;
}

export interface Membership {
  id: string;
  userId: string;
  userName: string;
  type: string;
  startDate: string;
  endDate: string;
  status: "active" | "expired" | "cancelled";
  price: number;
  duration: number; // in months
}

export interface MembershipHistory extends Membership {
  completedAt?: string;
  reason?: string;
}
