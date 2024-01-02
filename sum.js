const node = (value, [left, right] = []) => ({value, left, right});

const root = node(1, [
  node(2, [
    node(4),
    node(5)
  ]),
  node(3, [
    node(6)
  ])
]);

function sum(tree) {
  if (!tree) return 0;
  return tree.value + sum(tree.left) + sum(tree.right);
}

console.log(sum(root));
