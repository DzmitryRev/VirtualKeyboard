function CreateKey(
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
        CreateKey('Backquote', 'ё', 'Ё', 'Ё', 'ё', '`', '`', '~', '~'),
        CreateKey('Digit1', '1', '1', '!', '!', '1', '1', '!', '!'),
        CreateKey('Digit2', '2', '2', '"', '"', '2', '2', '@', '@'),
        CreateKey('Digit3', '3', '3', '№', '№', '3', '3', '#', '#'),
        CreateKey('Digit4', '4', '4', ';', ';', '4', '4', '$', '$'),
        CreateKey('Digit5', '5', '5', '%', '%', '5', '5', '%', '%'),
        CreateKey('Digit6', '6', '6', ':', ':', '6', '6', '^', '^'),
        CreateKey('Digit7', '7', '7', '?', '?', '7', '7', '&', '&'),
        CreateKey('Digit8', '8', '8', '*', '*', '8', '8', '*', '*'),
        CreateKey('Digit9', '9', '9', '(', '(', '9', '9', '(', '('),
        CreateKey('Digit0', '0', '0', ')', ')', '0', '0', ')', ')'),
        CreateKey('Minus', '-', '-', '_', '_', '-', '-', '_', '_'),
        CreateKey('Equal', '=', '=', '+', '+', '=', '=', '+', '+'),
        CreateKey(
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
        CreateKey('Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'),
        CreateKey('KeyQ', 'й', 'Й', 'Й', 'й', 'q', 'Q', 'Q', 'q'),
        CreateKey('KeyW', 'ц', 'Ц', 'Ц', 'ц', 'w', 'W', 'W', 'w'),
        CreateKey('KeyE', 'у', 'У', 'У', 'у', 'e', 'E', 'E', 'e'),
        CreateKey('KeyR', 'к', 'К', 'К', 'к', 'r', 'R', 'R', 'r'),
        CreateKey('KeyT', 'е', 'Е', 'Е', 'е', 't', 'T', 'T', 't'),
        CreateKey('KeyY', 'н', 'Н', 'Н', 'н', 'y', 'Y', 'Y', 'y'),
        CreateKey('KeyU', 'г', 'Г', 'Г', 'г', 'u', 'U', 'U', 'u'),
        CreateKey('KeyI', 'ш', 'Ш', 'Ш', 'ш', 'i', 'I', 'I', 'i'),
        CreateKey('KeyO', 'щ', 'Щ', 'Щ', 'щ', 'o', 'O', 'O', 'o'),
        CreateKey('KeyP', 'з', 'З', 'З', 'з', 'p', 'P', 'P', 'p'),
        CreateKey('BracketLeft', 'х', 'Х', 'Х', 'х', '[', '[', '{', '}'),
        CreateKey('BracketRight', 'ъ', 'Ъ', 'Ъ', 'ъ', ']', ']', '}', '}'),
        CreateKey('Backslash', '\\', '\\', '/', '/', '\\', '\\', '/', '|'),
        CreateKey('Delete', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del'),
      ],
      [
        CreateKey(
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
        CreateKey('KeyA', 'ф', 'Ф', 'Ф', 'ф', 'a', 'A', 'A', 'a'),
        CreateKey('KeyS', 'ы', 'Ы', 'Ы', 'ы', 's', 'S', 'S', 's'),
        CreateKey('KeyD', 'в', 'В', 'В', 'в', 'd', 'D', 'D', 'd'),
        CreateKey('KeyF', 'а', 'А', 'А', 'а', 'f', 'F', 'F', 'f'),
        CreateKey('KeyG', 'п', 'П', 'П', 'п', 'g', 'G', 'G', 'g'),
        CreateKey('KeyH', 'р', 'Р', 'Р', 'р', 'h', 'H', 'H', 'h'),
        CreateKey('KeyJ', 'о', 'О', 'О', 'о', 'j', 'J', 'J', 'j'),
        CreateKey('KeyK', 'л', 'Л', 'Л', 'л', 'k', 'K', 'K', 'k'),
        CreateKey('KeyL', 'д', 'Д', 'Д', 'д', 'l', 'L', 'L', 'l'),
        CreateKey('Semicolon', 'ж', 'Ж', 'Ж', 'ж', ';', ';', ':', ':'),
        CreateKey('Quote', 'э', 'Э', 'Э', 'э', "'", "'", '"', '"'),
        CreateKey('Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter'),
      ],
      [
        CreateKey('ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'),
        CreateKey('KeyZ', 'я', 'Я', 'Я', 'я', 'z', 'Z', 'Z', 'z'),
        CreateKey('KeyX', 'ч', 'Ч', 'Ч', 'ч', 'x', 'X', 'X', 'x'),
        CreateKey('KeyC', 'с', 'С', 'С', 'с', 'c', 'C', 'C', 'c'),
        CreateKey('KeyV', 'м', 'М', 'М', 'м', 'v', 'V', 'V', 'v'),
        CreateKey('KeyB', 'и', 'И', 'И', 'и', 'b', 'B', 'B', 'b'),
        CreateKey('KeyN', 'т', 'Т', 'Т', 'т', 'n', 'N', 'N', 'n'),
        CreateKey('KeyM', 'ь', 'Ь', 'Ь', 'ь', 'm', 'M', 'M', 'm'),
        CreateKey('Comma', 'б', 'Б', 'Б', 'б', ',', ',', '\u003c', '<'),
        CreateKey('Period', 'ю', 'Ю', 'Ю', 'ю', '.', '.', '>', '>'),
        CreateKey('Slash', '.', '.', ',', ',', '/', '/', '?', '?'),
        CreateKey('ArrowUp', '▲', '▲', '▲', '▲', '▲', '▲', '▲', '▲'),
        CreateKey('ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'),
      ],
      [
        CreateKey('ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
        CreateKey('MetaLeft', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win'),
        CreateKey('AltLeft', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'),
        CreateKey('Space', '', '', '', '', '', '', '', ''),
        CreateKey('AltRight', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'),
        CreateKey('ArrowLeft', '◄', '◄', '◄', '◄', '◄', '◄', '◄', '◄'),
        CreateKey('ArrowDown', '▼', '▼', '▼', '▼', '▼', '▼', '▼', '▼'),
        CreateKey('ArrowRight', '►', '►', '►', '►', '►', '►', '►', '►'),
        CreateKey('ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
      ],
    ];
  }

  toggleHidden(value, classOne, classTwo) {
    Array.from(this.keyElementsNodeList).forEach((item) => {
      Array.from(item.children).forEach((langSpan) => {
        Array.from(langSpan.children).forEach((span) => {
          if (value) {
            if (span.classList.contains(classOne)) {
              span.classList.remove('hidden');
            } else {
              span.classList.add('hidden');
            }
          } else if (!value) {
            if (span.classList.contains(classTwo)) {
              span.classList.remove('hidden');
            } else {
              span.classList.add('hidden');
            }
          }
        });
      });
    });
  }

  changeLanguage() {
    Array.from(this.keyElementsNodeList).forEach((item) => {
      Array.from(item.children).forEach((langSpan) => {
        if (langSpan.classList.contains(this.selectedLanguage)) {
          langSpan.classList.add('hidden');
        } else {
          langSpan.classList.remove('hidden');
        }
      });
    });
    if (this.selectedLanguage === 'eng') {
      this.selectedLanguage = 'rus';
      localStorage.setItem('language', 'rus');
    } else if (this.selectedLanguage === 'rus') {
      this.selectedLanguage = 'eng';
      localStorage.setItem('language', 'eng');
    }
  }

  caps(value) {
    if (value) {
      document.querySelector('.CapsLock').classList.add('active');
    } else {
      document.querySelector('.CapsLock').classList.remove('active');
    }
    this.toggleHidden(value, 'caps', 'standard');
  }

  shift(value) {
    this.toggleHidden(value, this.isCapsed ? 'capsShift' : 'shift', this.isCapsed ? 'caps' : 'standard');
  }

  initEvents() {
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      this.textareaElement.focus();
      if (e.code === 'CapsLock') {
        this.isCapsed = !this.isCapsed;
        return;
      }

      const elem = document.querySelector(`.${e.code}`);
      if (!elem) return;
      elem.classList.add('active');

      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.shift(true);
        return;
      }

      let keyValue = '';
      const caret = this.textareaElement.selectionStart;
      const oldValue = this.textareaElement.value.split('');

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

        this.textareaElement.selectionStart = caret - 1;
        this.textareaElement.selectionEnd = caret - 1;
        return;
      }
      // ON DELETE
      if (e.code === 'Delete') {
        document.getElementById('textarea').value = document.getElementById('textarea').value
          .split('')
          .filter((item, index) => index !== caret)
          .join('');

        this.textareaElement.selectionStart = caret;
        this.textareaElement.selectionEnd = caret;
        return;
      }
      // ON TAB
      if (e.code === 'Tab') {
        keyValue = '    ';
        oldValue.splice(caret, 0, keyValue);
        document.getElementById('textarea').value = oldValue.join('');
        this.textareaElement.selectionStart = caret + 4;
        this.textareaElement.selectionEnd = caret + 4;
        return;
      }
      // ON SPACE
      if (e.code === 'Space') {
        keyValue = ' ';
        oldValue.splice(caret, 0, keyValue);
        this.textareaElement.value = oldValue.join('');
        this.textareaElement.selectionStart = caret + 1;
        this.textareaElement.selectionEnd = caret + 1;
        return;
      }
      // ON ENTER
      if (e.code === 'Enter') {
        keyValue = '\n';
        oldValue.splice(caret, 0, keyValue);
        this.textareaElement.value = oldValue.join('');
        this.textareaElement.selectionStart = caret + 1;
        this.textareaElement.selectionEnd = caret + 1;
        return;
      }
      //   ON CHAR/SYMBOL
      Array.from(document.querySelector(`.${e.code}`)?.children).forEach((lang) => {
        if (!lang.classList.contains('hidden')) {
          Array.from(lang.children).forEach((span) => {
            if (!span.classList.contains('hidden')) {
              keyValue = span.innerText;
            }
          });
        }
      });

      oldValue.splice(caret, 0, keyValue);
      this.textareaElement.value = oldValue.join('');
      this.textareaElement.selectionStart = caret + 1;
      this.textareaElement.selectionEnd = caret + 1;
    });
    window.addEventListener('keyup', (e) => {
      if (e.code !== 'CapsLock') {
        document.querySelector(`.${e.code}`)?.classList.remove('active');
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
    // MOUSE EVENTS
    Array.from(this.keyElementsNodeList).forEach((key) => {
      key.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.textareaElement.focus();
        Array.from(key.children).forEach((langSpan) => {
          if (!langSpan.classList.contains('hidden')) {
            const code = key.className.split(' ')[1];

            const [element] = Array.from(langSpan.children).filter((item) => !item.classList.contains('hidden'));

            if (code === 'CapsLock') {
              this.isCapsed = !this.isCapsed;
              return;
            }
            document.querySelector(`.${code}`).classList.add('active');

            if (code === 'ShiftLeft' || code === 'ShiftRight') {
              this.shift(true);
              return;
            }

            let keyValue = '';
            const caret = this.textareaElement.selectionStart;

            if (code === 'CapsLock'
                  || code === 'ShiftLeft'
                  || code === 'ShiftRight'
                  || code === 'AltLeft'
                  || code === 'AltRight'
                  || code === 'ControlLeft'
                  || code === 'ControlRight'
                  || code === 'MetaLeft') {
              return;
            }
            if (code === 'Backspace') {
              if (caret === 0) return;

              this.textareaElement.value = this.textareaElement.value
                .split('')
                .filter((item, index) => index !== caret - 1)
                .join('');

              this.textareaElement.selectionStart = caret - 1;
              this.textareaElement.selectionEnd = caret - 1;
              return;
            }
            if (code === 'Delete') {
              this.textareaElement.value = this.textareaElement.value
                .split('')
                .filter((item, index) => index !== caret)
                .join('');

              this.textareaElement.selectionStart = caret;
              this.textareaElement.selectionEnd = caret;
              return;
            }
            if (code === 'Tab') {
              keyValue = '    ';
              const oldValue = this.textareaElement.value.split('');
              oldValue.splice(caret, 0, keyValue);
              this.textareaElement.value = oldValue.join('');
              this.textareaElement.selectionStart = caret + 4;
              this.textareaElement.selectionEnd = caret + 4;
              return;
            }
            if (code === 'Space') {
              keyValue = ' ';
              const oldValue = this.textareaElement.value.split('');
              oldValue.splice(caret, 0, keyValue);
              this.textareaElement.value = oldValue.join('');
              this.textareaElement.selectionStart = caret + 1;
              this.textareaElement.selectionEnd = caret + 1;
              return;
            }
            if (code === 'Enter') {
              keyValue = '\n';
              const oldValue = this.textareaElement.value.split('');
              oldValue.splice(caret, 0, keyValue);
              this.textareaElement.value = oldValue.join('');
              this.textareaElement.selectionStart = caret + 1;
              this.textareaElement.selectionEnd = caret + 1;
              return;
            }
            keyValue = element.innerText;
            const oldValue = this.textareaElement.value.split('');
            oldValue.splice(caret, 0, keyValue);
            this.textareaElement.value = oldValue.join('');
            this.textareaElement.selectionStart = caret + 1;
            this.textareaElement.selectionEnd = caret + 1;
          }
        });
      });
      document.addEventListener('mouseup', () => {
        Array.from(key.children).forEach(() => {
          const code = key.className.split(' ')[1];
          if (code === 'ShiftLeft' || code === 'ShiftRight') {
            this.shift(false);
          }
          if (code !== 'CapsLock') {
            document.querySelector(`.${code}`).classList.remove('active');
          }
        });
      });
    });
  }

  init() {
    // CHECK LOCAL STORAGE
    if (localStorage.getItem('language')) {
      this.selectedLanguage = localStorage.getItem('language');
    } else {
      this.selectedLanguage = 'eng';
    }
    // DEFINE ELEMENTS
    const wrapper = document.createElement('div');
    const textarea = document.createElement('textarea');
    textarea?.classList.add('textarea');
    textarea.id = 'textarea';
    const title = document.createElement('p');
    title?.classList.add('title');
    title.innerText = 'RSS Виртуальная клавиатура';
    wrapper.insertAdjacentElement('beforeend', title);
    const description = document.createElement('p');
    description?.classList.add('description');
    description.innerText = 'Клавиатура создана в операционной системе Windows';
    const language = document.createElement('p');
    language?.classList.add('language');
    language.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';
    const container = document.createElement('div');
    container?.classList.add('keyboard');
    // DEFINE KEYS
    this.keys.forEach((keyboardRow) => {
      const row = document.createElement('div');
      row?.classList.add('row');
      keyboardRow.forEach((keyboardKey) => {
        const key = document.createElement('div');
        key?.classList.add('key', keyboardKey.code);
        key.innerHTML = `
                <span class="eng hidden">
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
        Array.from(key.children).forEach((item) => {
          if (item.classList.contains(this.selectedLanguage)) {
            item.classList.remove('hidden');
            // localStorage.setItem('language', this.selectedLanguage);
          }
        });
        row.insertAdjacentElement('beforeend', key);
      });
      container.insertAdjacentElement('beforeend', row);
    });
    // INSERT ELEMENTS
    wrapper.insertAdjacentElement('beforeend', textarea);
    wrapper.insertAdjacentElement('beforeend', container);
    wrapper.insertAdjacentElement('beforeend', description);
    wrapper.insertAdjacentElement('beforeend', language);
    document.body.insertAdjacentElement('afterbegin', wrapper);
    // SET ELEMENTS
    this.keyElementsNodeList = document.getElementsByClassName('key');
    this.textareaElement = textarea;
    // INIT EVENTS
    this.initEvents();
  }
}
