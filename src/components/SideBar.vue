<template>
    <div class="side-bar">
        <div class="sidebar-tab" @click="selectTab('all-leads')" :class="{ 'active': selected == 'all-leads' }">
            <img src="../assets/icons/sidebar/lead-icon.svg" alt="lead icon">
            <span>All Leads</span>
        </div>
        <div class="sidebar-tab" @click="selectTab('master-inbox')" :class="{ 'active': selected == 'master-inbox' }">
            <img src="../assets/icons/sidebar/mailbox-icon.svg" alt="mailbox icon">
            <span>Master Inbox</span>
        </div>
        <div class="sidebar-tab" @click="selectTab('email-campaigns')" :class="{ 'active': selected == 'email-campaigns' }">
            <img src="../assets/icons/sidebar/email-campaigns-icon.svg" alt="email campaign icon">
            <span>Email Campaigns</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const { path } = useRoute()

const selected = ref('all-leads')

const routesIncluded = path.includes('/all-leads') || path.includes('/master-inbox') || path.includes('/email-campaigns')

if(routesIncluded) {
    selected.value = path.replace('/', '')
}

const selectTab = (value) => {
    selected.value = value
    router.push({ path: `/${value}` })
}
</script>

<style scoped>
.side-bar {
    height: 100%;
    border-right: 1px solid var(--slate-100);
    padding-top: 1rem;
}
.sidebar-tab {
    height: 40px;
    display: flex;
    align-items: center;
    gap: 1.06rem;
    border-left: 3px solid transparent;
    padding-left: 1.06rem;
    margin-bottom: .5rem;
}
.active {
    background-color: var(--purple-100);
    border-left: 3px solid var(--primary);
}
</style>