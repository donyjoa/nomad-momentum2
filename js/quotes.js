const quotes = [
  {
    quote: "tomato",
    author: "a",
  },
  {
    quote: "pizza",
    author: "b",
  },
  {
    quote: "apple",
    author: "c",
  },
  {
    quote: "orange",
    author: "d",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
