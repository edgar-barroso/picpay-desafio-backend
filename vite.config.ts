import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

  export default defineConfig({
      plugins:[tsConfigPaths()],
      //@ts-ignore
      test:{
          globals:true,
      }
  })