function createElem(elem = 'div', myClass= false) {
    const newElem = document.createElement(elem)
    if(myClass) myClass.forEach( _class => newElem.classList.add(_class) );
    return newElem
}
export {
    createElem
}

/* 
crio elemento com suas classes.
verifico se tem filhos
se tiver, faço um foreach em cada criando um novofilho(elemento) com suas respectivas classes.
verifico se os filhos tem filhos.
se tiver, repito o processo até que se satisfaça minha estrutura.
adiciono cada filho ao seu respectiivo pai.
adiciono o neto ao pai e o pai ao avô e no fim, adiciono o primeiro elemento criado ao sei pai que nserá a raiz da árvore.
*/