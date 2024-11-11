// Подключение функционала "Чертоги Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { fsmModules } from "./modules.js";

// Подключение с node_modules
import tippy from 'tippy.js';

// Подключение стилей с src/scss/libs
import "../../scss/libs/tippy.scss";
// Подключение стилей с node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
fsmModules.tippy = tippy('[data-tippy-content]', {

});