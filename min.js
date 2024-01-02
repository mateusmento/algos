const node = (value, [left, right] = []) => ({value, left, right});

const root = node(12, [
  node(20,[
    node(4),
    node(5)
  ]),
  node(3, [
    node(6)
  ])
]);

function min(tree) {
  if (!tree) return NaN;
  const stack = [tree];
  let min = Number.POSITIVE_INFINITY;
  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.value);
    min = Math.min(min, node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return min;
}

function minRec(tree) {
  if (!tree) return Number.POSITIVE_INFINITY;
  const minLeft = min(tree.left);
  const minRight = min(tree.right);
  return Math.min(tree.value, minLeft, minRight);
}

console.log(min(root));
