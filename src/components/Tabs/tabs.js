export const Tabs = (tabs) => {
  const tabButtons = tabs.querySelectorAll('.tab-btn');
  const tabContents = tabs.querySelectorAll('.tabs-content-wrapper');


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


  const prices = document.querySelectorAll(".tabs-content__price");

    prices.forEach(priceElement => {        
        const priceValue = priceElement.textContent.trim();        
        const priceBg = document.createElement("span");
        
        priceBg.classList.add("tabs-content__price-bg");
        priceBg.setAttribute("aria-hidden", "true");
        priceBg.textContent = priceValue;
        
        priceElement.appendChild(priceBg);        
    });
  
  






}








