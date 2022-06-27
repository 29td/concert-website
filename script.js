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
    logo.style.visibility = 'visible';
    icons.style.display = 'none';
  } else {
    ham.classList.add('active');
    logo.style.visibility = 'hidden';
    icons.style.display = 'block';
  }
});

iconLink.addEventListener('click', () => {
  ham.classList.toggle('active');
  icons.style.display = 'none';
  logo.style.visibility = 'visible';
});

iconLink2.addEventListener('click', () => {
  ham.classList.toggle('active');
  icons.style.display = 'none';
  logo.style.visibility = 'visible';
});

iconLink3.addEventListener('click', () => {
  ham.classList.toggle('active');
  icons.style.display = 'none';
  logo.style.visibility = 'visible';
});

iconLink4.addEventListener('click', () => {
    ham.classList.toggle('active');
    icons.style.display = 'none';
    logo.style.visibility = 'visible';
  });
  
