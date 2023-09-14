function traverseDom(node) {
    let queue = [node];
    while (queue.length) {
        let node = queue.shift();
        console.log(node.tagName+"-"+node.className)

        if (!node.children.length) continue;

        while(node.children) {
            Array.from(node.children).forEach((node)=>{
                queue.push(node);
            })
        }
    }

}
