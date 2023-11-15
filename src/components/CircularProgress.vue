<template>
  <div
    class="progress-bar"
    role="progressbar"
    :aria-valuenow="progress"
    aria-valuemin="0"
    aria-valuemax="100"
    :style="{
      'background': `radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(${color} ${progress}%, var(--slate-200) 0)`
    }"
  >
    <div class="progress-percentage">
        <slot name="percentage"></slot>
    </div>
    <div class="icon">
        <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  progress: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: "var(--green-300)"
  }
})
</script>

<style scoped>
.progress-bar {
  width: 41px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.progress-percentage {
  font-size: var(--fs-xs);
}
.icon {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
