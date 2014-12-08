if (user.role === 'admin' || article.authorId === user.id) {
  return true;
} else {
  return false;
}

var isBefore2000 = false;
if (article.createdDate.getFullYear() <= 2000) {
  isBefore2000 = true;
}
