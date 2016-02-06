import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext , match} from 'react-router';
import createLocation from 'history/lib/createLocation';

const app = express();

app.set('views', './views');

import routes from '../shared/routes';

app.use((request, response)=>{
  const location = request.url;
  match({routes, location}, (err, redirectLocation, renderProps)=>{
    if(err){
      console.error(err);
      return response.status(500).send(err.message);
    }else if(redirectLocation){
      response.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }else if(renderProps){
      const InitialComponent = (
        <RouterContext {...renderProps}/>
      );
      const componentHTML = renderToString(InitialComponent);
      const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Express</title>
        </head>
        <body>
          <div id="app">${componentHTML}</div>
          <script type="application/javascript" src="http://localhost:8080/js/bundle.js"></script>
        </body>
      </html>`;
      response.status(200).send(HTML);
    }else{
      return response.status(404).send('Not found.');
    }
  });

})

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log(`listening at http://${host}${port}`);
})

export default app;
