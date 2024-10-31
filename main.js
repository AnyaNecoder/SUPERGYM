import './src/assets/global-style/style.scss';
import { Equipment } from './src/components/Equipment/equipment';
import { Tabs } from './src/components/Tabs/tabs';





document.addEventListener('DOMContentLoaded', () => {
    const equipment = document.querySelector('.js-equipment');
    Equipment(equipment);

    const tabs = document.querySelector('.js-tabs');
    Tabs(tabs);

})

