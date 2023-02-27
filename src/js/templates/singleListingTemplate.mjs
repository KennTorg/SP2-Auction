export function singleListingTemplate(listingData) {
  const { title, media, description, bids, endsAt } = listingData;

  // SINGLE LISTING HEADER
  const pageHeader = document.querySelector(".single-header");
  pageHeader.innerText = title;
  pageHeader.classList = "m-auto text-center mt-5 text-wrap text-break";

  // SINGLE LISTING CARD
  const singleListingContainer = document.createElement("div");
  singleListingContainer.classList =
    "card d-flex flex-wrap m-auto p-3 justify-content-around";

  const containerImgEnds = document.createElement("div");
  containerImgEnds.classList = "d-flex flex-column justify-content-center";

  const carouselContainer = document.createElement("div");
  carouselContainer.classList = "itemImage m-auto carousel slide";
  carouselContainer.id = "carousel";
  carouselContainer.dataset.bsRide = "carousel";

  const carouselInner = document.createElement("div");
  carouselInner.classList = "carousel-inner";

  if (media.length === 0 || !media) {
    const noImageContainer = document.createElement("div");
    noImageContainer.classList = "carousel-item active ";
    const listingMedia = document.createElement("img");
    listingMedia.onerror = 'this.src="/src/image/imageNotFound.jpg"';
    const image = media.length ? media : "/src/image/imageNotFound.jpg";
    listingMedia.src = image;
    carouselInner.append(noImageContainer);
    noImageContainer.append(listingMedia);
  } else {
    for (let i = 0; i < media.length; i++) {
      const carouselItem = document.createElement("div");
      carouselItem.classList = "carousel-item";
      carouselItem.ariaLabel = `slide ${i}`;
      if (carouselItem.ariaLabel === "slide 0") {
        carouselItem.classList = "carousel-item active";
      }
      const listingMedia = document.createElement("img");
      listingMedia.src = media[i];
      listingMedia.alt = `Image of ${title}`;
      listingMedia.classList = "d-block w-100 pb-2";
      carouselItem.append(listingMedia);
      carouselInner.append(carouselItem);
    }
  }

  const slideButtonLeft = document.createElement("button");
  slideButtonLeft.classList = "carousel-control-prev";
  slideButtonLeft.type = "button";
  slideButtonLeft.dataset.bsTarget = "#carousel";
  slideButtonLeft.setAttribute("data-bs-slide", "prev");

  const buttonLIcon = document.createElement("span");
  buttonLIcon.classList = "carousel-control-prev-icon";
  buttonLIcon.ariaHidden = "true";

  const buttonLHidden = document.createElement("span");
  buttonLHidden.classList = "visually-hidden";
  buttonLHidden.innerText = "Previous";

  const slideButtonRight = document.createElement("button");
  slideButtonRight.classList = "carousel-control-next";
  slideButtonRight.type = "button";
  slideButtonRight.dataset.bsTarget = "#carousel";
  slideButtonRight.setAttribute("data-bs-slide", "next");

  const buttonRIcon = document.createElement("span");
  buttonRIcon.classList = "carousel-control-next-icon";
  buttonRIcon.ariaHidden = "true";

  const buttonRHidden = document.createElement("span");
  buttonRHidden.classList = "visually-hidden";
  buttonRHidden.innerText = "Next";

  slideButtonLeft.append(buttonLIcon, buttonLHidden);
  slideButtonRight.append(buttonRIcon, buttonRHidden);

  carouselContainer.append(carouselInner, slideButtonLeft, slideButtonRight);

  const listingEnds = document.createElement("p");
  listingEnds.innerHTML =
    "Closes at:" + `<br>` + new Date(endsAt).toLocaleDateString();
  listingEnds.classList = "m-auto text-uppercase";

  containerImgEnds.append(carouselContainer, listingEnds);

  const listingInformation = document.createElement("div");
  listingInformation.classList = "p-3 m-auto";

  const listingDescription = document.createElement("div");
  listingDescription.classList = "bg-secondary p-3 m-auto mb-3";
  listingDescription.innerText = "Description:";

  const descriptionText = document.createElement("p");
  descriptionText.innerText = description;

  listingDescription.append(descriptionText);

  const lastBid = document.createElement("button");
  lastBid.classList = "btn btn-success btn-small";
  lastBid.innerText = "No bids yet";

  if (bids) {
    for (var i = 0; i < bids.length; i++) {
      if (bids.length > 1) {
        bids.sort((firstBid, secondBid) => firstBid.amount - secondBid.amount);
      }
      lastBid.classList = "btn btn-success btn-small p-2";
      lastBid.innerText = `Last bid: $${bids[i].amount}`;
    }
  }

  listingInformation.append(listingDescription, lastBid);

  singleListingContainer.append(containerImgEnds, listingInformation);

  return singleListingContainer;
}
/**
  - Displays the single post
  - @param {string} listingData
  - @param {string} parent
  */

export function renderListingTemplate(listingData, parent) {
  parent.append(singleListingTemplate(listingData));
}
