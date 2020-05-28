export default function destruct(character) {
  let result = [];
  const { special = 'спецатаки отсутствуют' } = character;
  if (character.hasOwnProperty(special)) {
    special.forEach((item) => {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = item;
      const attack = [id, name, icon, description];
      result.push(attack);
    });
  } else {
    result = special;
  }
  if (result === []) {
    result = 'спецатаки отсутствуют';
  }
  return result;
}
