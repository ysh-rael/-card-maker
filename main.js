export function createElement(elem, myClass= false) {
    const newElem = Document.createElement(elem)
    if(myClass) myClass.forEach( _class => elem.classList(_class) );
    return newElem
}
