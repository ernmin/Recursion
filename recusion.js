fibs = function(n) {
    let num = 0;
    let next_num = 1;
    let arr = [num, next_num];
    for (let i = 0; i < n - 2; i++){
        let fol_num = num + next_num;
        arr.push(fol_num);
        num = next_num;
        next_num = fol_num;
    }
    return arr;
}

const n = process.argv[2];
console.log(fibs(n))