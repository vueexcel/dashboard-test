<template>
    <div class="email-campaigns">
        <header class="header">
            All campaigns (24)
        </header>
        <div>
            <EmailCampaingnsTable />
        </div>
    </div>
</template>

<script setup>
import EmailCampaingnsTable from '../../components/email-campaigns/CampaignsTable.vue'
</script>

<style scoped>
.header {
    position: relative;
    padding: 1.25rem;
    font-weight: 500;
    border-bottom: 1px solid var(--slate-100);
}
.header::after {
    content: "";
    background-image: url('../assets/icons/bottom-bar.svg');
    height: 4px;
    width: 39px;
    position: absolute;
    bottom: 0;
    left: 56px;
}
.email-campaigns {
    height: 100%;
    width: 100%;
}
.email-campaigns div {
    min-height: calc(100% - 60px);
    background-color: var(--grey-100);
    padding: 1.25rem;
}
</style>