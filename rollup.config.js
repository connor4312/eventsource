import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'EventSource',
  },
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: false,
      compilerOptions: {
        target: 'es2018',
        module: 'esnext',
        moduleResolution: 'node',
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true
      }
    })
  ]
}
