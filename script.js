// Fetch JSON Data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Update Logo
    const logo = document.getElementById('logo');
    logo.textContent = data.logo.text || 'Kelly';
    logo.title = data.logo.alt || 'Kelly Adams - Home';

    // Update Menu
    const menu = document.getElementById('menu');
    data.menu.forEach(item => {
      const li = document.createElement('li');
      li.className = 'nav-item';
      li.innerHTML = `<a class="nav-link" href="${item.link}">${item.text}</a>`;
      menu.appendChild(li);
    });

    // Update Social Links
    const socialLinks = document.getElementById('social-links');
    data.social.forEach(item => {
      const a = document.createElement('a');
      a.href = item.link;
      a.target = '_blank';
      a.innerHTML = `<i class="${item.icon}"></i>`;
      socialLinks.appendChild(a);
    });

    // Update Hero Section
    document.getElementById('hero-title').textContent = data.hero.title;
    document.getElementById('hero-subtitle').textContent = data.hero.subtitle;
    document.getElementById('hero-button').textContent = data.hero.button.text;
    document.getElementById('hero-button').href = data.hero.button.link;
    document.getElementById('hero-image').src = data.hero.image.src;
    document.getElementById('hero-image').alt = data.hero.image.alt;

    // Update Footer
    document.getElementById('footer-text').textContent = data.footer.text;
    document.getElementById('footer-design').textContent = data.footer.design;
    const footerSocialLinks = document.getElementById('footer-social-links');
    data.footer.social.forEach(item => {
      const a = document.createElement('a');
      a.href = item.link;
      a.target = '_blank';
      a.innerHTML = `<i class="${item.icon}"></i>`;
      footerSocialLinks.appendChild(a);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });
