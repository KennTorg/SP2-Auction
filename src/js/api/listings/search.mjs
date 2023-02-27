import { getListings } from "./listings.mjs";
import { renderListingTemplates } from "../../templates/listingTemplate.mjs";
//import { load } from "../../storage/index.mjs";

export async function searchListings() {
  try {
    const listings = await getListings();
    const searchInput = document.querySelector("#search");
    const searchForm = document.querySelector("#searchForm");
    const searchContainer = document.querySelector("#listings");

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchResult = listings.filter((listing) => {
        const title = listing.title.toLowerCase();
        const searchValue = searchInput.value.toLowerCase();

        if (title.includes(searchValue)) {
          return true;
        }
      });
      searchContainer.innerHTML = "";
      renderListingTemplates(searchResult, searchContainer);
    });
  } catch (error) {
    searchContainer.innerHTML = "Sorry no match";
    console.log(error);
  }
}
