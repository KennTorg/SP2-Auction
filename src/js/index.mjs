import * as listeners from "./handlers/index.mjs";
import * as listings from "./api/listings/index.mjs";
import * as profiles from "./api/profile/index.mjs";
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
  listings.listingFeed();
  listings.searchListings();
  listeners.setCreateListingListener();
} else if (path === "/pages/profile/") {
  listeners.setChangeAvatarListener();
  listeners.setLogoutListener();
  state.userState();
  profiles.profileInfo();
  profiles.changeAvatarRedirect();
} else if (path === "/pages/listings/") {
  listings.singleListing();
  state.isLoggedIn();
  listeners.setPlaceBidListener();
}
