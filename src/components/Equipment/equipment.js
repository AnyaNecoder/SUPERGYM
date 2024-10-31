export const Equipment = (equipment) => {
  equipment.querySelector('.equipment__video-play-button').addEventListener('click', function() {
      const videoWrapper = document.querySelector('.equipment__video-wrapper');
      const youtubeUrl = 'https://rutube.ru/play/embed/baf5cfaff1b356f475f64692f8c7c213/';
        
        
      const iframe = document.createElement('iframe');
      iframe.setAttribute('width', '360');
      iframe.setAttribute('height', '230');
      iframe.setAttribute('src', youtubeUrl);
      iframe.setAttribute('frameBorder', '0');
      iframe.setAttribute('allow', 'clipboard-write; autoplay');
      iframe.setAttribute('allowfullScreen', true);
      
        
      videoWrapper.innerHTML = '';
      videoWrapper.appendChild(iframe);
  });
}



