// Необхідно зібрати статистику по всіх вузлах усередині елемента переданого у параметрі root і повернути її як об'єкт
// Статистика повинна містити:
// - кількість текстових вузлів
// - кількість елементів кожного класу
// - кількість елементів кожного тегу
// Для роботи з класами рекомендується використовувати classList
// nodeType

function collectDOMStat(root) {
  const stat = {
    tags: {},
    classes: {},
    texts: 0,
  };

  const nodes = root.childNodes;
  console.log(nodes);
  for (const node of nodes) {
    if (node.nodeType === 3) {
      stat.texts += 1;
    } else if (node.nodeType === 1) {
      if (!stat.tags[node.tagName]) {
        stat.tags[node.tagName] = 1;
      } else stat.tags[node.tagName] += 1;
      for (const classEl of node.classList) {
        if (!stat.classes[classEl]) {
          stat.classes[classEl] = 1;
        } else stat.classes[classEl] += 1;
      }
    }
  }
  return stat;
}

console.log(collectDOMStat(document.querySelector(".container")));
