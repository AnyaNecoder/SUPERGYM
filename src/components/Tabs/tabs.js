export const Tabs = () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tabs-content-wrapper');


  tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      tabButtons.forEach(tab => {tab.classList.remove('active')});        
      tab.classList.add('active');
      
      const tabLine = document.querySelector('.tabs-line');
      tabLine.style.width = e.target.offsetWidth + "px";
      tabLine.style.left = e.target.offsetLeft + "px";

      tabContents.forEach(content => {content.classList.remove('active')});
      tabContents[index].classList.add('active');
    }); 
  });   
}








