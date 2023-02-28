import { API_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "POST";

export async function placeBid(id, amount) {
  const bidsURL = `${API_URL}${action}/${id}/bids`;

  const response = await authFetch(bidsURL, {
    method,
    body: JSON.stringify({ amount: amount }),
  });

  if (response.ok) {
    alert("You have placed a bid!");
    return;
  } else {
    alert(response.error);
  }
}
