/**
 * Объект массива используется для хранения нескольких значений в одной переменной:
 * 
 * 
 */

let cars = ['Saab', 'Volvo', 'BMV']

document.getElementById('demo').innerHTML = cars

// свойства массивов
/**
 *
 * constructor
 * length
 * prototype
 *
 */


// методы массивов
/** 
 * 
1. concat()	Объединяет два или более массивов и возвращает копию объединенных массивов
Этот метод не изменяет существующие массивы, но возвращает новый массив, содержащий значения объединенных массивов.

2. copyWithin()	Копирует элементы массива в другую позицию массива, перезаписывая существующие значения
Этот метод никогда не добавит больше элементов в массив.
Примечание: этот метод перезаписывает исходный массив.

3. entries()	Возвращает объект итерации массива пары ключ / значение
4. every()	Проверяет, проходит ли каждый элемент в массиве тест
5. fill()	Заполните элементы в массиве статическим значением
6. filter()	Создает новый массив с каждым элементом массива, прошедшим проверку
7. find()	Возвращает значение первого элемента массива, прошедшего проверку
8. findIndex()	Возвращает индекс первого элемента в массиве, прошедшего проверку
9. forEach()	Вызывает функцию для каждого элемента массива
10. from()	Создает массив из объекта
11. includes()	Проверить, содержит ли массив указанный элемент
12. indexOf()	Поиск элемента в массиве и возврат его позиции
13. isArray()	Проверяет, является ли объект массивом
14. join()	Объединяет все элементы массива в строку
15. keys()	Возвращает объект итерации массива, содержащий ключи исходного массива
16. lastIndexOf()	Ищет в массиве элемент, начиная с конца, и возвращает его позицию
17. map()	Создает новый массив с результатом вызова функции для каждого элемента массива
18. pop()	Удаляет последний элемент массива и возвращает этот элемент
19. push()	Добавляет новые элементы в конец массива и возвращает новую длину
20. reduce()	Уменьшить значения массива до одного значения(слева направо)
21. reduceRight()	Уменьшить значения массива до одного значения(справа налево)
22. reverse()	Меняет порядок элементов в массиве на обратный
23. shift()	Удаляет первый элемент массива и возвращает этот элемент
24. slice()	Выбирает часть массива и возвращает новый массив
25. some()	Проверяет, прошел ли какой - либо из элементов в массиве тест
26. sort()	Сортирует элементы массива
27. splice()	Добавляет / удаляет элементы из массива
28. toString()	Преобразует массив в строку и возвращает результат
29. unshift()	Добавляет новые элементы в начало массива и возвращает новую длину
30. valueOf()	Возвращает примитивное значение массива
 * 
 */