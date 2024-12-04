import Inputmask from "inputmask";
import './src/assets/global-style/style.scss';
import { Equipment } from './src/components/Equipment/equipment';
import { Tabs } from './src/components/Tabs/tabs';
import { Popup } from './src/components/Popup/popup';
import { InstructorSlider } from "./src/components/Instructors/instructors";
import { animatedCard } from "./src/components/Advantages/advantages.js";
import { reviewsSlider } from "./src/components/Reviews/reviews.js";
import { pulseTitle } from "./src/components/Animation/animation.js";
// import { FormsValidation } from "./src/components/Сontacts/validation.js";
import { FreeTrainingForm } from "./src/components/Сontacts/contacts.js";





document.addEventListener('DOMContentLoaded', () => {
    const equipment = document.querySelector('.js-equipment');
    Equipment(equipment);

    const tabs = document.querySelector('.js-tabs');
    Tabs(tabs);

    Popup();

    InstructorSlider();

    animatedCard();

    reviewsSlider();

    pulseTitle();

    FreeTrainingForm();

    // FormsValidation();

});