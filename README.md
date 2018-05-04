
#iTrellis Homework Assignment

###Start/Test Application

You will need to cd to the location of the application to run it

```
npm install
npm run start
```

####Test
```
npm install
npm test
```

#Domain: To-do List. 

Mobx handles all of the to-do logic in the to-do store. I've created four models Base, Parent, Child, Add to-do. These are used by the interface to display the to-dos. I also use moment and shortid to generate the ids in the classes. Everything is kept in memory, but resembles an ajax application.

The store has unit tests built out for it. These can be run by using npm test.

```
npm install
npm test
```
#Interface: Web UI (SPA) 

create-react-app was used to generate the application. React, React-router, React-strap are used for the interface. The application has three pages and four components. 