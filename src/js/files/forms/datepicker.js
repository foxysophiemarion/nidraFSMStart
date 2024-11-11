/* Календарь */

// Подключение функционала "Чертоги Фрилансера"
// подключение списка активных модулей
import { fsmModules } from "../modules.js";

// Подключение модуля
import datepicker from 'js-datepicker';

if (document.querySelector('[data-datepicker]')) {
	const picker = datepicker('[data-datepicker]', {
		customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
		customMonths: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"],
		overlayButton: 'Применить',
		overlayPlaceholder: 'Год (4 цифры)',
		startDay: 1,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		},
		onSelect: function (input, instance, date) {

		}
	});
	fsmModules.datepicker = picker;
}
