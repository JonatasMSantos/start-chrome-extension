const form = document.querySelector('form')
const ANSIOSO_PNG = "https://fenix.grupomemorial.net/assets/imagens/murilo.jpg"

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  
  const [ tab ] = await chrome.tabs.query(
    { 
      active: true, 
      currentWindow: true
    }
  )


  const replaceImages = (url) => {
    document.body.style.background = 'red';
    const images = document.querySelectorAll('img');
    images.forEach((image) => image.src = url)
  }
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: replaceImages,
    args: [ANSIOSO_PNG]
  });

})