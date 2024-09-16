import { Algorithm } from '../types.js';

// Алгоритм, который принимает массив объектов и возвращает массив имён пользователей
const processUsers: Algorithm<
  { id: string; name: string; email: string }[],
  string[]
> = (users) => {
  return users.map((user) => user.name);
};

// Добавляем метаданные
processUsers.info = {
  name: 'Процессинг пользователей',
  description: 'Обрабатывает массив пользователей и возвращает их имена.',
  timeComplexity: 'O(n)', // Временная сложность: проход по массиву
  spaceComplexity: 'O(n)', // Пространственная сложность: новый массив с именами
  inputType: 'object[]', // Тип входных данных
  outputType: 'string[]' // Тип выходных данных
};

export default processUsers;
