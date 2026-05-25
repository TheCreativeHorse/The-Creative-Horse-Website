import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { postType } from './sanity/schemaTypes/post'

export default defineConfig({
  projectId: '98p3gflh',
  dataset: 'production',
  apiVersion: '2026-05-25',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [postType],
  },
})