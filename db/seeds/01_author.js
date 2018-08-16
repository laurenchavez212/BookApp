
exports.seed = function(knex, Promise) {
  return knex('author').del()
    .then(function () {
      return knex('author').insert([
        {name:'Charles Dickens', bio:"Charles John Huffam Dickens was an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era.",},
        {name:'J.K. Rowling', bio:'A British novelist, philanthropist, film and television producer and screenwriter best known for writing the Harry Potter fantasy series. ',},
        {name:'Dan Brown', bio:'Daniel Gerhard Brown is an American author of thriller novels, most notably the Robert Langdon stories: Angels & Demons, The Da Vinci Code, The Lost Symbol, Inferno and Origin.',},
        {name:'Paulo Coelho', bio:'Paulo Coelho de Souza is a Brazilian lyricist and novelist. He is best known for his novel The Alchemist. A keen user of electronic media, in 2014 he uploaded his personal papers online to create a virtual Paulo Coelho Foundation.',},
        {name:'C.S. Lewis', bio:'Clive Staples Lewis was a British novelist, poet, academic, medievalist, literary critic, essayist, lay theologian, broadcaster, lecturer, and Christian apologist. He held academic positions at both Oxford University and Cambridge University.',}
      ]);
    });
};
