import {createElement} from 'main.js'
const layout = {
    functions: [createElement],
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

const cards = [
    createCard(layout, {



    })
]

function createCard(layout, object) {
    // const {  } = layout


    return layout.front.element
}

export { cards }