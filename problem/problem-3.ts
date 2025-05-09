{
    function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (const arr of arrays) {
    result.push(...arr);
  }

  return result;
}


console.log(concatenateArrays(["a", "b"], ["c"]));        
console.log(concatenateArrays([1, 2], [3, 4], [5])); 

}     
