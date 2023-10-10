const categories = document.querySelector('#categories');

console.log(`Number of categories: ${categories.children.length}`);

Array.from(categories.children).forEach(({ children: [h2, ul] }) => {
  console.log(`Category: ${h2.textContent}`);
  console.log(`Elements: ${ul.children.length}`);
});
