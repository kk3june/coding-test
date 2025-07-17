const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const tree = {};

for (let i = 1; i <= n; i++) {
    const [parent, left, right] = input[i].split(' ');
    tree[parent] = [left === '.' ? null : left, right === '.' ? null : right];
}

function preorder(node) {
    if (node === null) return '';
    return node + preorder(tree[node][0]) + preorder(tree[node][1]);
}

function inorder(node) {
    if (node === null) return '';
    return inorder(tree[node][0]) + node + inorder(tree[node][1]);
}

function postorder(node) {
    if (node === null) return '';
    return postorder(tree[node][0]) + postorder(tree[node][1]) + node;
}

console.log(preorder('A'));
console.log(inorder('A'));
console.log(postorder('A'));