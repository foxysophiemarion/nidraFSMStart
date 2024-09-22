// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { frontModules } from "./modules.js";

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();


//========================================================================================================================================================

//========================================================================================================================================================


document.addEventListener('DOMContentLoaded', function () {
	const spollerMenus = document.querySelectorAll('.spoller-menu');

	spollerMenus.forEach(function (menu) {
		const spollerTitle = menu.querySelector('.spoller-menu__title');
		const spollerBody = menu.querySelector('.spoller-menu__body');

		spollerTitle.addEventListener('mouseenter', function () {
			spollerBody.classList.add('show');
		});

		spollerTitle.addEventListener('mouseleave', function () {
			spollerBody.classList.remove('show');
		});

		spollerBody.addEventListener('mouseenter', function () {
			spollerBody.classList.add('show');
		});

		spollerBody.addEventListener('mouseleave', function () {
			spollerBody.classList.remove('show');
		});
	});
});

//========================================================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
	const e = document.getElementById("searchInput");
	const t = document.getElementById("suggestions");
	const form = document.getElementById("searchForm"); // Добавляем форму
	const i = [
		{ name: "Крематоры", id: "cremators" },
		{ name: "Инсинераторы", id: "incinerators" },
		{ name: "Автоматизированная загрузка отходов", id: "automated-loading" },
		{ name: "Колосниковые решетки", id: "grates" },
		{ name: "Генераторы", id: "generators" },
		{ name: "Емкость для ГСМ", id: "fuel-tanks" }
	];

	e.addEventListener("focus", function () {
		if (e.value) {
			t.style.display = "block";
		}
	});

	e.addEventListener("blur", function () {
		setTimeout(() => {
			t.style.display = "none";
		}, 200);
	});

	e.addEventListener("input", function () {
		const inputValue = e.value.toLowerCase();
		t.innerHTML = "";
		if (inputValue) {
			i.filter(item => item.name.toLowerCase().includes(inputValue)).forEach(item => {
				const suggestion = document.createElement("div");
				suggestion.classList.add("search-header__suggestion");
				suggestion.textContent = item.name;
				suggestion.addEventListener("click", function () {
					e.value = item.name;
					t.innerHTML = "";
					t.style.display = "none";
				});
				t.appendChild(suggestion);
			});
			t.style.display = "block";
		} else {
			t.style.display = "none";
		}
	});

	form.addEventListener("submit", function (event) { // Добавляем обработчик события submit
		event.preventDefault(); // Предотвращаем отправку формы
		const inputValue = e.value.trim();
		if (!inputValue) {
			e.placeholder = "Введите поисковый запрос.";
			return;
		}

		const validInput = /^[a-zA-Zа-яА-Я\s]*$/.test(inputValue);
		if (!validInput) {
			e.value = "";
			e.placeholder = "Используйте только буквы.";
			return;
		}

		const matchedItem = i.find(item => item.name.toLowerCase() === inputValue.toLowerCase());
		if (matchedItem) {
			window.location.href = `katalog?search=${encodeURIComponent(matchedItem.name)}`;
		} else {
			e.value = "";
			e.placeholder = "Подходящих товаров не найдено.";
		}
	});

	const n = new URLSearchParams(window.location.search).get("search");
	if (n) {
		const e = {
			крематоры: "cremators",
			инсинераторы: "incinerators",
			"автоматизированная загрузка отходов": "automated-loading",
			"колосниковые решетки": "grates",
			генераторы: "generators",
			"емкость для гсм": "fuel-tanks"
		}[n.toLowerCase()];
		if (e) {
			const t = document.getElementById(e);
			if (t) {
				setTimeout(() => {
					t.scrollIntoView({ behavior: "smooth" });
				}, 500);
			}
		}
	}
});
//========================================================================================================================================================




document.addEventListener('DOMContentLoaded', function () {
	const wrapper = document.querySelector('.wrapper');
	const main = document.querySelector('main');

	if (main && (main.classList.contains('docs') || main.classList.contains('leasing'))) {
		wrapper.classList.add('background-image');
	}
});
document.addEventListener('DOMContentLoaded', function () {
	const wrapper = document.querySelector('.wrapper');
	const main = document.querySelector('main');

	if (main && (main.classList.contains('product'))) {
		wrapper.classList.add('background-product');
	}
});

//========================================================================================================================================================
document.addEventListener('DOMContentLoaded', function () {
	const addressLink = document.getElementById('addressLink');
	const mapContainer = document.getElementById('mapContainer');

	if (addressLink && mapContainer) {
		addressLink.addEventListener('click', function (e) {
			e.preventDefault();
			mapContainer.scrollIntoView({ behavior: 'smooth' });
		});
	}
});



