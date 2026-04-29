// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ESP32 AI Clock Alarm',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mohankumargupta/espclockalarm' }],
			sidebar: [
				{
					label: 'Brainstorming',
					autogenerate: { directory: 'brainstorming' },
				},
			],
		}),
	],
});
