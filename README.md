# cursobranas
Rodrigo Branas JS Course
Developing a platform that can take values month by month, with taxes and incomes, showing up a graph.
Linked to a database.

Dom = document object model

front-end and back-end

user interacts with a rendered document (index.html) that carries the style.css, algo calls main.js for example, and the other many folders as well.

-----------------

what are the resctrictions of that?
im not able to store data.
recover data (same?)
also other users are not able to access the same data
that's a system that works only local

-----------------

which are the main differences between front-end and back-end?

front-end 
 - presentation
 - usability
 - visual effects
 - screen transitions
 - interactions 

 back-end
- business rules (doesnt make any sense doing this in frontend)
- database
- single point to center all the business rules

protocol : http?

npm = note pack manager
npm init -y => initialize application
npm install express

node server.js <-> deliver the data through the server
cntrl + c to interrupt the server 
clear?
cd - navigating between the folders

arrays are always split by comma remember that

api = application programming interface
this is basically an interface that the user is not an human being, the user is just another machine.
the library doenst know how to convert numeric in string? thats because PARSEFLOAT IS IMPORTANT

tasks:

1 - start point of the application
2 - database connection
3 - api services definition (aplication programming interface)
4 - data interaction with the database
5 - api routes settings and server opening in a specific port (app.get, app.listen)

SRP - Single Responsibility Principle:
    Pull apart things that change because specific reasons.
    Connection, adresss, query, port... all in the same file make the archive weak.
    Because of the constans and the coupling between these responsabilities.
