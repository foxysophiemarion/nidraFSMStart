// Подключение функционала
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { frontModules } from "./modules.js";

// Подключение с node_modules
import tippy from 'tippy.js';

// Подключение стилей с src/scss/libs
import "../../scss/libs/tippy.scss";
// Подключение стилей с node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
frontModules.tippy = tippy('[data-tippy-content]', {

});