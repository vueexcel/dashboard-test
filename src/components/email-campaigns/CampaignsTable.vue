<template>
  <table class="email-campaings-table" cellspacing="0" cellpadding="8">
    <thead>
      <tr>
        <th><input type="checkbox" class="checkbox" v-model="isAllSelected" /></th>
        <th>Campaign Details</th>
        <th colspan="6">Report</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="campaign in campaigns" :key="campaign.id">
        <td><input type="checkbox" class="checkbox" v-model="campaign.selected" /></td>
        <td>
          <div class="campaign-details">
            <CircularProgress
              :progress="campaign.campaigndetails.percentage"
              :color="getColor(campaign.campaigndetails.status)"
            >
              <template #percentage v-if="campaign.campaigndetails.status.includes('Sent')">
                {{ campaign.campaigndetails.percentage }}%
              </template>
              <template #icon v-else-if="campaign.campaigndetails.status.includes('Drafted')">
                <img src="../../assets/icons/drafted-icon.svg" alt="drafted icon" />
              </template>
              <template #icon v-else-if="campaign.campaigndetails.status.includes('Stopped')">
                <img src="../../assets/icons/block-icon.svg" alt="block icon" />
              </template>
              <template #icon v-else-if="campaign.campaigndetails.status.includes('Paused')">
                <img src="../../assets/icons/pause-icon.svg" alt="pause icon" />
              </template>
            </CircularProgress>
            <div>
              <div class="campaign-title">
                <span>{{ campaign.campaigndetails.title }}</span>
                <img src="../../assets/icons/TabIcon.svg" alt="tab icon" />
              </div>
              <div>
                <div
                  class="status"
                  :style="{ backgroundColor: getColor(campaign.campaigndetails.status) }"
                ></div>
                <div>
                  <span class="campaign-status">{{ campaign.campaigndetails.status }} | </span>
                  <span class="campaign-sequences"
                    >{{ campaign.campaigndetails.sequences }} Sequences</span
                  >
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div class="report-sent" :class="{ deactivated: isDrafted(campaign.campaigndetails.status) }">
            <span>{{ campaign.report.sent.data }}</span>
          </div>
          <span class="report-type">Sent</span>
        </td>
        <td>
          <div class="report-clicked" :class="{ deactivated: isDrafted(campaign.campaigndetails.status) }">
            <span>{{ campaign.report.clicked.data }}</span>
            <span>{{ campaign.report.clicked.percentage }}%</span>
          </div>
          <span class="report-type"
            >Clicked
            <img
              src="../../assets/icons/error.svg"
              alt="error icon"
              v-if="isDrafted(campaign.campaigndetails.status)"
          /></span>
        </td>
        <td>
          <div class="report-opened" :class="{ deactivated: isDrafted(campaign.campaigndetails.status) }">
            <span>{{ campaign.report.opened.data }}</span>
            <span>{{ campaign.report.opened.percentage }}%</span>
          </div>
          <span class="report-type"
            >Opened
            <img
              src="../../assets/icons/error.svg"
              alt="error icon"
              v-if="isDrafted(campaign.campaigndetails.status)"
          /></span>
        </td>
        <td>
          <div class="report-replied" :class="{ deactivated: isDrafted(campaign.campaigndetails.status) }">
            <span>{{ campaign.report.replied.data }}</span>
            <span>{{ campaign.report.replied.percentage }}%</span>
          </div>
          <span class="report-type"
            >Replied
            <img
              src="../../assets/icons/error.svg"
              alt="error icon"
              v-if="isDrafted(campaign.campaigndetails.status)"
            />
          </span>
        </td>
        <td>
          <div
            class="report-positive-reply"
            :class="{ deactivated: isDrafted(campaign.campaigndetails.status) }"
          >
            <span>{{ campaign.report.positiveReply.data }}</span>
            <span>{{ campaign.report.positiveReply.percentage }}%</span>
          </div>
          <span class="report-type">
            Positive Reply
            <div class="tooltip">
              <img
                src="../../assets/icons/info-solid-icon.svg"
                alt="info icon"
                v-if="isDrafted(campaign.campaigndetails.status)"
              />
              <img src="../../assets/icons/info-regular-icon.svg" alt="info icon" v-else />
              <span class="text">info</span>
            </div>
          </span>
        </td>
        <td>
          <div class="action-buttons">
            <button>
              <img src="../../assets/icons/pause-icon.svg" alt="pause icons" />
            </button>
            <button>
              <img src="../../assets/icons/edit-icon.svg" alt="edit icons" />
            </button>
            <button>
              <img src="../../assets/icons/more-icon.svg" alt="more icons" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'
import CircularProgress from '../CircularProgress.vue'

defineProps({
    campaigns: {
        type: Array,
        required: true,
    }
})

const emits = defineEmits(["select-all"])
const isAllSelected = ref(false)

const isDrafted = (status) => {
    return status.includes('Drafted')
}

const getColor = (status) => {
  switch (true) {
    case status.includes('Sent'):
      return 'var(--green-300)'
    case status.includes('Drafted'):
      return 'var(--grey-300)'
    case status.includes('Stopped'):
      return 'var(--red-100)'
    case status.includes('Paused'):
      return 'var(--yellow-500)'
    default:
      return 'var(--green-300)'
  }
}

watch(isAllSelected, (val) => {
  emits("select-all", val)
})
</script>

<style scoped>
.checkbox {
  height: 16px;
  width: 16px;
  margin-left: 0.75rem;
}
.status {
  height: 6px;
  width: 6px;
  border-radius: 50%;
}

.deactivated span {
  color: var(--grey-200) !important;
}
.email-campaings-table {
  width: 100%;
  border-spacing: 0 1.92px;
}
.email-campaings-table > thead > tr > th {
  height: 50px;
  text-align: start;
  background-color: var(--slate-300);
  color: var(--black-200);
  font-weight: 700;
}
.email-campaings-table > tbody > tr {
  box-shadow: 0px 2px 10px 0px rgba(20, 20, 20, 0.05);
  height: 92px;
  background-color: var(--white);
}
.campaign-details {
  display: flex;
  align-items: center;
  gap: 1.31rem;
}
.campaign-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 8px;
}
.campaign-title ~ div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.campaign-title span {
  color: var(--primary);
  font-size: 0.9375rem;
  font-weight: 700;
}

.campaign-status,
.campaign-sequences {
  font-size: var(--fs-sm);
  color: var(--black-200);
}
.report-sent span:first-child {
  color: var(--primary);
}

.report-sent span:first-child,
.report-clicked span:first-child,
.report-opened span:first-child,
.report-replied span:first-child,
.report-positive-reply span:first-child {
  font-size: var(--fs-lg);
  margin-right: 0.25rem;
}

.report-clicked span:last-child,
.report-opened span:last-child,
.report-replied span:last-child,
.report-positive-reply span:last-child {
  font-size: var(--fs-sm);
  color: var(--black-200);
}

.report-sent,
.report-opened,
.report-replied {
  font-weight: 500;
}

.report-clicked {
  color: var(--warning);
}
.report-opened {
  color: var(--purple-200);
}
.report-replied {
  color: var(--blue-100);
}
.report-positive-reply {
  color: var(--green-400);
}

.report-type {
  font-size: var(--fs-sm);
  color: var(--black-200);
}
.action-buttons {
  display: flex;
  gap: 0.75rem;
}
.action-buttons button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border: 1px solid var(--slate-500);
  border-radius: 3px;
  background-color: var(--slate-400);
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .text {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
}

.tooltip .text::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .text {
  visibility: visible;
}
</style>
