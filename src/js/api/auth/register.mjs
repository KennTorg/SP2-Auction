import { API_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

/**
 * Registers a new user.
 * @param {string} profile - input information.
 */

export async function register(profile) {
  const registerURL = API_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  if (response.ok) {
    alert("Your are now registered!");
    location.href = "/pages/auth/login/";
    return result;
  } else {
    alert(response.error);
  }
}
