import DG from './modules/varComponents.js';
import FrontendMentor from './modules/urlProjects.js';
const templateProjects = document.getElementById('templateProjects').content;
const contentProjects = document.getElementById('contentProjects');
const paint = ({ content, url }) => {
	content.textContent = '';
	const fragment = document.createDocumentFragment();
	url.forEach(item => {
		const clone = templateProjects.cloneNode(true);
		const img = clone.querySelector('.project__conteImg img');
		const title = clone.querySelector('.project__title');
		const technologies = clone.querySelector('.project__technologies');
		const description = clone.querySelector('.project__description');
		const code = clone.querySelector('.code');
		const demo = clone.querySelector('.demo');
		img.setAttribute('src', `./assets/img/projects/${item.img}`);
		img.setAttribute('alt', item.img);
		title.dataset.value = `titleId-${item.id}`;
		title.textContent = item.title;
		technologies.textContent = '';
		item.technologies.forEach(tec => {
			const span = document.createElement('span');
			span.classList.add('project__item');
			span.textContent = tec;
			technologies.appendChild(span);
		});
		description.dataset.value = `descriptionId-${item.id}`;
		description.textContent = item.description;
		code.setAttribute('href', item.urlCode);
		demo.setAttribute('href', item.urlDemo);
		fragment.appendChild(clone);
	});
	content.appendChild(fragment);
};
paint({ content: contentProjects, url: FrontendMentor });
