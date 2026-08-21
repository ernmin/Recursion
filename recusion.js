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

fibsRec = function(n) {
    if (n === 0){
        return [];
    }

    else if (n === 1) {
        return [0];
    }

    else if (n === 2){
        return [0, 1];
    }

    const sequence = fibsRec(n - 1);
    sequence.push(sequence.at(-2) + sequence.at(-1));

    return sequence;
}

const n = process.argv[2];
console.log(fibsRec(n))