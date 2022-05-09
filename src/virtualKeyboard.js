export default class VirtualKeyboard {
  // CapsLock flag with getter and setter
  isCapsLockActivated = false;

  get isCapsed() {
    return this.isCapsLockActivated;
  }

  set isCapsed(value) {
    this.isCapsLockActivated = value;
    this.caps(value);
  }

  // Language

  selectedLanguage = 'eng';

  // Node list of elements with class name equal "key"
  keyElementsNodeList = null;

  // Textarea element

  textareaElement = null;

  // [ keyboard row: [ key object: { key properties }]]
  key = [];

  constructor() {
    this.keys = [
      [
        this.CreateKey('Backquote', 'ё', 'Ё', 'Ё', 'ё', '`', '`', '~', '~'),
        this.CreateKey('Digit1', '1', '1', '!', '!', '1', '1', '!', '!'),
        this.CreateKey('Digit2', '2', '2', '"', '"', '2', '2', '@', '@'),
        this.CreateKey('Digit3', '3', '3', '№', '№', '3', '3', '#', '#'),
        this.CreateKey('Digit4', '4', '4', ';', ';', '4', '4', '$', '$'),
        this.CreateKey('Digit5', '5', '5', '%', '%', '5', '5', '%', '%'),
        this.CreateKey('Digit6', '6', '6', ':', ':', '6', '6', '^', '^'),
        this.CreateKey('Digit7', '7', '7', '?', '?', '7', '7', '&', '&'),
        this.CreateKey('Digit8', '8', '8', '*', '*', '8', '8', '*', '*'),
        this.CreateKey('Digit9', '9', '9', '(', '(', '9', '9', '(', '('),
        this.CreateKey('Digit0', '0', '0', ')', ')', '0', '0', ')', ')'),
        this.CreateKey('Minus', '-', '-', '_', '_', '-', '-', '_', '_'),
        this.CreateKey('Equal', '=', '=', '+', '+', '=', '=', '+', '+'),
        this.CreateKey(
          'Backspace',
          'Backspace',
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
        this.CreateKey('Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'),
        this.CreateKey('KeyQ', 'й', 'Й', 'Й', 'й', 'q', 'Q', 'Q', 'q'),
        this.CreateKey('KeyW', 'ц', 'Ц', 'Ц', 'ц', 'w', 'W', 'W', 'w'),
        this.CreateKey('KeyE', 'у', 'У', 'У', 'у', 'e', 'E', 'E', 'e'),
        this.CreateKey('KeyR', 'к', 'К', 'К', 'к', 'r', 'R', 'R', 'r'),
        this.CreateKey('KeyT', 'е', 'Е', 'Е', 'е', 't', 'T', 'T', 't'),
        this.CreateKey('KeyY', 'н', 'Н', 'Н', 'н', 'y', 'Y', 'Y', 'y'),
        this.CreateKey('KeyU', 'г', 'Г', 'Г', 'г', 'u', 'U', 'U', 'u'),
        this.CreateKey('KeyI', 'ш', 'Ш', 'Ш', 'ш', 'i', 'I', 'I', 'i'),
        this.CreateKey('KeyO', 'щ', 'Щ', 'Щ', 'щ', 'o', 'O', 'O', 'o'),
        this.CreateKey('KeyP', 'з', 'З', 'З', 'з', 'p', 'P', 'P', 'p'),
        this.CreateKey('BracketLeft', 'х', 'Х', 'Х', 'х', '[', '[', '{', '}'),
        this.CreateKey('BracketRight', 'ъ', 'Ъ', 'Ъ', 'ъ', ']', ']', '}', '}'),
        this.CreateKey('Backslash', '\\', '\\', '/', '/', '\\', '\\', '/', '|'),
        this.CreateKey('Delete', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del'),
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
          'CapsLock',
          'CapsLock',
        ),
        this.CreateKey('KeyA', 'ф', 'Ф', 'Ф', 'ф', 'a', 'A', 'A', 'a'),
        this.CreateKey('KeyS', 'ы', 'Ы', 'Ы', 'ы', 's', 'S', 'S', 's'),
        this.CreateKey('KeyD', 'в', 'В', 'В', 'в', 'd', 'D', 'D', 'd'),
        this.CreateKey('KeyF', 'а', 'А', 'А', 'а', 'f', 'F', 'F', 'f'),
        this.CreateKey('KeyG', 'п', 'П', 'П', 'п', 'g', 'G', 'G', 'g'),
        this.CreateKey('KeyH', 'р', 'Р', 'Р', 'р', 'h', 'H', 'H', 'h'),
        this.CreateKey('KeyJ', 'о', 'О', 'О', 'о', 'j', 'J', 'J', 'j'),
        this.CreateKey('KeyK', 'л', 'Л', 'Л', 'л', 'k', 'K', 'K', 'k'),
        this.CreateKey('KeyL', 'д', 'Д', 'Д', 'д', 'l', 'L', 'L', 'l'),
        this.CreateKey('Semicolon', 'ж', 'Ж', 'Ж', 'ж', ';', ';', ':', ':'),
        this.CreateKey('Quote', 'э', 'Э', 'Э', 'э', "'", "'", '"', '"'),
        this.CreateKey('Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter'),
      ],
      [
        this.CreateKey('ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'),
        this.CreateKey('KeyZ', 'я', 'Я', 'Я', 'я', 'z', 'Z', 'Z', 'z'),
        this.CreateKey('KeyX', 'ч', 'Ч', 'Ч', 'ч', 'x', 'X', 'X', 'x'),
        this.CreateKey('KeyC', 'с', 'С', 'С', 'с', 'c', 'C', 'C', 'c'),
        this.CreateKey('KeyV', 'м', 'М', 'М', 'м', 'v', 'V', 'V', 'v'),
        this.CreateKey('KeyB', 'и', 'И', 'И', 'и', 'b', 'B', 'B', 'b'),
        this.CreateKey('KeyN', 'т', 'Т', 'Т', 'т', 'n', 'N', 'N', 'n'),
        this.CreateKey('KeyM', 'ь', 'Ь', 'Ь', 'ь', 'm', 'M', 'M', 'm'),
        this.CreateKey('Comma', 'б', 'Б', 'Б', 'б', ',', ',', '\u003c', '<'),
        this.CreateKey('Period', 'ю', 'Ю', 'Ю', 'ю', '.', '.', '>', '>'),
        this.CreateKey('Slash', '.', '.', ',', ',', '/', '/', '?', '?'),
        this.CreateKey('ArrowUp', '▲', '▲', '▲', '▲', '▲', '▲', '▲', '▲'),
        this.CreateKey('ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'),
      ],
      [
        this.CreateKey('ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
        this.CreateKey('MetaLeft', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win'),
        this.CreateKey('AltLeft', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'),
        this.CreateKey('Space', '', '', '', '', '', '', '', ''),
        this.CreateKey('AltRight', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'),
        this.CreateKey('ArrowLeft', '◄', '◄', '◄', '◄', '◄', '◄', '◄', '◄'),
        this.CreateKey('ArrowDown', '▼', '▼', '▼', '▼', '▼', '▼', '▼', '▼'),
        this.CreateKey('ArrowRight', '►', '►', '►', '►', '►', '►', '►', '►'),
        this.CreateKey('ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
      ],
    ];
  }

  CreateKey(
    code,
    standardRu,
    capsRu,
    shiftRu,
    capsShiftRu,
    standardEn,
    capsEn,
    shiftEn,
    capsShiftEn,
  ) {
    const result = {
      code,
      rus: {
        standard: standardRu,
        caps: capsRu,
        shift: shiftRu,
        capsShift: capsShiftRu,
      },
      eng: {
        standard: standardEn,
        caps: capsEn,
        shift: shiftEn,
        capsShift: capsShiftEn,
      },
    };
    return result;
  }

  changeLanguage() {
    Array.from(this.keyElementsNodeList).forEach((item) => {
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
    Array.from(this.keyElementsNodeList).forEach((item) => {
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
    Array.from(this.keyElementsNodeList).forEach((item) => {
      Array.from(item.children).forEach((langSpan) => {
        Array.from(langSpan.children).forEach((span) => {
          if (value) {
            if (span.classList.contains(this.isCapsed ? 'capsShift' : 'shift')) {
              span.classList.remove('hidden');
            } else {
              span.classList.add('hidden');
            }
          } else if (!value) {
            if (span.classList.contains(this.isCapsed ? 'caps' : 'standard')) {
              span.classList.remove('hidden');
            } else {
              span.classList.add('hidden');
            }
          }
        });
      });
    });
  }

  initEvents() {
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      //   if (e.code === 'CapsLock') {
      //     this.isCapsed = !this.isCapsed;
      //     document.querySelector('.CapsLock').classList.toggle('active');
      //   } else {
      //     document.querySelector(`.${e.code}`).classList.remove('active');
      //   }
      if (e.code !== 'CapsLock') {
        document.querySelector(`.${e.code}`).classList.add('active');
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.shift(true);
      }
      const el = document.getElementById('textarea');
      let val = '';
      const caret = el.selectionStart;
      // ON SYSTEM KEY (NO PRINT)
      if (e.code === 'CapsLock'
          || e.code === 'ShiftLeft'
          || e.code === 'ShiftRight'
          || e.code === 'AltLeft'
          || e.code === 'AltRight'
          || e.code === 'ControlLeft'
          || e.code === 'ControlRight'
          || e.code === 'MetaLeft') {
        return;
      }
      // ON BACKSPACE
      if (e.code === 'Backspace') {
        if (caret === 0) return;

        document.getElementById('textarea').value = document.getElementById('textarea').value
          .split('')
          .filter((item, index) => index !== caret - 1)
          .join('');

        el.selectionStart = caret - 1;
        el.selectionEnd = caret - 1;
        return;
      }
      // ON DELETE
      if (e.code === 'Delete') {
        document.getElementById('textarea').value = document.getElementById('textarea').value
          .split('')
          .filter((item, index) => index !== caret)
          .join('');

        el.selectionStart = caret;
        el.selectionEnd = caret;
        return;
      }
      // ON TAB
      if (e.code === 'Tab') {
        val = '    ';
        const a = this.textareaElement.value.split('');
        a.splice(caret, 0, val);
        document.getElementById('textarea').value = a.join('');
        el.selectionStart = caret + 4;
        el.selectionEnd = caret + 4;
        return;
      }
      // ON SPACE
      if (e.code === 'Space') {
        val = ' ';
        const a = this.textareaElement.value.split('');
        a.splice(caret, 0, val);
        document.getElementById('textarea').value = a.join('');
        el.selectionStart = caret + 1;
        el.selectionEnd = caret + 1;
        return;
      }
      // ON ENTER
      if (e.code === 'Enter') {
        val = '\n';
        const a = this.textareaElement.value.split('');
        a.splice(caret, 0, val);
        document.getElementById('textarea').value = a.join('');
        el.selectionStart = caret + 1;
        el.selectionEnd = caret + 1;
        return;
      }
      //   ON CHAR/SYMBOL
      Array.from(document.querySelector(`.${e.code}`).children).forEach((lang) => {
        if (!lang.classList.contains('hidden')) {
          Array.from(lang.children).forEach((span) => {
            if (!span.classList.contains('hidden')) {
              val = span.innerText;
            }
          });
        }
      });

      const a = this.textareaElement.value.split('');
      a.splice(caret, 0, val);
      document.getElementById('textarea').value = a.join('');
      el.selectionStart = caret + 1;
      el.selectionEnd = caret + 1;
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
    const wrapper = document.createElement('div');
    const container = document.createElement('div');

    container.classList.add('keyboard');
    this.keys.forEach((keyboardRow) => {
      const row = document.createElement('div');
      row.classList.add('row');
      keyboardRow.forEach((keyboardKey) => {
        const key = document.createElement('div');
        key.classList.add('key', keyboardKey.code);
        key.innerHTML = `
                <span class="eng">
                    <span class="standard">${keyboardKey.eng.standard}</span>
                    <span class="shift hidden">${keyboardKey.eng.shift}</span>
                    <span class="caps hidden">${keyboardKey.eng.caps}</span>
                    <span class="capsShift hidden">${keyboardKey.eng.capsShift}</span>
                </span>
                <span class="rus hidden">
                    <span class="standard">${keyboardKey.rus.standard}</span>
                    <span class="shift hidden">${keyboardKey.rus.shift}</span>
                    <span class="caps hidden">${keyboardKey.rus.caps}</span>
                    <span class="capsShift hidden">${keyboardKey.rus.capsShift}</span>
                </span>
            `;
        row.insertAdjacentElement('beforeend', key);
      });
      container.insertAdjacentElement('beforeend', row);
    });
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.id = 'textarea';
    wrapper.insertAdjacentElement('beforeend', textarea);
    wrapper.insertAdjacentElement('beforeend', container);
    document.body.insertAdjacentElement('afterbegin', wrapper);

    this.keyElementsNodeList = document.getElementsByClassName('key');
    this.textareaElement = textarea;
    this.initEvents();
  }
}
