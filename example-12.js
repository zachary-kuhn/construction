var count = 0, statement;
function lookup() {
  return statement = 'This has been looked up ' + count++ + ' times';
}

var displayPrice = user.id === book.authorId ? 0 : book.isOnSale ? book.price * 0.7 : book.price;