<script>

import { store } from '../store.js';
import AppFilter from './AppFilter.vue'

export default {
    name: 'AppMain',
    components: {
        AppFilter
    },
    data() {
        return {
            store,
        };
    },
    created() {
        store.fetchData(); //richiamo la funzione per prendere i dati dall'api

    },
    methods: {
        filterArchetype() {
            const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php' + `?archetype=${store.selectArch}`

            console.log(url);
            this.store.base_url = url + '&num=20&offset=0'
            store.fetchData(url)
        }
    },
};

</script>

<template>
    <main>
        <!-- select -->
        <div class="container py-4">

            <AppFilter @selector-filter="filterArchetype" />



        </div>


        <!-- h4 + cards -->
        <section v-if="store.cards">
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
        </section>

        <section v-else>
            <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass"
                    viewBox="0 0 16 16">
                    <path
                        d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z" />
                </svg>
                <span>LOADING...PLEASE WAIT</span>
            </div>
        </section>
    </main>
</template>

<style scoped>
main {
    background-color: #D48F38;
}
</style>
