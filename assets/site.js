(() => {
  const page = document.body;
  if (!page || !page.dataset.siteShell) return;

  const source = document.currentScript?.src;
  // The assets directory lives directly below the site root. Deriving the root
  // from this script keeps the shell working on GitHub project pages and local previews.
  const base = source ? new URL('../', source) : new URL('/', location.href);
  const routes = [
    ['/', 'Home'], ['/lab/', 'Lab'], ['/journal/', 'Journal'], ['/podcast/', 'Podcast'], ['/books/', 'Library'], ['/bio/', 'About']
  ];
  const normalise = path => path === '/' ? '/' : path.replace(/index\.html$/, '').replace(/\/?$/, '/');
  const here = normalise(location.pathname);
  const resolve = href => new URL(href.replace(/^\//, ''), base).pathname;
  if (page.dataset.siteShell === 'tool') {
    const orbit = document.createElement('nav');
    orbit.className = 'site-orbit';
    orbit.setAttribute('aria-label', 'Site navigation');
    orbit.innerHTML = `<a href="${resolve('/')}">Home</a><a href="${resolve('/lab/')}">Lab</a>`;
    page.append(orbit);
    return;
  }
  const nav = routes.map(([href, label]) => {
    const target = resolve(href);
    return `<a href="${target}"${normalise(target) === here ? ' aria-current="page"' : ''}>${label}</a>`;
  }).join('');
  const header = document.createElement('header');
  header.className = 'site-shell';
  header.innerHTML = `<a class="site-wordmark" href="${resolve('/')}">Adiyat Coto</a><button class="site-menu" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button><nav class="site-nav" id="site-nav" aria-label="Primary">${nav}</nav>`;
  page.prepend(header);
  const button = header.querySelector('.site-menu');
  const menu = header.querySelector('.site-nav');
  button.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
  });
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `<span>© ${new Date().getFullYear()} Adiyat Coto</span><span>Research, tools, and writing.</span>`;
  page.append(footer);
})();
