import { API_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles";
const author = "?_seller=true&_count=true&_bids=true&_listings=true";

/**
 * function to auth the user with the authFetch
 * @param { string } name
 * @returns
 */

export async function getProfile(name) {
  if (!name) {
    throw new Error("Requires a name");
  }

  const profileURL = `${API_URL}${action}/${name}${author}`;

  const response = await authFetch(profileURL);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response);
}

/**
 * Displays the user information on the profile page
 */

export async function profileInfo() {
  const userName = document.querySelector("#user-name");
  const userAvatar = document.querySelector("#user-avatar");
  const userBids = document.querySelector("#user-bids");
  const userCredit = document.querySelector("#user-credit");
  const userListings = document.querySelector("#user-listings");
  const profileListings = document.querySelector("#profile-listings");

  const { name } = load("profile");
  const avatar = load("avatar");

  const user = await getProfile(name);

  // User Info

  userName.innerText = name;
  userAvatar.src = avatar;
  userCredit.innerText = user.credits;

  // User Bids

  const bids = await getProfile(name + "/bids");
  if (bids.length === 0) {
    userBids.innerText = " 0 bids";
  } else {
    for (let i = 0; i < bids.length; i++) {
      if (i === 3) {
        break;
      }
      userBids.innerHTML += `<a href="/pages/listings/?id=${
        bids[i].listing.id
      }" class="btn btn-secondary p-3 m-2">
      ${bids[i].listing.title} <br>
      Bid made: $${bids[i].amount} </br>
      Ends: ${new Date(bids[i].created).toLocaleDateString()}
    </a>
    `;
    }
  }

  //Users Listings

  const listings = await getProfile(name + "/listings");

  if (listings.length === null) {
    userListings.innerHTML = "0";
  } else {
    let sum = 0;
    for (let i = 0; i < listings.length; i++) {
      userListings.innerHTML = sum = listings.length;

      let endsAt = new Date(listings[i].endsAt).toLocaleDateString();
      const image = listings[i].media.length
        ? `<img 
              src="${listings[i].media[0]}" class="mb-2 card-img-top"
              onerror="this.https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=996';"
              alt="Image for ${listings[i].title}"
            />`
        : `<img 
        src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=996" 
        class="mb-2" 
        alt="Image not found"`;

      profileListings.innerHTML += `
            <a href="/pages/listings/?id=${listings[i].id}" class="profile-a-tag box-shadow card card m-3">
            <div class="profile-card d-flex flex-column">
            ${image}
              <div class="d-flex flex-column p-3">
                <div class="d-flex">
                  <h4>${listings[i].title}</h4>
                </div>
                <span>Closes at: <br> ${endsAt}</span>
              </div>
              </div>
            </a>`;
    }
  }
}

export function changeAvatarRedirect() {
  const profileData = load("profile");
  const { name } = profileData;
  const changeAvatarButton = document.querySelector("#change-avatar-modal");
  changeAvatarButton.addEventListener(
    "click",
    () => (changeAvatarButton.href = `/pages/profile/?name=${name}`)
  );
}
