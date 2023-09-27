<script>
import { store } from '../store.js'

export default {
    name: 'Appfilter',

    data() {
        return {
            store,
        }
    },
    emits: ['selectorFilter'],
    created() {
        store.fetchData();
    },
}
</script>


<template>
    <div>
        <label for="sceltaOpzione"></label>
        <select id="sceltaOpzione" class="ps-1 pe-5" v-model="store.selectArch" @change="$emit('selectorFilter')">
            <option disabled value="">Choose Archetyp</option>
            <option value="Alien">Alien</option>
            <option value="Noble Knight">Noble Knight</option>
            <option value="Melodious">Melodious</option>
            <option value="Archfiend">Archfiend</option>
        </select>
    </div>
</template>

<style></style>