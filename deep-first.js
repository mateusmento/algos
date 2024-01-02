const node = (value, [left, right] = []) => ({value, left, right});

const root = node(1,[
  node(2, [
    node(4),
    node(5)
  ]),
  node(3, [
    node(6)
  ])
]);

function deepFirst(tree) {
  const stack = [tree];

  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

function deepFirstRec(tree) {
  console.log(tree.value);
  if (tree.left) deepFirstRec(tree.left);
  if (tree.right) deepFirstRec(tree.right);
}

deepFirstRec(root);

