#Server Side Backend version 0.1.0

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
