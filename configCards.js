import {createElem} from './main.js'
const layout = {
    func: createElem,
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
                        myClass: ['card__img  card__print'],
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
                        myClass: ['card__bttn hiddenThis'],
                    },
                    {
                        element: 'div',
                        myClass: ['card__bttn, hiddenThis'],
                    }
                ]
            }
        ]
    }
}



function createCard(_layout, object, _father = 'body') {
    const createElem  = _layout.func
    const father = document.querySelector(_father)
    const front = _layout.front
    // front
    
    const newElement = createElem(front.element, front.myClass)
    if(front.myChildren) front.myChildren.forEach(child => {
        const newChild = createElem(child.element, child.myClass)
        console.log(newChild)
    });


    // back
    const back = _layout.back
    


    return newElement
}

const cards = [
    createCard(layout, {})
]

export { cards }