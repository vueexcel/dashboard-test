import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CampaignsTable from '../email-campaigns/CampaignsTable.vue'

describe('Email Campaign Table', () => {
  it('renders properly', () => {
    const wrapper = mount(CampaignsTable)
    expect(wrapper.exists()).toBe(true)
  })
})
