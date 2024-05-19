export function isAuthenticated() {
  return localStorage.getItem("isAuthenticated") === "true";
}

export async function signIn() {
  localStorage.setItem("isAuthenticated", "true");
}

export async function signOut() {
  localStorage.removeItem("isAuthenticated");
}

//these are functions that serve different parts of the auth process
