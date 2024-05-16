function sumAsync(num1, num2, callback) {
    const result = num1 + num2;
    console.log(`Sum: ${num1} + ${num2} = ${result}`); 
    
    const delay = Math.floor(Math.random() * 5000) + 1000;
    console.log(`Delay: ${delay} milliseconds`); 
    
    setTimeout(() => {
      console.log('Calling the callback function'); 
      callback(result);
    }, delay);
  }
  
  sumAsync(5, 10, (result) => {
    console.log(`The result is: ${result}`);
  });
  