function createQuote(q, num) {
  
  for (var i = 0; i < num; ++i) {
    var quote = '';
    
     for (var p in q) {
      if (q.hasOwnProperty(p)) {
        quote += ' '+ q[p][Math.floor(Math.random()*q[p].length)];
      }
    }

    document.getElementById("intro").innerHTML+=quote + "<br>";
  }
}


var firstTest = {
    a: ["'I love you the more in that I believe you had liked me for my own sake and nothing else.' - John Keats ", "'There is nothing permanent except change.' - Heraclitus", "'Learning never exhausts the mind.' - Leonardo da Vinci", "'There is no charm equal to tenderness of heart.' - Jane Austen", "'Life without love is like a tree without blossoms or fruit.' - Khalil Gibran", "'Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.' - William Blake", "'One ought, every day at least, to hear a little song, read a good poem, see a fine picture, and, if it were possible, to speak a few reasonable words.' - Johann Wolfgang von Goethe"],
    // b: ["please don't forget", "remember to bring", "you should take", "and the sun is shining,", "and the rain is falling,", "and a storm is coming," ],
    // c: ["your umbrella.", "something nice to wear.", "a bunch of flowers.", "you might avoid getting wet.", "you might need to have a lie down.", "you will have some good luck today."]
    
};

var secondTest = {
  a: ["When you go to the shops,", "If you go to the park,", "If you go out on Saturday night,", "If it is early in the morning,", "If you forget to bring an umbrella,", "If you think about it long enough,"],
  b: ["please don't forget", "remember to bring", "you should take", "and the sun is shining,", "and the rain is falling,", "and a storm is coming," ],
  c: ["your umbrella.", "something nice to wear.", "a bunch of flowers.", "you might avoid getting wet.", "you might need to have a lie down.", "you will have some good luck today."]
  
};


function quantity(q) {
    document.getElementById("intro").innerHTML="";
    var num = sentenceQuantity.value;
    createQuote(q, num);
}
