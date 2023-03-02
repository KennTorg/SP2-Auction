import { logout } from "../api/auth/logout.mjs";

export function setLogoutListener() {
  const logoutButton = document.querySelector("#logout-link");
  logoutButton.addEventListener("click", () => {
    logout();
  });
}
