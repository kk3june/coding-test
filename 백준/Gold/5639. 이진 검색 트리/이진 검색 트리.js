const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)

function postorder(preorder) {
    if (preorder.length === 0) return [];
    
    const root = preorder[0];
    
    let rightStart = preorder.length;
    for (let i = 1; i < preorder.length; i++) {
        if (preorder[i] > root) {
            rightStart = i;
            break;
        }
    }
    
    const leftSubtree = preorder.slice(1, rightStart);
    const rightSubtree = preorder.slice(rightStart);
    
    const leftResult = postorder(leftSubtree);
    const rightResult = postorder(rightSubtree);
    
    return [...leftResult, ...rightResult, root];
}

console.log(postorder(input).join('\n'));