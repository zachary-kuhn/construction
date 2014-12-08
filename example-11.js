if (author.books.length > BIG_TIMER_BOOK_COUNT)
  author.status = BIG_TIMER;

for (var authorIndex = 0; authorIndex < authors.length; authorIndex++)
  authors[authorIndex].printName();

while (!isAuthor)
  isAuthor = users.next().isAuthor;