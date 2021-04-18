/* JavaScripst - объектно-ориентированный язык
программирования, чаще всего используется в комбинации 
вместе с css и html, для добавления динамики на сайт. */

// number, string, boolean, undefined, object

let emptyList = [];
let dataTypes = ['number', 'string', 'boolean', 'undefined', 'object'];
let dataTypesExample = [3, 'lorem', true, undefined, { firstname: 'Ivan', age: 21 }];
let booleanDataType = [true, false];
let collection = [
    {},
    {},
    {}
];
let application = {
    name: 'youtube',
    downloads: 5000000000,
    content: 'video',
    myFollows: [{
            nameKanal: 'andro news',
            content: 'news from mobile gadgets'
        },
        {
            nameKanal: 'Доза футбола',
            content: 'news in football world'
        },
        {
            nameKanal: 'Хауди Хо',
            content: 'programming'
        },

        '...'
    ],
    iAmUser: true,
    myKanal: undefined
};

if (true) {
    console.log('Hello, world');
} else {
    console.log("it's not true");
}

function startGame(playersCount) {
    return `Игра началась. Количество игроков ${playersCount}`
}