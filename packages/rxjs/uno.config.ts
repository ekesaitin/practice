import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        './src/**/*.{ts,tsx}',
      ],
    },
  },
})