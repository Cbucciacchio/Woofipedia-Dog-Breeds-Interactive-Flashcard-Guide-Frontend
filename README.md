# Woofipedia: Dog Breeds Interactive Flashcard Guide Frontend
Link to backend: https://github.com/Cbucciacchio/Woofipedia-Dog-Breeds-Interactive-Flashcard-Guide-Backend
## Overview
This application is an Angular app that displays different dog breeds and their short biographies. It leverages the NestJS API I created to retrieve the dog breed data. The app emphasizes SOLID principles for code organization and maintainability.

## Features
- Display a list of dog breeds with their respective images and descriptions.
- Click on "Watch Me Grow" to see a slideshow of three stages of the growth of each breed.
- Swipe through different breeds, their pictures, and descriptions.

## Technologies Used
- Angular
- NestJS
- HTML/CSS
- TypeScript

## SOLID Principles

### Single Responsibility Principle (SRP)
The Single Responsibility Principle states that a class or component should have a single responsibility. In this app, each component and service follows the SRP by focusing on a specific task.

Example: The `BreedListComponent` is responsible for rendering the list of dog breeds and handling user interactions related to breed selection.

### Open/Closed Principle (OCP)
The Open/Closed Principle suggests that code should be open for extension but closed for modification. In this app, abstractions, interfaces, and inheritance are used to enable easy extension without modifying existing code.

Example: The `BreedService` defines an interface for retrieving dog breed data. Different implementations of this interface can be created to fetch data from various sources, such as a local JSON file or a remote API, without modifying the code that depends on the `BreedService` interface.

### Liskov Substitution Principle (LSP)
The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. In this app, class hierarchies are designed with proper inheritance and overriding methods when necessary.

Example: The `Breed` class serves as the base class for specific dog breed classes like `Akita`, `AlaskanHusky`, etc. All breed classes inherit common properties and methods from the `Breed` class, allowing them to be used interchangeably.

### Interface Segregation Principle (ISP)
The Interface Segregation Principle advises that clients should not be forced to depend on interfaces they don't use. In this app, focused and minimal interfaces are created, tailored to the needs of specific clients.

Example: The `Breed` interface provides the necessary properties and methods required by components and services that deal with dog breed data. It includes properties like `name`, `description`, and `imageUrl`, as well as methods for retrieving breed information. By using a specific interface, clients can depend only on the subset of functionality they require.

### Dependency Inversion Principle (DIP)
The Dependency Inversion Principle suggests that high-level modules should not depend on low-level modules but on abstractions. In this app, dependencies are inverted by depending on abstractions instead of concrete implementations, facilitating loose coupling and testability.

Example: The `BreedListComponent` depends on the `BreedService` abstraction rather than a specific implementation. This allows different implementations of the `BreedService` to be easily swapped without affecting the `BreedListComponent` or other high-level modules.

## Installation and Usage
1. Open folder dog-breed-app-backend and dog-breed-app-front in 2 different windows/terminals.
2. Go to the dog-breed-backend terminal and check that you are in the right directory (dog-breed-app-backend-main).
3. Install the node packages for the backend: `npm install`
4. Start the API server: `npm run start`
5. Open the dog-breed-app-front terminal and make sure to be in the right terminal (dog-breed-app-front-main).
6. Install node packages: `npm install`
7. Wait for it to install and ignore the vulnerabilities. 
8. Start the Angular app: `npm start`
9. Check that the address open for the application is `http://localhost:4200` otherwise there will be a CORS policy error.
10. Access the application in your browser at `http://localhost:4200`

## Credits
The dog breed data used in this application is obtained from reputable sources and curated for educational purposes.

## Future Improvements
- Implement unit tests to ensure code correctness and maintainability.
- Apply linting rules with ESLint for consistent code style and quality.

