var elementos = [];
var topo = -1;
const max = 10;

function push (num){
    if (top < max) {
        top = topo + 1;
        elementos[topo] = num;
    } else {
        console.log("pilha cheia");
    }
}


function estaVazia (){
    return topo == -1;
}

function pop () {
    if (topo != -1) {
        let num = elementos[topo];
        topo = topo -1;
        return num;
    } else {
        console.log("pilha vazia");
    }
}

// utilizando funcoes//

push(10);
push(20);
push(30);

console.log (elementos);
console.log(pop());
console.log(pop());
console.log(pop());