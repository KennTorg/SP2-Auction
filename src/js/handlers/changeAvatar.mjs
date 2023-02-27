import { load, save } from "../storage/index.mjs";
import { changeAvatar, getProfile } from "../api/profile/index.mjs";

/**
 * Changing Avatar
 */

export async function setChangeAvatarListener() {
  const form = document.querySelector("#avatar-form");
  const avatarImage = document.querySelector("#user-avatar");
  //const userName = document.querySelector("#user-name");

  if (form) {
    const { name } = load("profile");
    const avatar = load("avatar");

    avatarImage.src = avatar;
    //userName.innerText = name;

    const profile = await getProfile(name);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const avatar = Object.fromEntries(formData.entries());
      save("avatar", form.avatar.value);

      // Clearing the form
      form.reset();

      //send it to API

      changeAvatar(avatar);
      location.reload();
    });
  }
}
