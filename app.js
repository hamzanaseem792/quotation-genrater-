let button = document.querySelector('#btn');
let quotat = {
    William_Shakespeare : 'A rose by any other name would smell as sweet',
    John_Kennedy: 'Ask not what your country can do for you; ask what you can do for your country.',
    Robert_Frost: 'Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.',
    John_Wesley:'Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as ever you can.',
    Charles_Spurgeon: 'A good character is the best tombstone. Those who loved you and were helped by you will remember you when forget-me-nots have withered. Carve your name on hearts, not on marble.'
}

let authors = Object.keys(quotat);

button.addEventListener('click',()=>{
    let author = authors[Math.floor(Math.random()*authors.length)];
let quotation = quotat[author];

    document.querySelector('#quota').innerHTML = quotation; // Changed 'quota' to '#quotation'
    document.querySelector('#author').innerHTML = author; // Changed 'author' to '#author'
});
