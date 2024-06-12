var quote =[
    {'quote':'“Be the change that you wish to see in the world.”',
    'author':'― Mahatma Gandhi'
    },
    {'quote':'“So many books, so little time.”',
    'author':'― Frank Zappa'
    },
    {'quote':'“A room without books is like a body without a soul.”',
    'author':'― Marcus Tullius Cicero'
    },
    {'quote':'“In three words I can sum up everything I have learned about life: it goes on.”',
    'author':'― Robert Frost'
    },
    {'quote':'“Always forgive your enemies; nothing annoys them so much.”',
    'author':'― Oscar Wilde'
    },
]
function getQuotes() {
    var x = Math.floor(quote.length*Math.random());
   document.getElementById('quote').innerHTML=quote[x].quote
   document.getElementById('author').innerHTML=quote[x].author
}