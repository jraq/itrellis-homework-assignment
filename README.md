# iTrellis Homework Assignment

### Start/Test Application

You will need to cd to the location of the application to run it.

```
npm install
npm run start
```

#### Test
```
npm install
npm test
```

# Domain: To-do List. 

Mobx handles all of the to-do logic in the to-do store. I've created four models a base, Parent, Child, and Add to-do. These are used by the interface to display the to-dos. I also use moment and shortid to generate the ids and dates in the classes. Everything is kept in memory, but resembles an ajax application. The application loads with two dummy to-dos.

The store has unit tests built out for it. These can be run by using npm test. 

```
npm install
npm test
```
# Interface: Web UI (SPA) 

create-react-app was used to generate the application. React, React-router, React-strap are used for the interface. The application has three pages and four components. The pages are an add to-do page, a list view, and a details view for the selected to-do. The list view item is the final component, which displays a to-do in the list item.  