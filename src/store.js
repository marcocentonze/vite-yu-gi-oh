import { reactive } from 'vue'
import axios from "axios";

export const store = reactive({
  base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  cards: null,
  archetypes_url: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  archetypes: null,
  filterSelection: null,

  fetchData() {
    console.log(this, this.base_url);
    axios
      .get(this.base_url)
      .then((response) => {
        console.log(response);
        this.cards = response.data.data;
      })
      .catch((error) => {
        console.log("Error:");
        console.error(error);
      });

    // chiamo la funziona per ottenre gli archetypes
    // this...();
  },

  fetchFilters() {
    axios
      .get(this.archetypes_url)
      .then((response) => {
        this.archetypes = response.data.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
});
