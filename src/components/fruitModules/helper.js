

const choice = () => {
let items = ['a','b','c','d']
Math.random(items)
return items;
};

const remove = () => {
if(items.shift([0]) === 'a'){
    return 'a'
} else return undefined
}

export {choice, remove}

