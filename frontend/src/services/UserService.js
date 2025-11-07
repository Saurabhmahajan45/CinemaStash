import { getToken } from './TokenService';
import { getRole } from './RoleService';

export function storeUser(userData) {
  localStorage.setItem("user", JSON.stringify(userData));
}

export function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function removeUser() {
  localStorage.removeItem("user");
}

export function isAuthenticated() {
  return !!getToken();
}

export function isUser() {
  return getRole() === "user";
}

export function isAdmin() {
  return getRole() === "admin";
}

export function getCurrentUserId() {
  const user = getUser();
  return user ? user.id : null;
}

export function getCurrentUser() {
  return getUser();
}
