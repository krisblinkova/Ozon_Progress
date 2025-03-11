
import '../style.css';
document.addEventListener('DOMContentLoaded', () => {


  const circle = document.querySelector('.progress-ring__circle');
  const input = document.getElementById('rangeInput');
  const visibilitySwitch = document.getElementById('switch');
  const animationSwitch = document.getElementById('animate');
  const percentDisplay = document.querySelector('.percent');
  const progressRing = document.querySelector('.progress-ring');
  
  
  if (!circle || !input || !visibilitySwitch || !animationSwitch || !percentDisplay || !progressRing) {
      console.error('Элемент не найден');
      return;
  }

class Progress {
    constructor(circle, input, visibilitySwitch, animationSwitch, percentDisplay, progressRing) {
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
        this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
        // Устанавливаем смещение окружности
        this.circle.style.strokeDashoffset = this.circumference;

        // Идентификатор для анимационного интервала
        this.animationInterval = null;
        this.currentRotation = 0;

        this.init();
      }

      init() {
        // Загрузка сохранённого прогресса
        this.loadProgress();

        // Привязываем обработчики событий
        this.input.addEventListener('input', () => {
          this.setProgress(this.input.value);
          this.saveProgress();
          this.updatePercentDisplay(this.input.value);
        });

        this.visibilitySwitch.addEventListener('change', () => this.toggleVisibility());
        this.animationSwitch.addEventListener('change', () => this.toggleAnimation());
      }

      setProgress(percent) {
        const value = Number(percent);
        const offset = this.circumference - (value / 100 * this.circumference);
        this.circle.style.strokeDashoffset = offset;
      }

      updatePercentDisplay(percent) {
        this.percentDisplay.textContent = percent + '%';
      }

      saveProgress() {
        localStorage.setItem('progress', this.input.value);
      }

      loadProgress() {
        const progress = localStorage.getItem('progress');
        if (progress !== null) {
          this.input.value = progress;
          this.setProgress(progress);
          this.updatePercentDisplay(progress);
        }
      }

      toggleVisibility() {
        if (this.visibilitySwitch.checked) {
          this.progressRing.style.opacity = "0";
        } else {
          this.progressRing.style.opacity = "1";
          //Загружаем сохранённое значение
          this.loadProgress();
        }
      }

      animateProgress() {
        // Останавливаем предыдущую анимацию, если она запущена
      if (this.animationInterval) {
        clearInterval(this.animationInterval);
      }
      // Сбрасываем текущий поворот
      this.currentRotation = 0;
      this.animationInterval = setInterval(() => {
        this.currentRotation = (this.currentRotation + 2) % 360;
        // Комбинируем базовый сдвиг -90° (чтобы начинать с 12 часов) и текущий поворот
        this.circle.style.transform = `rotate(-90deg) rotate(${this.currentRotation}deg)`;
      }, 10);
    }

      toggleAnimation() {
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
    }
    // Инициализация компонента Progress
    const progressComponent = new Progress(circle, input, visibilitySwitch, animationSwitch, percentDisplay, progressRing);

  });


    