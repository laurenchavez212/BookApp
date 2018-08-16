exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function() {
      // Inserts seed entries
      return knex('book').insert([{
          title: "A Tale of Two Cities",
          imgURL: "https://images.penguinrandomhouse.com/cover/9780451530578",
          description: "A Tale of Two Cities is a historical novel by Charles Dickens, set in London and Paris before and during the French Revolution. ... The story is set against the conditions that led up to the French Revolution and the Reign of Terror.",
          author: "Charles Dickens",
          author_id: 1
        },

        {
          title: "Harry Potter and the Philosopher's Stone",
          imgURL: "https://media.bloomsbury.com/rep/bj/9781408855652.jpeg",
          description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to the Hogwarts School of Witchcraft and Wizardry. ",
          author: "J.K. Rowling",
          author_id: 2
        },

        {
          title: "The Da Vinci Code",
          imgURL: "https://images.penguinrandomhouse.com/cover/9780307474278",
          description: "The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ having been a companion to Mary Magdalene.",
          author: "Dan Brown",
          author_id: 3
        },

        {
          title: "The Alchemist",
          imgURL: "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s550x406.jpg",
          description: "The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became an international bestseller translated into some 70 languages as of 2016.[1][2] An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.",
          author: "Paulo Coelho",
          author_id: 4
        },

        {
          title: "The Lion, the Witch and the Wardrobe",
          imgURL: "https://images-na.ssl-images-amazon.com/images/I/51erHMLhIzL._SX334_BO1,204,203,200_.jpg",
          description: "The Lion, the Witch and the Wardrobe is a fantasy novel for children by C. S. Lewis, published by Geoffrey Bles in 1950. It is the first published and best known of seven novels in The Chronicles of Narnia.",
          author: "C.S. Lewis",
          author_id: 5
        },

      ]);
    });
};
