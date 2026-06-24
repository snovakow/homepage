import { defineConfig } from 'vite';

export default defineConfig({
	// Ensures assets are referenced with relative paths
	base: '',

	build: {
		rollupOptions: {
			output: {
				// Puts built JS, CSS, and imported assets into 'homepage/'
				entryFileNames: 'homepage/[name]-[hash].js',
				chunkFileNames: 'homepage/[name]-[hash].js',
				assetFileNames: 'homepage/[name]-[hash].[ext]',
			},
		},
	},
});