if (elementindex < 0 || MAX_ELEMENTS < elementIndex || elementIndex === lastElementIndex) {
  // ...
}

// ===

var finished = elementIndex < 0 || MAX_ELEMENTS < elementIndex;
var repeatedEntry = elementIndex === lastElementIndex;
if (finished || repeatedEntry) {
  // ...
}

// ---

if (document.atEndOfStream() && !inputError &&
  MIN_LINES <= lineCount && lineCount <= MAX_LINES &&
  !errorProcessing()) {
  // ...
}

// ===

var allDataRead = document.atEndOfStream() && !inputError;
var legalLineCount = MIN_LINES <= lineCount && lineCount <= MAX_LINES;
if (allDataRead && legalLineCount && !errorProcessing()) {
  // ...
}