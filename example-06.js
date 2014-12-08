var temp = a;
a = b;
b = temp;

// merge two authors into one
var tempAuthor = author1.copy();
tempAuthor.name = author2.name || tempAuthor.name;
tempAuthor.age = author2.age || tempAuthor.age;