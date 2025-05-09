{
    function formatString(text: string, toUpper: boolean = true): string {
  
  if (toUpper) {
    return text.toUpperCase(); 
  } else {
    return text.toLowerCase();  
  }
}


console.log(formatString("Hello"))  
console.log(formatString("Hello", true))  
console.log(formatString("Hello", false));  
}