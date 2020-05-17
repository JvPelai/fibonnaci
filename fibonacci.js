const fibonacci = function(x) {
    x = Number(x);
    let seq = [];
    let q = 0;
    if(x <= 0){
        let ops = "OOPS";
        console.log(ops);
        return ops;
    }
    else{
        for(let i = 0; i < x; i++){
            if (i < 2){
                let b = 1
                seq.push(b);
                console.log(i);
                console.log(seq);
            }
            else{
                 q = (seq[i-1])+(seq[i-2]);
                seq.push(q);
                console.log(i);
                console.log(seq);
            
            }   
        }return seq[x-1]

    }


}

module.exports = fibonacci
