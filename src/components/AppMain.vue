<script>
import { store } from '../store.js';

export default {
    name: 'AppMain',
    data() {
    return {
      store,
    };
  },
  created() {
        store.fetchData() //richiamo la funzione per prendere i dati dall'api
    }
};

</script>

<template>
    <main>

        <div class="container">
            <div>
                <h3 class="text-white" style="background-color:#212529 ">Found 39 cards</h3>
            </div>
            <div class="row row-cols1 row-cols-sm-3">
                <div class="col" v-for="card in store.cards">   
                    <div class="card" style="width: 200px; height: 450px;">
                        <img :src="card.card_images[0].image_url" class="card-img-top" alt="Immagine">
                        <div class="card-body">
                            <h3 class="card-title">{{ card.name }}</h3>
                            <p class="card-text">{{ card.archetype }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    background-color: #D48F38;
}
</style>
