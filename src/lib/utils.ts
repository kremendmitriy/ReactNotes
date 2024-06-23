import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkUserForLogin = (data: {
  email: string;
  password: string;
}) => {
  const storedUsers = localStorage.getItem('users');
  const users = storedUsers ? JSON.parse(storedUsers) : [];

  const user = users.find(
    (user: { email: string }) => user.email === data.email
  );

  if (user && user.password === data.password) {
    return true;
  } else {
    alert('Invalid login or password');
  }
};
