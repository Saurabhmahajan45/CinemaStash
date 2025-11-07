// src/services/RoleService.js

const ROLE_KEY = "role";

// Save role (ADMIN or USER)
export function setRole(role) {
  localStorage.setItem(ROLE_KEY, role);
}

// Get role
export function getRole() {
  return localStorage.getItem(ROLE_KEY);
}

// Remove role (on logout)
export function removeRole() {
  localStorage.removeItem(ROLE_KEY);
}
