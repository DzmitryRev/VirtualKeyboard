export default class VirtualKeyboard {
  Capsed = false;

  keyElements = Array.from(document.querySelectorAll('.key')); // All keys array

  get isCapsed() {
    return this.Capsed;
  }

  set isCapsed(value) {
    this.Capsed = value;
    this.caps(value);
  }

  constructor() {
    this.keys = [
      [
        this.CreateKey('Backquote', 'ё', 'Ё', 'Ё', '`', '`', '~'),
        this.CreateKey('Digit1', '1', '1', '!', '1', '1', '!'),
        this.CreateKey('Digit2', '2', '2', '"', '2', '2', '@'),
        this.CreateKey('Digit3', '3', '3', '№', '3', '3', '#'),
        this.CreateKey('Digit4', '4', '4', ';', '4', '4', '$'),
        this.CreateKey('Digit5', '5', '5', '%', '5', '5', '%'),
        this.CreateKey('Digit6', '6', '6', ':', '6', '6', '^'),
        this.CreateKey('Digit7', '7', '7', '?', '7', '7', '&'),
        this.CreateKey('Digit8', '8', '8', '*', '8', '8', '*'),
        this.CreateKey('Digit9', '9', '9', '(', '9', '9', '('),
        this.CreateKey('Digit0', '0', '0', ')', '0', '0', ')'),
        this.CreateKey('Minus', '-', '-', '_', '-', '-', '_'),
        this.CreateKey('Equal', '=', '=', '+', '=', '=', '+'),
        this.CreateKey(
          'Backspace',
          'Backspace',
          'Backspace',
          'Backspace',
          'Backspace',
          'Backspace',
          'Backspace',
        ),
      ],
      [
        this.CreateKey('Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'),
        this.CreateKey('KeyQ', 'й', 'Й', 'Й', 'q', 'Q', 'Q'),
        this.CreateKey('KeyW', 'ц', 'Ц', 'Ц', 'w', 'W', 'W'),
        this.CreateKey('KeyE', 'у', 'У', 'У', 'e', 'E', 'E'),
        this.CreateKey('KeyR', 'к', 'К', 'К', 'r', 'R', 'R'),
        this.CreateKey('KeyT', 'е', 'Е', 'Е', 't', 'T', 'T'),
        this.CreateKey('KeyY', 'н', 'Н', 'Н', 'y', 'Y', 'Y'),
        this.CreateKey('KeyU', 'г', 'Г', 'Г', 'u', 'U', 'U'),
        this.CreateKey('KeyI', 'ш', 'Ш', 'Ш', 'i', 'I', 'I'),
        this.CreateKey('KeyO', 'щ', 'Щ', 'Щ', 'o', 'O', 'O'),
        this.CreateKey('KeyP', 'з', 'З', 'З', 'p', 'P', 'P'),
        this.CreateKey('BracketLeft', 'х', 'Х', 'Х', '[', '[', '{'),
        this.CreateKey('BracketRight', 'ъ', 'Ъ', 'Ъ', ']', ']', '}'),
        this.CreateKey('Backslash', '\\', '\\', '/', '\\', '\\', '/'),
        this.CreateKey('Delete', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del'),
      ],
      [
        this.CreateKey(
          'CapsLock',
          'CapsLock',
          'CapsLock',
          'CapsLock',
          'CapsLock',
          'CapsLock',
          'CapsLock',
        ),
        this.CreateKey('KeyA', 'ф', 'Ф', 'Ф', 'a', 'A', 'A'),
        this.CreateKey('KeyS', 'ы', 'Ы', 'Ы', 's', 'S', 'S'),
        this.CreateKey('KeyD', 'в', 'В', 'В', 'd', 'D', 'D'),
        this.CreateKey('KeyF', 'а', 'А', 'А', 'f', 'F', 'F'),
        this.CreateKey('KeyG', 'п', 'П', 'П', 'g', 'G', 'G'),
        this.CreateKey('KeyH', 'р', 'Р', 'Р', 'h', 'H', 'H'),
        this.CreateKey('KeyJ', 'о', 'О', 'О', 'j', 'J', 'J'),
        this.CreateKey('KeyK', 'л', 'Л', 'Л', 'k', 'K', 'K'),
        this.CreateKey('KeyL', 'д', 'Д', 'Д', 'l', 'L', 'L'),
        this.CreateKey('Semicolon', 'ж', 'Ж', 'Ж', ';', ';', ':'),
        this.CreateKey('Quote', 'э', 'Э', 'Э', "'", "'", '"'),
        this.CreateKey('Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter'),
      ],
      [
        this.CreateKey('ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'),
        this.CreateKey('KeyZ', 'я', 'Я', 'Я', 'z', 'Z', 'Z'),
        this.CreateKey('KeyX', 'ч', 'Ч', 'Ч', 'x', 'X', 'X'),
        this.CreateKey('KeyC', 'с', 'С', 'С', 'c', 'C', 'C'),
        this.CreateKey('KeyV', 'м', 'М', 'М', 'v', 'V', 'V'),
        this.CreateKey('KeyB', 'и', 'И', 'И', 'b', 'B', 'B'),
        this.CreateKey('KeyN', 'т', 'Т', 'Т', 'n', 'N', 'N'),
        this.CreateKey('KeyM', 'ь', 'Ь', 'Ь', 'm', 'M', 'M'),
        this.CreateKey('Comma', 'б', 'Б', 'Б', ',', ',', '<'),
        this.CreateKey('Period', 'ю', 'Ю', 'Ю', '.', '.', '>'),
        this.CreateKey('Slash', '.', '.', ',', '/', '/', '?'),
        this.CreateKey('ArrowUp', '▲', '▲', '▲', '▲', '▲', '▲'),
        this.CreateKey('ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'),
      ],
      [
        this.CreateKey('ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
        this.CreateKey('MetaLeft', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win'),
        this.CreateKey('AltLeft', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'),
        this.CreateKey('Space', '', '', '', '', '', ''),
        this.CreateKey('AltRight', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'),
        this.CreateKey('ArrowLeft', '◄', '◄', '◄', '◄', '◄', '◄'),
        this.CreateKey('ArrowDown', '▼', '▼', '▼', '▼', '▼', '▼'),
        this.CreateKey('ArrowRight', '►', '►', '►', '►', '►', '►'),
        this.CreateKey('ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
      ],
    ];
  }

  CreateKey(code, standardRu, capsRu, shiftRu, standardEn, capsEn, shiftEn) {
    const result = {
      code,
      rus: {
        standard: standardRu,
        caps: capsRu,
        shift: shiftRu,
      },
      eng: {
        standard: standardEn,
        caps: capsEn,
        shift: shiftEn,
      },
    };
    return result;
  }

  changeLanguage() {
    this._keyElements.forEach((item) => {
      Array.from(item.children).forEach((langSpan) => {
        if (!langSpan.classList.contains('hidden')) {
          langSpan.classList.add('hidden');
        } else {
          langSpan.classList.remove('hidden');
        }
      });
    });
  }

  caps(value) {
    this.keyElements.forEach((item) => {
      Array.from(item.children).forEach((langSpan) => {
        Array.from(langSpan.children).forEach((span) => {
          if (value) {
            if (span.classList.contains('caps')) {
              span.classList.remove('hidden');
            } else {
              span.classList.add('hidden');
            }
          } else if (span.classList.contains('standard')) {
            span.classList.remove('hidden');
          } else {
            span.classList.add('hidden');
          }
        });
      });
    });
  }

  shift(value) {
    document.querySelectorAll('.key');
    Array.from(document.querySelectorAll('.key')).forEach((item) => {
      Array.from(item.children).forEach((langSpan) => {
        Array.from(langSpan.children).forEach((span) => {
          if (value) {
            if (span.classList.contains('shift')) {
              span.classList.remove('hidden');
            } else {
              span.classList.add('hidden');
            }
          } else if (this.isCapsed === false) {
            if (span.classList.contains('standard')) {
              span.classList.remove('hidden');
            } else {
              span.classList.add('hidden');
            }
          } else if (span.classList.contains('caps')) {
            span.classList.remove('hidden');
          } else {
            span.classList.add('hidden');
          }
        });
      });
    });
  }

  initEvents() {
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.code !== 'CapsLock') {
        document.querySelector(`.${e.code}`).classList.add('active');
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.shift(true);
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.code === 'CapsLock') {
        this.isCapsed = !this.isCapsed;
        document.querySelector('.CapsLock').classList.toggle('active');
      } else {
        document.querySelector(`.${e.code}`).classList.remove('active');
      }
      if (
        ((e.code === 'AltLeft' || e.code === 'AltRight') && e.ctrlKey === true)
            || ((e.code === 'ControlLeft' || e.code === 'ControlRight') && e.altKey === true)
      ) {
        this.changeLanguage();
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.shift(false);
      }
    });
  }

  init() {
    const container = document.createElement('div');

    this.keys.forEach((keyboardRow) => {
      const row = document.createElement('div');
      row.className = 'row';
      keyboardRow.forEach((keyboardKey) => {
        const key = document.createElement('div');
        key.classList.add('key', keyboardKey.code);
        key.innerHTML = `
                <span class="eng">
                    <span class="standard">${keyboardKey.eng.standard}</span>
                    <span class="shift hidden">${keyboardKey.eng.shift}</span>
                    <span class="caps hidden">${keyboardKey.eng.caps}</span>
                </span>
                <span class="rus hidden">
                    <span class="standard">${keyboardKey.rus.standard}</span>
                    <span class="shift hidden">${keyboardKey.rus.shift}</span>
                    <span class="caps hidden">${keyboardKey.rus.caps}</span>
                </span>
            `;
        row.insertAdjacentElement('beforeend', key);
      });
      container.insertAdjacentElement('beforeend', row);
    });
    document.body.insertAdjacentElement('afterbegin', container);
    this.initEvents();
    this.caps();
  }
}
