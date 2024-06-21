import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-react-app/', // 替換 'my-react-app' 為你的 GitHub 存儲庫名稱
  build: {
    outDir: 'dist' // 指定輸出目錄（通常是 'dist'）
  }
});