export function listingTemplate(listingData) {
  const { title, media, id, endsAt, bids } = listingData;

  // LISTING CARD

  const listingCard = document.createElement("a");
  listingCard.classList =
    "card-a-tag card box-shadow rounded mb-5 overflow-hidden m-3";
  listingCard.setAttribute("href", `/pages/listings/?id=${id}`);

  // CARD HEADER

  const cardHeader = document.createElement("div");
  cardHeader.classList =
    "listing-card d-flex flex-column justify-content-center";

  // Card Media
  const cardMedia = document.createElement("img");
  const cardImage = media.length
    ? media[0]
    : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=996";
  cardMedia.src = cardImage;
  cardMedia.alt = `Image of ${title}`;

  // Card Title
  const listingTitle = document.createElement("h4");
  listingTitle.classList = "m-auto text-center mt-2 text-break";
  listingTitle.innerText = title;

  cardHeader.append(cardMedia, listingTitle);

  // CARD FOOTER

  const cardFooter = document.createElement("div");
  cardFooter.classList = "d-flex justify-content-around mt-3";

  // Card Bids
  const lastBid = document.createElement("button");
  lastBid.classList = "btn btn-secondary btn-small";
  lastBid.innerText = "No bids yet";

  if (bids) {
    for (var i = 0; i < bids.length; i++) {
      if (bids.length > 1) {
        bids.sort((firstBid, secondBid) => firstBid.amount - secondBid.amount);
      }
      lastBid.classList = "btn btn-secondary btn-small";
      lastBid.innerText = `$ ${bids[i].amount}`;
    }
  }

  //Card Bid Ends
  const listingEnds = document.createElement("p");
  listingEnds.innerHTML =
    "Closes at:" + `<br>` + new Date(endsAt).toLocaleDateString();

  cardFooter.append(lastBid, listingEnds);
  listingCard.append(cardHeader, cardFooter);

  return listingCard;
}

export function renderListingTemplates(listingDataList, parent) {
  parent.append(...listingDataList.map(listingTemplate));
}
