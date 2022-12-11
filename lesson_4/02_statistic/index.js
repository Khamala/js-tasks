// Необхідно зібрати статистику по всіх вузлах усередині елемента переданого у параметрі root і повернути її як об'єкт
// Статистика повинна містити:
// - кількість текстових вузлів
// - кількість елементів кожного класу
// - кількість елементів кожного тегу
// Для роботи з класами рекомендується використовувати classList

function collectDOMStat(root) {
  const stat = {
    tags: {},
    classes: {},
    texts: 0,
  };

  return stat;
}

console.log(collectDOMStat(document.querySelector('.container')))