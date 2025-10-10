export interface User {
  id: string;
  name: string;
  nickName?: string;
  email: string;
  birthDate: string;
  phone?: string;
  createdAt: string;
  status: "active" | "inactive";
  membershipType?: "10 session" | "20 session";
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
  sessionCount: number;
}

export interface MembershipHistory extends Membership {
  completedAt?: string;
  reason?: string;
}

export interface TrainingGroup {
  id: string;
  name: string;
  maxCapacity: number;
  trainingTime: string;
  currentMembers: string[]; // Array of user IDs
  colorTheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  description?: string;
  location?: string;
  trainer?: string;
}

export interface Comment {
  id: string;
  text: string;
  createdAt: Date;
  updatedAt?: Date;
}
