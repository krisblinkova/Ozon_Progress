/******/ (() => { // webpackBootstrap
/*!*********************************************!*\
  !*** ./project-root/components/progress.js ***!
  \*********************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
document.addEventListener('DOMContentLoaded', function () {
  var circle = document.querySelector('.progress-ring__circle');
  var input = document.getElementById('rangeInput');
  var visibilitySwitch = document.getElementById('switch');
  var animationSwitch = document.getElementById('animate');
  var percentDisplay = document.querySelector('.percent');
  var progressRing = document.querySelector('.progress-ring');
  if (!circle || !input || !visibilitySwitch || !animationSwitch || !percentDisplay || !progressRing) {
    console.error('Элемент не найден');
    return;
  }
  var Progress = /*#__PURE__*/function () {
    function Progress(circle, input, visibilitySwitch, animationSwitch, percentDisplay, progressRing) {
      _classCallCheck(this, Progress);
      this.circle = circle;
      this.input = input;
      this.visibilitySwitch = visibilitySwitch;
      this.animationSwitch = animationSwitch;
      this.percentDisplay = percentDisplay;
      this.progressRing = progressRing;

      // Получаем радиус круга
      this.radius = this.circle.r.baseVal.value;
      // Вычисляем длину окружности
      this.circumference = 2 * Math.PI * this.radius;
      // Устанавливаем длину окружности в strokeDasharray
      this.circle.style.strokeDasharray = "".concat(this.circumference, " ").concat(this.circumference);
      // Устанавливаем смещение окружности
      this.circle.style.strokeDashoffset = this.circumference;

      // Идентификатор для анимационного интервала
      this.animationInterval = null;
      this.currentRotation = 0;
      this.init();
    }
    return _createClass(Progress, [{
      key: "init",
      value: function init() {
        var _this = this;
        // Загрузка сохранённого прогресса
        this.loadProgress();

        // Привязываем обработчики событий
        this.input.addEventListener('input', function () {
          _this.setProgress(_this.input.value);
          _this.saveProgress();
          _this.updatePercentDisplay(_this.input.value);
        });
        this.visibilitySwitch.addEventListener('change', function () {
          return _this.toggleVisibility();
        });
        this.animationSwitch.addEventListener('change', function () {
          return _this.toggleAnimation();
        });
      }
    }, {
      key: "setProgress",
      value: function setProgress(percent) {
        var value = Number(percent);
        var offset = this.circumference - value / 100 * this.circumference;
        this.circle.style.strokeDashoffset = offset;
      }
    }, {
      key: "updatePercentDisplay",
      value: function updatePercentDisplay(percent) {
        this.percentDisplay.textContent = percent + '%';
      }
    }, {
      key: "saveProgress",
      value: function saveProgress() {
        localStorage.setItem('progress', this.input.value);
      }
    }, {
      key: "loadProgress",
      value: function loadProgress() {
        var progress = localStorage.getItem('progress');
        if (progress !== null) {
          this.input.value = progress;
          this.setProgress(progress);
          this.updatePercentDisplay(progress);
        }
      }
    }, {
      key: "toggleVisibility",
      value: function toggleVisibility() {
        if (this.visibilitySwitch.checked) {
          this.progressRing.style.opacity = "0";
        } else {
          this.progressRing.style.opacity = "1";
          //Загружаем сохранённое значение
          this.loadProgress();
        }
      }
    }, {
      key: "animateProgress",
      value: function animateProgress() {
        var _this2 = this;
        // Останавливаем предыдущую анимацию, если она запущена
        if (this.animationInterval) {
          clearInterval(this.animationInterval);
        }
        // Сбрасываем текущий поворот
        this.currentRotation = 0;
        this.animationInterval = setInterval(function () {
          _this2.currentRotation = (_this2.currentRotation + 2) % 360;
          // Комбинируем базовый сдвиг -90° (чтобы начинать с 12 часов) и текущий поворот
          _this2.circle.style.transform = "rotate(-90deg) rotate(".concat(_this2.currentRotation, "deg)");
        }, 10);
      }
    }, {
      key: "toggleAnimation",
      value: function toggleAnimation() {
        if (this.animationSwitch.checked) {
          this.animateProgress();
        } else {
          if (this.animationInterval) {
            clearInterval(this.animationInterval);
            this.animationInterval = null;
            // В режиме Normal возвращаем базовый поворот (-90°)
            this.circle.style.transform = 'rotate(-90deg)';
          }
        }
      }
    }]);
  }(); // Инициализация компонента Progress
  var progressComponent = new Progress(circle, input, visibilitySwitch, animationSwitch, percentDisplay, progressRing);
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map