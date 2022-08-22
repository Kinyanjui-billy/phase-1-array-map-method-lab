


  const tutorials = [
    'What Does The This Keyword Mean?',
    'What Is The Constructor OO Pattern?',
    'Implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What Is NaN and How Can We Check For It',
    'What Is the Difference Between StopPropagation and PreventDefault?',
    'Immutable State and Pure Functions',
    'What Is The Difference Between == and ===?',
    'What Is The Difference Between Event Capturing and Bubbling?',
    'What Is JSONP?'
  ];

 function titleCased(){
  const capTutorials = tutorials.map(t => {
    const words = t.split(" ").map(w => {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ")
    console.log(words);
    return words;
  })
  return capTutorials;
 }