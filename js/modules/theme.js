import DG from './varComponents.js';
const iconTheme = DG('iconTheme');
const iconDefault = DG('iconDefault');
const html = document.documentElement.classList;
const iconThemeOption = {
	dark: 'sun',
	light: 'moon',
};
const icon = IT => {
	iconDefault.setAttribute(
		'srcset',
		`assets/icons/${iconThemeOption[IT]}.svg`
	);
	iconTheme.setAttribute('src', `assets/icons/${iconThemeOption[IT]}.svg`);
};
const localStorageTheme = theme => {
	html.toggle(theme);
	icon(theme);
};
export default function themeDefault() {
	const currentTheme = localStorage.getItem('theme');
	if (currentTheme) {
		if (currentTheme === 'dark') {
			localStorageTheme(currentTheme);
		} else {
			localStorageTheme(currentTheme);
		}
	} else {
		let theme;
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			html.toggle('dark');
			theme = 'dark';
		} else {
			html.toggle('light');
			theme = 'light';
		}
		icon(theme);
		localStorage.setItem('theme', theme);
	}
}
export const theme = () => {
	let theme;
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		html.toggle('light');
		theme = html.contains('light') ? 'light' : 'dark';
	} else {
		html.toggle('dark');
		theme = html.contains('dark') ? 'dark' : 'light';
	}
	icon(theme);
	localStorage.setItem('theme', theme);
};
