import { defineConfig } from 'bumpp'

export default defineConfig({
  sign: true,
  files: [
    'package.json',
    'packages/vitepress-plugin-og/package.json',
    'packages/rspress-plugin-og/package.json',
  ],
})
