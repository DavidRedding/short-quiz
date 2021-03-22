const quiz = [
    ['Will David make a great apprentice?', 'of course!'],
    ['Is the sky blue?', 'yes' ],
    ['Are the Lakers winning this year?', 'no'],
    ['Are developers cool?', 'yes' ]
  ];
  
  let score = 0;         
  const correct = [];    
  const incorrect = [];  
  
  
  for (let i = 0; i < quiz.length; i++ ){
   let questions = quiz[i][0];           
   let correctAnswers = quiz[i][1];     
   let responses = prompt(questions);   
  
  
   if(responses === correctAnswers){   
    score++;
    correct.push(questions);       
    } else{
    incorrect.push(questions);    
    }
  }
    
    
    function createListItem (arr) {
      let items = '';                                
      for(let i = 0; i < arr.length; i++ ){
      items += `<li>${arr[i]}</li>`;                
      }
      return items;                               
    }
  
    
  
  let html = `
    <h1>You got ${score} answers correct.</h1>
    <h2>You got these questions right:</h2>
    <ol>
      ${createListItem(correct)}
    </ol>
    
    <h2>You got these questions wrong:</h2>
    <ol>
      ${createListItem(incorrect)}
    </ol> 
  `;
  
  document.querySelector('main').innerHTML = html;