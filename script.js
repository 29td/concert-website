const ham = document.querySelector('.ham');
const logo = document.querySelector('.logo');
const icons = document.querySelector('.icons');
const iconLink = document.querySelector('.icon-link');
const iconLink2 = document.querySelector('.icon-link2');
const iconLink3 = document.querySelector('.icon-link3');
const iconLink4 = document.querySelector('.icon-link4');

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

const mobile = document.querySelector('.featuredM');
const desktop = document.querySelector('.featuredD');

const mob = {
  name: 'Mc Richie',
  description: 'Summer festival Concert hosted by Mc Richie',
  featuredImage: './assets/Images/mc.png',
  linkToLiveVersion: '',
  linkToSource: '',

};

const desk = {
  name: 'Mc Richie',
  description: 'Summer festival Concert hosted by Mc Richie',
  featuredImage: './assets/Images/mc.png',
  linkToLiveVersion: '',
  linkToSource: '',

};

Dpopup.innerHTML = `            <div class="speaker">
<h2>Featured Speaker</h2>
<div class="line">
</div>
<div class="mc">
    <img src="./assets/Images/mc.png" alt="img"/>
    <h1>Mc Richie</h1>
    <span>Summer festival Concert hosted by Mc Richie</span>
</div>   
</div>
`;

Mpopup.innerHTML = `            <div class="speaker">
<h2>Featured Speaker</h2>
<div class="line">
</div>
<div class="mc">
    <img src="./assets/Images/mc.png" alt="img"/>
    <h1>Mc Richie</h1>
    <span>Summer festival Concert hosted by Mc Richie</span>
</div>   
</div>
`;