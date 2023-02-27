import { API_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "post";

/**
 * Creates a new post.
 * @param {string} listData - input information.
 */

export async function createListing(listData) {
  const createListingURL = `${API_URL}${action}`;

  //listData.tags = listData.tags.split(",");

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(listData),
  });

  const results = await response.json();
  if (response.ok) {
    location.reload();
    return results;
  } else {
    alert(response.error);
  }
}
