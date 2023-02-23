import * as listeners from "./handlers/index.mjs";
//import * as templates from "./templates/index.mjs";
import * as state from "./api/state.mjs";

const path = location.pathname;

if (path === "/pages/auth/login/") {
  listeners.setLoginFormListener();
  listeners.setLogoutListener();
  state.userState();
} else if (path === "/pages/auth/register/") {
  listeners.setRegisterFormListener();
  listeners.setLogoutListener();
  state.userState();
} else if (path === "/") {
  listeners.setLogoutListener();
  state.userState();
} else if (path === "/pages/profile/") {
  listeners.setLogoutListener();
  state.userState();
}
