/* Маски для полей (в работе)*/
// Подключение функционала
// Подключение списка активных модулей
import { frontModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

document.addEventListener('DOMContentLoaded', function () {
	const inputMasks = document.querySelectorAll('input');
	if (inputMasks.length) {
		frontModules.inputmask = Inputmask().mask(inputMasks);
	}

	// Применение маски для конкретного поля ввода телефона
	const phoneInputOne = document.querySelectorAll('.form-mask-input');
	if (phoneInputOne) {
		Inputmask("+7 (999) 999-99-99").mask(phoneInputOne);
	}
});


