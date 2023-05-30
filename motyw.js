localStorage.motyw;

if (localStorage.motyw==undefined)
{
localStorage.motyw='dark'
}

  if (localStorage.motyw == 'dark')
  {
    document.querySelector('body').style.backgroundColor = '#303030';
    document.querySelector('body').style.color = '#ffffff';
    document.querySelector('.switch').classList.remove('light');
  }
  else 
  {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    document.querySelector('.switch').classList.add('light');
  }
document.querySelector('.switch').addEventListener('click', (e) => {
  if (localStorage.motyw == 'dark')
  {
    
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    document.querySelector('.switch').classList.add('light');
    localStorage.motyw='light';
  }
  else 
  {
    document.querySelector('body').style.backgroundColor = '#303030';
    document.querySelector('body').style.color = '#ffffff';
    document.querySelector('.switch').classList.remove('light');
    localStorage.motyw='dark';
  }
  
});
