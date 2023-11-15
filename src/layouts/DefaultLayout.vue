<template>
    <div class="default">
        <SideBar />
        <main class="main hide-scrollbar">
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SideBar from '../components/SideBar.vue';
</script>

<style scoped>
.default {
    height: 100%;
    height: calc(100% - 50px);
    width: 100%;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 230px 1fr;
}
.main {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
}
</style>