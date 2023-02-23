import { remove } from "../../storage/index.mjs";

// ----- Logging out the user -----
export function logout() {
  remove("token");
  remove("profile");
  remove("avatar");
}
