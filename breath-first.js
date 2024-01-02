const node = (value, [left, right] = []) => ({ value, left, right });

const tree = node(1, [
  node(2, [
    node(4),
    node(5)
  ]),
  node(3, [
    node(6)
  ])
]);

function breathFirst(tree) {
  const queue = [tree];
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

breathFirst(tree);

