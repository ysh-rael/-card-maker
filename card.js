/* Find 'cards' to tweak or create the card.*/
const layout = {
    func: { createElem, turnThisCard },
    scope: {
        element: 'div',
        myClass: ['card__scope', 'flip']
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
        myClass: ['card__back', 'hiddenThis'],
        myChildren: [
            {
                element: 'div',
                myClass: ['card__titleAndDescription', 'card__title', 'card__title__back'],
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
        ],
    },
    icons: {
        SRCiconTurnCard: '../../update/icon/i1.svg',
        SRCiconRepo: '../../update/icon/i2.svg',
        SRCiconProject: './../../update/icon/i3.svg'
    }
}

function createElem(elem = 'div', myClass = false) {
    const newElem = document.createElement(elem)
    if (myClass) myClass.forEach(_class => newElem.classList.add(_class));
    return newElem
}

function turnThisCard(elem1, elem2, changeThisClass = 'hiddenThis') {
    
    if (elem1.classList.contains(changeThisClass)) {
        elem1.classList.remove(changeThisClass)
        elem2.classList.add(changeThisClass)
    }
    else if (elem2.classList.contains(changeThisClass)) {
        elem1.classList.add(changeThisClass)
        elem2.classList.remove(changeThisClass)
    }
}

function createCard(_layout, _father = 'body', object) {
    const { createElem, turnThisCard } = _layout.func
    const father = document.querySelector(_father)
    const scope = _layout.scope
    const front = _layout.front
    const back = _layout.back
    let i = 0
    const {SRCiconTurnCard, SRCiconRepo, SRCiconProject} = _layout.icons
    const CreateNewChild = child => createElem(child.element, child.myClass)
    const scopeCard = createElem(scope.element, scope.myClass)
    const { title, resume, img, repo, project, turnCard } = object
    const { mainTechnologies, graphTechnologies, tags, titleBackCard } = object.cardBack


    function createLayoutCard(sideCard) {
        const newElement = createElem(sideCard.element, sideCard.myClass)
        if (sideCard.myChildren) sideCard.myChildren.forEach(child => {
            const newChild = CreateNewChild(child)
            if (newChild.classList.contains('card__title')) newChild.innerHTML = title //insert title card__title__back
            if (newChild.classList.contains('card__title__back')) newChild.innerHTML = titleBackCard //insert title in backCard

            if (newChild.classList.contains('card__description')) newChild.innerHTML = resume // insert description
            if (newChild.classList.contains('card__boxTags') && tags) tags.forEach( tag => {
                const newTag = createElem('img', ['card__tag'])
                newTag.src = tag
                newChild.appendChild(newTag)
            })

            newElement.appendChild(newChild)

            if (child.myChildren) child.myChildren.forEach(_child => {
                const newElement2Gen = createElem(_child.element, _child.myClass)
                if (newElement2Gen.classList.contains('card__print')) newElement2Gen.src = img // insert src of img print
                /* if (newElement2Gen.classList.contains('Card__bttn--turn')) newElement2Gen.addEventListener('click', () => {
                    turnThisCard('.card__front', '.card__back') 
                }) */
                if (newElement2Gen.classList.contains('Card__bttn--turn')) {
                    const iconTurnCard = CreateNewChild({element: 'img', myClass: ['cardCard__bttnIcon']})
                    iconTurnCard.src = SRCiconTurnCard

                    newElement2Gen.appendChild(iconTurnCard)
                }
                if (newElement2Gen.classList.contains('Card__bttn--runRepo')) {
                    newElement2Gen.addEventListener('click', () => window.open(repo,'_blank'))
                    const iconRepoCard = CreateNewChild({element: 'img', myClass: ['cardCard__bttnIcon']})
                    iconRepoCard.src = SRCiconRepo

                    newElement2Gen.setAttribute('target', '_blank')
                    newElement2Gen.appendChild(iconRepoCard)
                }
                if (newElement2Gen.classList.contains('Card__bttn--runProject')) {
                    newElement2Gen.addEventListener('click', () => window.open(project,'_blank'))
                    const iconProjectCard = CreateNewChild({element: 'img', myClass: ['cardCard__bttnIcon']})
                    iconProjectCard.src = SRCiconProject

                    window.location.target = '_blank'
                    newElement2Gen.appendChild(iconProjectCard)
                }
                newChild.appendChild(newElement2Gen)
            })
        });
        return newElement
    }

    function changeScopeFace(current, frontClass, backClass) {
        let continueTest = true
        let front = false
        let back = false
        while (continueTest) {
            if (current.classList.contains(frontClass)) {
                continueTest = false
                current = current.parentNode
                for(i = 0; i < current.children.length; i++) {
                    if(current.children[i].classList.contains(frontClass))  front = current.children[i]
                    if(current.children[i].classList.contains(backClass))   back = current.children[i]
                }
                if(front && back) turnThisCard(front, back)
                front = false
                back = false
                return current
            }
            if (current.classList.contains(backClass)) {
                continueTest = false
                current = current.parentNode

                for(i = 0; i < current.children.length; i++) {
                    if(current.children[i].classList.contains(frontClass)) front = current.children[i]
                    if(current.children[i].classList.contains(backClass))  back = current.children[i]
                }
                if(front && back) turnThisCard(front, back)
                front = false
                back = false
                return current
            }

            current = current.parentNode
        }
        return current
    }

    // adds the front and back of the card to the scope
    const scopeFront = createLayoutCard(front)
    const scopeBack = createLayoutCard(back)
    scopeCard.appendChild(scopeFront)
    scopeCard.appendChild(scopeBack)
    father.appendChild(scopeCard) // add in DOM

    // turn card
    const bttnTurnCardFront = scopeFront.children[3].children[0] // se mexer na estrutura do card, vai dar merda aqui
    const bttnTurnCardBack = scopeBack.children[3].children[0] // se mexer na estrutura do card, vai dar merda aqui
    bttnTurnCardFront.addEventListener('click', ({ target }) => {
        scopeCard.classList.remove('flip')
        changeScopeFace(target, 'card__front', 'card__back')})
    bttnTurnCardBack.addEventListener('click', ({ target }) => {
        scopeCard.classList.add('flip')
        changeScopeFace(target, 'card__front', 'card__back')} )





    return scopeCard // returns the generated card
}

export {layout, createElem, turnThisCard, createCard}