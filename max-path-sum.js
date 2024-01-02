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

function maxPathSumsRec(tree) {
  if (!tree) return 0;
  if (!tree.left && !tree.right) return tree.value;
  return tree.value + Math.max(maxPathSumsRec(tree.left), maxPathSumsRec(tree.right));
}

function maxPathSums(tree) {
  const stack = [tree];
  let maxSum = Number.NEGATIVE_INFINITY;
  while (stack.length > 0) {
    const node = stack.pop();
    maxSum = Math.max(maxSum,);
    stack.push(node);
  }
}

console.log(maxPathSumsRec(root));

