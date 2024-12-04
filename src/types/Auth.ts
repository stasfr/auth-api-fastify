export type { User } from '@prisma/client';

export interface UserCreate {
  email: string;
  password: string;
}

export interface UserResponse {
  id: string;
  email: string;
}
