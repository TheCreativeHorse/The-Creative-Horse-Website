import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  projectId: '98p3gflh',
  dataset: 'production',
  apiVersion: '2026-05-25',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [],
  },
})