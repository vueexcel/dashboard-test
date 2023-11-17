<template>
    <div class="email-campaigns">
        <header class="header">
            All campaigns ({{ campaigns.length }})
        </header>
        <div>
            <EmailCampaingnsTable :campaigns="campaigns" @select-all="selectAll" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import EmailCampaingnsTable from '../../components/email-campaigns/CampaignsTable.vue'
import Campaigns from '../../components/email-campaigns/campaigns.json'

const campaigns = ref([...Campaigns])

const selectAll = (val) => {
  campaigns.value.forEach((campaign) => {
    campaign.selected = val
  })
}
</script>

<style scoped>
.header {
    position: fixed;
    background-color: var(--white);
    width: 100%;
    z-index: 99;
    padding: 1.25rem;
    font-weight: 500;
    border-bottom: 1px solid var(--slate-100);
}
.header::after {
    content: "";
    background-image: url('../../assets/icons/bottom-bar.svg');
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
    padding-top: 5rem;
}
</style>