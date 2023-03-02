import { placeBid } from "../api/listings/bids.mjs";

export function setPlaceBidListener(id, amount) {
  const form = document.querySelector("#bid-form");
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  let bidId = params.get("id");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const bid = event.target.amount.value;

      placeBid(bidId, Number(bid));
    });
  }
}
