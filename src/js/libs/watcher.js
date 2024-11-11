// Подключение функционала "Чертоги фрилансера"
import { isMobile, uniqArray, FLS } from "../files/functions.js";
import { fsmModules } from "../files/modules.js";

// Наблюдатель объектов [всевидящее око]
// Data-watch - можно писать значения для применения кастомного кода
// Data-watch-root-родительский элемент внутри которого наблюдать за объектом
// data-watch-margin-отступ
// data-watch-threshold-процент показа объекта для срабатывания
// data-watch-once - смотреть только один раз
// _watcher-view - класс который добавляется при появлении объекта

class ScrollWatcher {
	constructor(props) {
		let defaultConfig = {
			logging: true,
		}
		this.config = Object.assign(defaultConfig, props);
		this.observer;
		!document.documentElement.classList.contains('watcher') ? this.scrollWatcherRun() : null;
	}
	// Обновляем конструктор
	scrollWatcherUpdate() {
		this.scrollWatcherRun();
	}
	// Запускаем конструктор
	scrollWatcherRun() {
		document.documentElement.classList.add('watcher');
		this.scrollWatcherConstructor(document.querySelectorAll('[data-watch]'));
	}
	// Конструктор наблюдателей
	scrollWatcherConstructor(items) {
		if (items.length) {
			this.scrollWatcherLogging(`Проснулся, слежу за объектами (${items.length})...`);
			// Уникализируем параметры
			let uniqParams = uniqArray(Array.from(items).map(function (item) {
				// Вычисление автоматического Threshold
				if (item.dataset.watch === 'navigator' && !item.dataset.watchThreshold) {
					let valueOfThreshold;
					if (item.clientHeight > 2) {
						valueOfThreshold =
							window.innerHeight / 2 / (item.clientHeight - 1);
						if (valueOfThreshold > 1) {
							valueOfThreshold = 1;
						}
					} else {
						valueOfThreshold = 1;
					}
					item.setAttribute(
						'data-watch-threshold',
						valueOfThreshold.toFixed(2)
					);
				}
				return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : '0px'}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
			}));
			// Получаем группы объектов с одинаковыми параметрами,
			// создаем настройки, инициализируем наблюдатель
			uniqParams.forEach(uniqParam => {
				let uniqParamArray = uniqParam.split('|');
				let paramsWatch = {
					root: uniqParamArray[0],
					margin: uniqParamArray[1],
					threshold: uniqParamArray[2]
				}
				let groupItems = Array.from(items).filter(function (item) {
					let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
					let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : '0px';
					let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
					if (
						String(watchRoot) === paramsWatch.root &&
						String(watchMargin) === paramsWatch.margin &&
						String(watchThreshold) === paramsWatch.threshold
					) {
						return item;
					}
				});

				let configWatcher = this.getScrollWatcherConfig(paramsWatch);

				// Инициализация наблюдателя со своими настройками
				this.scrollWatcherInit(groupItems, configWatcher);
			});
		} else {
			this.scrollWatcherLogging("Сплю, нет объектов для слежки. ZzzZZzz");
		}
	}
	// Функция создания настроек
	getScrollWatcherConfig(paramsWatch) {
		//Создаем настройки
		let configWatcher = {}
		// Отец, в котором ведется наблюдение
		if (document.querySelector(paramsWatch.root)) {
			configWatcher.root = document.querySelector(paramsWatch.root);
		} else if (paramsWatch.root !== 'null') {
			this.scrollWatcherLogging(`Эмм... родительского объекта ${paramsWatch.root} нет на странице`);
		}
		// Отступ срабатывания
		configWatcher.rootMargin = paramsWatch.margin;
		if (paramsWatch.margin.indexOf('px') < 0 && paramsWatch.margin.indexOf('%') < 0) {
			this.scrollWatcherLogging(`йой, настройки data-watch-margin нужно сдавать в PX или %`);
			return
		}
		// Точки срабатывания
		if (paramsWatch.threshold === 'prx') {
			// Режим паралакса
			paramsWatch.threshold = [];
			for (let i = 0; i <= 1.0; i += 0.005) {
				paramsWatch.threshold.push(i);
			}
		} else {
			paramsWatch.threshold = paramsWatch.threshold.split(',');
		}
		configWatcher.threshold = paramsWatch.threshold;

		return configWatcher;
	}
	// Функция создания нового наблюдателя с вашими настройками
	scrollWatcherCreate(configWatcher) {
		this.observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				this.scrollWatcherCallback(entry, observer);
			});
		}, configWatcher);
	}
	// Функция инициализации наблюдателя с его настройками
	scrollWatcherInit(items, configWatcher) {
		// Создание нового наблюдателя с вашими настройками
		this.scrollWatcherCreate(configWatcher);
		// Передача элементов наблюдателю
		items.forEach(item => this.observer.observe(item));
	}
	// Функция обработки базовых действий точек срабатывания
	scrollWatcherIntersecting(entry, targetElement) {
		if (entry.isIntersecting) {
			// Видим объект
			// Добавляем класс
			!targetElement.classList.contains('_watcher-view') ? targetElement.classList.add('_watcher-view') : null;
			this.scrollWatcherLogging(`Я вижу ${targetElement.classList}, добавил класс _watcher-view`);
		} else {
			// Не видим объект
			// Удаляем  класс
			targetElement.classList.contains('_watcher-view') ? targetElement.classList.remove('_watcher-view') : null;
			this.scrollWatcherLogging(`Я не вижу ${targetElement.classList}, убрал класс _watcher-view`);
		}
	}
	// Функция отключения слежения за объектом
	scrollWatcherOff(targetElement, observer) {
		observer.unobserve(targetElement);
		this.scrollWatcherLogging(`Я перестал следить за ${targetElement.classList}`);
	}
	// Функция вывода в консоль
	scrollWatcherLogging(message) {
		this.config.logging ? FLS(`[Наблюдатель]: ${message}`) : null;
	}
	// Функция обработки наблюдения
	scrollWatcherCallback(entry, observer) {
		const targetElement = entry.target;
		// Обработка базовых действий точек срабатывания
		this.scrollWatcherIntersecting(entry, targetElement);
		// Если есть атрибут data-watch-once убираем слежение
		targetElement.hasAttribute('data-watch-once') && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
		// Создаем свое событие обратной связи
		document.dispatchEvent(new CustomEvent("watcherCallback", {
			detail: {
				entry: entry
			}
		}));

		/*
		// Выбираем нужные объекты
		if (targetElement.dataset.watch === 'some value') {
			// пишем уникальную спецификацию
		}
		if (entry.isIntersecting) {
			//Видим обьект
		} else {
			//Не видим обьєкт
		}
		*/
	}
}
// Запускаем и добавляем в объект модулей
fsmModules.watcher = new ScrollWatcher({});
