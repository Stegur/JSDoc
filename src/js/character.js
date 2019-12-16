/**
 * Компонент создает нового персонажа
 *
 * @param {string} name - Имя нового персонажа
 * @param {string} type - Тип нового персонажа
 *
 * @throws Генерирует прерывание и возвращает ошибку если имя меньше 2-х или больше 10-ти символов
 */
export default function Character(name, type) {
  if (!(name.length < 2) && !(name.length > 10)) {
    this.name = name;
  } else {
    throw new Error('Имя первонажа не должно быть меньше 2-х или больше 10-ти  символов');
  }
  this.type = type;
}
