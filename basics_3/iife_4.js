//Imediatly invoked function expressions(IIFE)

(function printGreetings() {
    console.log('Wellcome');
})();

((name) =>{
    console.log(`Wellcome ${name} `);
})('Abhinav')