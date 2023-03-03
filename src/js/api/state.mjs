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
  const createForm = document.getElementById("create-form-section");
  
  
  if (token) {
    loginLink.classList = "visually-hidden";
  } else {
    logoutLink.classList = "visually-hidden";
    profileLink.classList = "visually-hidden";
    createForm.classList = "visually-hidden";
    
  }

  return;
}

export function isLoggedIn() {
  const accessToken = localStorage.getItem("token");
  const logoutLink = document.getElementById("logout-link");
  const profileLink = document.getElementById("profile-link");
  const loginLink = document.getElementById("login-link");
  const placeBid = document.getElementById("place-bid-container");
  
  if(!accessToken) {
    placeBid.style.display = "none";
    logoutLink.style.display = "none";
    profileLink.style.display = "none";
  } else {
    loginLink.style.display = "none"
  }
}