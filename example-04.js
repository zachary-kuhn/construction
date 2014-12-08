for (var i = 0; i < categories.length; i++) {
  for (var j = 0; j < categories[ i ].length; j++) {
    console.log( categories[ i ][ j ].name );
  }
}

// ===

for (var categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
  for (var authorIndex = 0; authorIndex < categories[ categoryIndex ].length; authorIndex++) {
    console.log( categories[ categoryIndex ][ authorIndex ].name );
  }
}