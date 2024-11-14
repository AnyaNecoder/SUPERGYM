export const Tabs = (tabs) => {
  const tabButtons = tabs.querySelectorAll('.tab-btn');
  const tabContents = tabs.querySelectorAll('.tabs-content-wrapper');
  const tabLine = tabs.querySelector('.tabs-line'); 

  const updateTabLinePosition = (activeTab) => {
    tabLine.style.width = `${activeTab.offsetWidth}px`;
    tabLine.style.left = `${activeTab.offsetLeft}px`;
  };


  tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      tabButtons.forEach(tab => {tab.classList.remove('active')});        
      tab.classList.add('active');

      updateTabLinePosition(tab);      

      tabContents.forEach(content => {content.classList.remove('active')});
      tabContents[index].classList.add('active');
    }); 
  });


  window.addEventListener('resize', () => {
    const activeTab = tabs.querySelector('.tab-btn.active');
    if (activeTab) {
      updateTabLinePosition(activeTab);
    }
  });

  const prices = tabs.querySelectorAll(".tabs-content__price");

    prices.forEach(priceElement => {        
        const priceValue = priceElement.textContent.trim();        
        const priceBg = document.createElement("span");
        
        priceBg.classList.add("tabs-content__price-bg");
        priceBg.setAttribute("aria-hidden", "true");
        priceBg.textContent = priceValue;
        
        priceElement.appendChild(priceBg);        
    });
  
  






}








