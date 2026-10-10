import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'w3qwbs3d',
    dataset: 'production',
  },
  deployment: {
    // Existing hosted studio for this project, so `sanity deploy` updates it in place
    appId: '27f5fa9076ba3da57a3f1fff',
  },
})
