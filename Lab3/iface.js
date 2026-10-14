const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};


const result = [];
for(i of Object.keys(iface)){
    result.push([i, iface[i].length]);
}

console.log(JSON.stringify(result));
console.log(result);
