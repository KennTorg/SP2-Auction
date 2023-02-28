import { load } from "../storage/index.mjs";

//====== REMOVE THIS ???? ============
//export const loggedIn = () => Boolean(load("token"));
//export const profile = () => load("profile");
//==========================================

// Displays or not login/logout/profile pages

export function userState() {
  const token = load("token");
  const loginLink = document.getElementById("login-link");
  const logoutLink = document.getElementById("logout-link");
  const profileLink = document.getElementById("profile-link");

  if (token) {
    loginLink.classList = "visually-hidden";
  } else {
    logoutLink.classList = "visually-hidden";
    profileLink.classList = "visually-hidden";
  }

  return;
}
