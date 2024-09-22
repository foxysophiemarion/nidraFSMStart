/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например frontFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

//============================================================================================================================================================================================================================================
// React ========================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================
// import Index from './react/Index.jsx';
//============================================================================================================================================================================================================================================

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as frontFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
frontFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
// frontFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
//frontFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
//frontFunctions.menuInit();
/* Форматирование чисел */
// import './libs/wNumb.min.js';

/*
Модуль работы со спойлерами

Сниппет (HTML): spollers
*/
//frontFunctions.spollers();

/*
Модуль "Табы"

Сниппет (HTML): tabs
*/
//frontFunctions.tabs();

/*
Модуль "Показать еще"

Сниппет (HTML): showmore
*/
//frontFunctions.showMore();

/*
Модуль "До/После"

Сниппет (HTML): ba
*/
//import './libs/beforeafter.js';

/*
Модуль "Ripple Effect"

Сниппет (HTML):
*/
frontFunctions.rippleEffect();

/*
Модуль "Кастомный курсор"

Сниппет (HTML):
*/
// frontFunctions.customCursor(true);

/*
Модуль "Бегущая строка" (Alpha)

Сниппет (HTML):
*/
//import './libs/keywords.js'

/*
Модуль "Попапы"

Сниппет (HTML): pl, pop
*/
//import './libs/popup.js'

/*
Модуль анимации (параллакс) объектов во время движения мыши

*/
//import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа c формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as frontForms from "./files/forms/forms.js";

/* Работа с полями формы */


frontForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});

/* Отправка формы */

//frontForms.formSubmit();

/* Модуль формы"количество" */

//frontForms.formQuantity();

/* Модуль звездного рейтинга */
//frontForms.formRating();

/* Модуль работы с select. */
//import './libs/select.js'

/* Модуль работы с календарем */
//import './files/forms/datepicker.js'

/* (В работе) модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле  js/files/forms/inputmask.js

Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
//import "./files/forms/inputmask.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле  js/files/forms/range.js

Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
//import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для HTML тега)
*/
//import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js

Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
//import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара

Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML):
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок

// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
//import './files/scroll/lazyload.js';

// Наблюдатель объектов с атрибутом data-watch

// Сниппет(HTML):
//import './libs/watcher.js'

// / / Модуль по экранной прокрутке

// Сниппет(HTML):
//import './libs/fullpage.js'

// Модуль параллакса

// Сниппет(HTML):
//import './libs/parallax.js'

// Функции работы скроллом
//import * as frontScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице

//frontScroll.pageNavigation();

// Функциональность добавления классов в хеддер при прокрутке

//frontScroll.headerScroll();

// Модуль анимация цифрового счетчика

// Сниппет(HTML):
//frontScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*

Сниппет(HTML):
*/
//import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Масонри сетка ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*

Сниппет(HTML):
*/
//import "./files/isotope.js";

// ========================================================================================================================================================================================================================================================
// Другие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптивный */

//import "./libs/dynamic_adapt.js";

// ========================================================================================================================================================================================================================================================
// Другое ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */
//import "./files/script.js";
//============================================================================================================================================================================================================================================
