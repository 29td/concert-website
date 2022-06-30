// hamburger

const ham = document.querySelector('.ham');
const logo = document.querySelector('.logo');
const icons = document.querySelector('.icons');
const iconLink = document.querySelector('.icon-link');

ham.addEventListener('click', () => {
  if (ham.classList.contains('active')) {
    ham.classList.remove('active');
    icons.style.display = 'none';
  } else {
    ham.classList.add('active');
    icons.style.display = 'block';
  }
});

iconLink.addEventListener('click', () => {
  ham.classList.toggle('active');
  icons.style.display = 'none';
  logo.style.visibility = 'visible';
});

// dynamic page

const speakerSection = document.querySelector('#featuredM');

const desk = [{
  name: 'Mc Richie',
  description: 'Summer festival Concert hosted by Mc Richie',
  featuredImage: './assets/Images/mc.png',
  linkToLiveVersion: '',
  linkToSource: '',

}, {
  name: 'DJ Maphorisa',
  description: 'South african based musician.',
  featuredImage: './assets/Images/mc.png',
  linkToLiveVersion: '',
  linkToSource: '',
}, {
  name: 'Rihanna',
  description: 'New York based musician.',
  featuredImage: './assets/Images/mc.png',
  linkToLiveVersion: '',
  linkToSource: '',
}, {
  name: 'Larmack',
  description: 'Jamaica based musician.',
  featuredImage: './assets/Images/mc.png',
  linkToLiveVersion: '',
  linkToSource: '',
}, {
  name: 'Dladla mshunqisi',
  description: 'KZN based musician.',
  featuredImage: './assets/Images/mc.png',
  linkToLiveVersion: '',
  linkToSource: '',
}, {
  name: 'Tatiana',
  description: 'Kenya based musician.',
  featuredImage: './assets/Images/mc.png',
  linkToLiveVersion: '',
  linkToSource: '',
}];

desk.forEach((speaker) => {
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add('speaker');

  speakerDiv.innerHTML = `
    <div class="mc">
        <img src="${speaker.featuredImage}" alt="img"/>
        <h1>${speaker.name}</h1>
        <span>${speaker.description}</span>
    </div>   
</div>
</div>
`;
  speakerSection.appendChild(speakerDiv);
});
