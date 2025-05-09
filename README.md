#REDME.MD
Question ans-1
1. ## How does TypeScript help in improving code quality and project maintainability?

TypeScript = early bug detection + clearer code + safer collaboration + powerful tooling

TypeScript improves code quality and project maintainability in several key ways:
Static Type Checking :- TypeScript catches errors at compile time, before you even run the code.

Example:

let age: number = "twenty";
let age: number = "twenty";  

2 .  Better Code Autocompletion & IntelliSense=> With types in place, editors like VS Code can show helpful suggestions and documentation.Makes coding faster and reduces mistakes.
3 .Tooling & Ecosystem=> Many modern frameworks (like Angular, NestJS) are built with TypeScript.Popular libraries provide type definitions (@types/...), enhancing development.
4.Integration with JavaScript => TypeScript is a superset of JavaScript, so you can gradually adopt it.It compiles down to plain JS, working in any JS environment.
5 .  Scalability => Large projects benefit from clearly defined interfaces, classes, and modules.Easier to collaborate across teams since everyone knows what data structures to expect.

2.  # Provide an example of using union and intersection types in TypeScript.
#### Union Types example.
Union types are useful when you want to allow for flexibility in the types of values ​​that variables can hold.Nowadays this flexibility can be useful in many real-world situations, such as when writing functions that work with different types of data or when handling different types of user input.

##What Are Intersection Types?

An Intersection Type is the opposite of a union type. It allows you to combine multiple types into one.Intersection types are defined using the ampersand (&) operator.

#### Intersection Types example.

Intersection types in TypeScript allow you to combine multiple types together to create a new type.Its use can be beneficial for many reasons:
1. Combine multiple types
2. Flexibility
3. Avoid repetition
4. Execution of multiple contracts
5. Creating more specific types
6. Type safety
