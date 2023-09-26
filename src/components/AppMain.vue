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
        <!-- select -->
       <div class="container py-4">
        <div>
            <label for="sceltaOpzione"></label>
            <select id="sceltaOpzione" name="opzione" class="ps-1 pe-5">
                <option value="opzione1" active>Alien</option>
                <option value="opzione2">Drago</option>
                <option value="opzione3">Fuoco</option>
            </select>
        </div>
       </div>


         <!-- h4 + cards -->
        <div class="container ps-5 pe-5" style="background-color: white;">
            <div>
                <h3 class="text-white" style="background-color:#212529 ">Found 39 cards</h3>
            </div>
            <div class="row row-cols1 row-cols-sm-5 g-3">
                <div class="col" v-for="card in store.cards">
                    <div class="card" style="width: 200px; height: 450px;">
                        <img :src="card.card_images[0].image_url" class="card-img-top" alt="Immagine">
                        <div class="card-body" style="background-color: #D48F38;">
                            <h4 class="card-title text-white">{{ card.name }}</h4>
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
