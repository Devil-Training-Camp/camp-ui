import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.js',
      external: ['react', 'react/jsx-runtime'],
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          entryFileNames: '[name].js',
          preserveModules: true,
        },
        {
          format: 'commonjs',
          dir: 'dist/lib',
          entryFileNames: '[name].js',
          preserveModules: true,
        },
      ],
      preserveEntrySignatures: 'strict'
    },
    sourcemap: true,
  }
}