# nodemon-backend-example
For example, use nodemon with express.js in docker container
```
docker-compose up 
```

If you wanna work nodemon, don't forget write in dev.Dockerfile that
```
CDM ["nodomeon", "-L", "app.js"]
```
