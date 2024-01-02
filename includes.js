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

function includes(tree, value) {
  const queue = [tree];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.value === value) return true;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return false;
}

function includesRec(tree, value) {
  const includesRec = (tree) => tree.value === value 
  || (tree.left && includesRec(tree.left))
  || (tree.right && includes(tree.right));
  return tree && includesRec(tree); 
}

console.log(includesRec(root, 4));
console.log(includesRec(root, 8));

