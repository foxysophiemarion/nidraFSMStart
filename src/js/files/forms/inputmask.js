/* Маски для полей (в работе)*/
// Подключение функционала "Чертоги Фрилансера"
// Подключение списка активных модулей
import { fsmModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

document.addEventListener('DOMContentLoaded', function () {
	const inputMasks = document.querySelectorAll('input');
	if (inputMasks.length) {
		fsmModules.inputmask = Inputmask().mask(inputMasks);
	}

	// Применение маски для конкретного поля ввода телефона
	const phoneInputOne = document.querySelectorAll('.form-mask-input');
	if (phoneInputOne) {
		Inputmask("+7 (999) 999-99-99").mask(phoneInputOne);
	}
});


