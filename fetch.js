const api_url = 'https://dog.ceo/api/breeds/image/random/3'
const container= document.getElementById('container')
const loadingElement = document.getElementById('loading')
const Btn = document.getElementById('btn')
 
loadingElement.style.display = 'none'
const getDogs = async () => {
    loadingElement.style.display = ''
    container.innerHTML = ''
    const response = await fetch(api_url)
    const dogList = await response.json();
    const  msg  = dogList.message;
    
   dogList.message.forEach(i => {  
   const imgDiv = document.createElement('div');
   const imgDivTwo = document.createElement('div');
   const imgDivThree = document.createElement('div');

   imgDiv.classList.add('pic')
   imgDivTwo.classList.add('pic')
   imgDivThree.classList.add('pic')
    container.appendChild(imgDiv)

    const imageElement = document.createElement('img')
    imgDiv.appendChild(imageElement)
    imageElement.src = i       
    
    loadingElement.style.display = 'none'
})
}
Btn.addEventListener('click', (e) => getDogs());