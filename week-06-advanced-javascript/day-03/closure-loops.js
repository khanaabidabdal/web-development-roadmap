export function createCounterWithVar(){
    const counters=[];

    for(var i=0;i<3;i++){
        counters.push(()=>i);
    }

    return counters;
}

export function createCounterWithLet(){
    const counters=[];

    for (let i=0;i<3;i++){
        counters.push(()=>i);
    }
    return counters;
}