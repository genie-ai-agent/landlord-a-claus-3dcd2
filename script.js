import { cast, scenes, meta } from './data.js';

// --- Cover page: render cast list if present ---
const castList = document.getElementById('cast-list');
if (castList) {
  castList.innerHTML = cast.map(c => `
    <li class="cast__item">
      <p class="cast__name">${c.name}</p>
      <p class="cast__role">${c.role}</p>
      <p class="cast__note">${c.note}</p>
    </li>
  `).join('');
}

// --- Script page: render scenes ---
const scriptEl = document.getElementById('script');
const sceneNav = document.getElementById('scene-nav');

if (scriptEl) {
  scriptEl.innerHTML = scenes.map(s => `
    <article class="scene" id="${s.id}">
      <header class="scene__head">
        <p class="scene__num">Scene ${s.number}</p>
        <h2 class="scene__title">${s.title}</h2>
        <p class="scene__setting stage"><em>${s.setting}</em></p>
      </header>
      <ol class="lines">
        ${s.lines.map(l => `
          <li class="line">
            <span class="line__who">${l.who}.</span>
            <span class="line__text">${l.text}</span>
          </li>
        `).join('')}
      </ol>
      ${s.direction ? `<p class="scene__close stage"><em>${s.direction}</em></p>` : ''}
    </article>
  `).join('');
}

if (sceneNav) {
  sceneNav.innerHTML = scenes.map(s => `
    <a class="scene-nav__item" href="#${s.id}">
      <span class="scene-nav__num">${s.number}</span>
      <span class="scene-nav__title">${s.title}</span>
    </a>
  `).join('');
}

// --- Toggle stage directions ---
const toggle = document.getElementById('toggle-directions');
if (toggle) {
  toggle.addEventListener('click', () => {
    const on = document.body.classList.toggle('hide-stage');
    const pressed = !on;
    toggle.setAttribute('aria-pressed', String(pressed));
    toggle.querySelector('span').textContent = pressed ? 'on' : 'off';
  });
}
