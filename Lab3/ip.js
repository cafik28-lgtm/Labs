function ipToInt(ip = '127.0.0.1'){
    return ip
        .trim()
        .split('.')
        .map(str => Number(str))
        .reduce((acc, num) => (acc << 8) + num, 0);
}

console.log(ipToInt());
console.log(ipToInt('10.0.0.1'));
console.log(ipToInt('192.168.1.10'));