#Pharmaware Server and Web Client

Visit: https://pharmaware.herokuapp.com

About
=====
Server:
------
The server uses the Node.js runtime. The server is an express app. The data hosted by it is present in a database in Mongodb Atlas. It uses Mongoose as a middleware to integrate Node.js with Mongodb.

Client:
-------
The client is a React application, using Material-ui framework for frontend design. It was created with ``creaate-react-app``. This part is still under development. But the main functionality is ready (searching for medicines with their composition names).

Developer Instructions:
===================

Installation
------------

- Clone the repo.
- ``cd`` into the cloned folder.
- run ``npm install`` (to install server dependencies)
- ``cd react-client`` and run ``npm install`` (to install react app dependencies)  
- add the file ``config/dev.js`` with the following content:      
      
      module.exports={ 
        mongodbURI: <your-mongodb-connection-string>
      };

Local Usage
-----
- Run the node.js app from the cloned directory:
  ``npm run dev``
- In your browser, go to ``http://localhost:3000``
