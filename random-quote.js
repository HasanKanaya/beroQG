let quotes = [ "If life were predictable it would cease to be life, and be without flavor",
"Life is what happens when you're busy making other plans",
"Tell me and I forget. Teach me and I remember. Involve me and I learn",
"The greatest glory in living lies not in never falling, but in rising every time we fall",
"The way to get started is to quit talking and begin doing",
"The most important thing is to try and inspire people so that they can be great in whatever they want to do",
"Keep your face to the sunshine and you cannot see a shadow",
"If you look at what you have in life, you'll always have more",
"Yesterday is not ours to recover, but tomorrow is ours to win or lose",
"If I cannot do great things, I can do small things in a great way",
"When you have a dream, you've got to grab it and never let go",
"Don't cry because it's over, smile because it happened",
"You only pass through this life once, you don't come back for an encore",
"True friendship comes when the silence between two people is comfortable",
"The real test of friendship is can you literally do nothing with the other person? Can you enjoy those moments of life that are utterly simple?",
"You go through life wondering what is it all about but at the end of the day it's all about family",
"Family means nobody gets left behind or forgotten",
"Creativity is just connecting things",
"If you can't make it good, at least make it look good",
"I think it is possible for ordinary people to choose to be extraordinary"];


//each quote index has the same index of its author
let author = ["Eleanor Roosevelt", 
"John Lennon", 
"Benjamin Franklin", 
"Nelson Mandela",  
"Walt Disney",
"Kobe Bryant",
"Helen Keller",
"Oprah Winfrey",
"Lyndon B. Johnson",
"Martin Luther King Jr",
"Carol Burnett",
"Dr. Seuss",
"Elvis Presley",
"David Tyson",
"Eugene Kennedy", 
"Rod Stewart",
"David Ogden Stiers",
"Steve Jobs",
"Bill Gates",
"Elon Musk"];


document.getElementById("btn").addEventListener("click", generateQuote);

let locked = false;

function generateQuote() {
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    checkThePreviousElementIndex(quoteIndex);

    if (locked) {
        document.getElementById("quote-text").innerText = `"${quotes[quoteIndex]}"`;
        document.getElementById("author").innerText = `- ${author[quoteIndex]}`;
        locked = false; //release the lock
    } else {
        generateQuote(); //recall the function
    }
}


//add the current qoute index to the array and compare it with the previous index
let index = [0];
function checkThePreviousElementIndex(quoteIndex) {
    
    if (index[index.length - 1] !== quoteIndex) {
        index.push(quoteIndex);
        locked = true;
    } 
}