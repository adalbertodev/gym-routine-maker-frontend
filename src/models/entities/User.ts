export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface UserWithPassword {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}
