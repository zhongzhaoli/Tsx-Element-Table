import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      name: 'TsxElementTable',
      fileName: (format) => `tsx-element-table.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vuedraggable'],
      output: {
        globals: {
          vue: 'Vue',
          vuedraggable: 'VueDraggable',
        },
      },
    },
  },
  plugins: [vue(), vueJsx()],
});
