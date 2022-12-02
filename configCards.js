const layout = {
    func: createElem,
    scope: {
        element: 'div',
        myClass: ['card__scope']
    },
    front: {
        element: 'div',
        myClass: ['card__front'],
        myChildren: [
            {
                element: 'div',
                myClass: ['card__titleAndDescription', 'card__title'],
            },
            {
                element: 'div',
                myClass: ['card__titleAndDescription', 'card__description'],
            },
            {
                element: 'div',
                myClass: ['card__boxImg'],
                myChildren: [
                    {
                        element: 'img',
                        myClass: ['card__img', 'card__print'],
                    },
                ]
            },
            {
                element: 'div',
                myClass: ['card__boxBttns'],
                myChildren: [
                    {
                        element: 'div',
                        myClass: ['card__bttn', 'Card__bttn--turn'],
                    },
                    {
                        element: 'div',
                        myClass: ['card__bttn', 'Card__bttn--runRepo'],
                    },
                    {
                        element: 'div',
                        myClass: ['card__bttn', 'Card__bttn--runProject'],
                    }
                ]
            }
        ]
    },
    back: {
        element: 'div',
        myClass: ['card__back'],
        myChildren: [
            {
                element: 'div',
                myClass: ['card__titleAndDescription', 'card__title'],
            },
            {
                element: 'div',
                myClass: ['card__boxTags']
            },
            {
                element: 'div',
                myClass: ['card__boxImg'],
                myChildren: [
                    {
                        element: 'img',
                        myClass: ['card__img', 'card__graphic'],
                    },
                ]
            },
            {
                element: 'div',
                myClass: ['card__boxBttns'],
                myChildren: [
                    {
                        element: 'div',
                        myClass: ['card__bttn', 'Card__bttn--turn'],
                    },
                    {
                        element: 'div',
                        myClass: ['card__bttn', 'hiddenThis'],
                    },
                    {
                        element: 'div',
                        myClass: ['card__bttn', 'hiddenThis'],
                    }
                ]
            }
        ]
    }
}

function createElem(elem = 'div', myClass = false) {
    const newElem = document.createElement(elem)
    if (myClass) myClass.forEach(_class => newElem.classList.add(_class));
    return newElem
}

function createCard(_layout, _father = 'body', object) {
    const createElem = _layout.func
    const father = document.querySelector(_father)
    const scope = _layout.scope
    const front = _layout.front
    const back = _layout.back
    const CreateNewChild = child => createElem(child.element, child.myClass)
    const scopeCard = createElem(scope.element, scope.myClass)

    function createLayoutCard(sideCard) {
        const newElement = createElem(sideCard.element, sideCard.myClass)
        if (sideCard.myChildren) sideCard.myChildren.forEach(child => {
            const newChild = CreateNewChild(child)
            newElement.appendChild(newChild)

            if (child.myChildren) child.myChildren.forEach(_child => {
                const newElement2Gen = createElem(_child.element, _child.myClass)
                newChild.appendChild(newElement2Gen)
            })
        });
        return newElement
    }
    // adds the front and back of the card to the scope
    scopeCard.appendChild(createLayoutCard(front))
    scopeCard.appendChild(createLayoutCard(back))
    father.appendChild(scopeCard) // add in DOM

    return scopeCard // returns the generated card
}

// use it to call a new card and store it into an array.
const cards = [
    createCard(layout, '.cards', {})

]

export { cards }