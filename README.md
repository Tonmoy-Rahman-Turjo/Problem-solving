####  Interview Questions ANS:- 
1. # Provide an example of using union and intersection types in TypeScript.
     ### Why Use Union Types?
Union types are useful when you want to allow for flexibility in the types of values ​​that variables can hold.Nowadays this flexibility can be useful in many real-world situations, such as when writing functions that work with different types of data or when handling different types of user input.

##What Are Intersection Types?

An Intersection Type is the opposite of a union type. It allows you to combine multiple types into one.Intersection types are defined using the ampersand (&) operator.

### Why Use Intersection Types?
Intersection types in TypeScript allow you to combine multiple types together to create a new type.Its use can be beneficial for many reasons:
1. Combine multiple types
2. Flexibility
3. Avoid repetition
4. Execution of multiple contracts
5. Creating more specific types
6. Type safety.



2. # How does TypeScript help in improving code quality and project maintainability?
  
  TypeScript = early bug detection + clearer code + safer collaboration + powerful tooling.TypeScript improves code quality and project maintainability in several key ways:
#### Static Type Checking =>
TypeScript catches errors at compile time, before you even run the code.

Example: let age: number = "twenty";


#### Better Code Autocompletion & IntelliSense =>
With types in place, editors like VS Code can show helpful suggestions and documentation.Makes coding faster and reduces mistakes.

#### Integration with JavaScript =>
TypeScript is a superset of JavaScript, so you can gradually adopt it It compiles down to plain JS, working in any JS environment.

#### Tooling & Ecosystem => 
Many modern frameworks (like Angular, NestJS) are built with TypeScript.Popular libraries provide type definitions (@types/...), enhancing development.


#### Improved Refactoring =>
Strong typing allows safe and confident refactoring (e.g., renaming, moving code).The compiler warns if something breaks after a change.

#### Self-Documenting Code =>
Type annotations make code easier to understand without needing extra comments.
