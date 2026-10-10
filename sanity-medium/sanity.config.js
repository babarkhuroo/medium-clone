import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity-medium',

  projectId: 'w3qwbs3d',
  dataset: 'production',

  plugins: [structureTool(), visionTool({ defaultApiVersion: '2021-10-21' })],

  schema: {
    types: schemaTypes,
  },
})
