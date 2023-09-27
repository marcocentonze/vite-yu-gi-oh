<script>

import { store } from '../store.js'

export default {
    name: 'Appfilter',

    data() {
        return {
            store
        }
    },
    emits: ['SelectorFilter']
   

}

</script>

<template>
    <div>
        <label for="sceltaOpzione"></label>
        <select id="sceltaOpzione" name="opzione" class="ps-1 pe-5" v-model="store.filterSelection"
            @click="$emit('SelectorFilter')">
            <option value="" active>Select One</option>
            <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{
                archetype.archetype_name }}</option>

        </select>
    </div>
</template>

<style></style>