import { VitePluginNode } from 'vite-plugin-node'

/** @type {import('vite').UserConfig} */
export default {
  server: {
    port: 3000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'fastify',
      appPath: './server.ts',
      exportName: 'platformBackend',
      tsCompiler: 'typescript',
    }),
  ],
}
