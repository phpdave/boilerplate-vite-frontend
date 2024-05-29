Lets create a boiler plate frontend client example. We'll use:

1. React as a front-end JavaScript library for building user interfaces based on components.
2. Typescript a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.
3. vite build to create the html and javascript bundle (Vite JS is a new frontend dev tool that offers a leaner, faster, and seamless workflow for developing modern web apps)
4. We'll serve the vite built html and js using express to serve the static files 
5. We'll use node https to provide a secure connection to the frontend.  
6. We'll use a docker container so developers have a consistent environment  
7. We'll use PM2 to have a production process manager that will load balance and have fault tolerance.  We will use a ecosytstem.config.js file to manage multiple apps
8. client/index.js will have the express js and https setup.  
9. We wont be setting up the backend api code (server/server.js) and will wait for later to setup that part.
10.  Everything should be self contained in this project so we'll create self signed certificates to use for the ssl.  Generating Self-Signed Certificates will be done in the Dockerfile and will have the command in the dockerfile and wont reference a seperate file.  
11. We want to minimize the number of files and have a simple setup.  

# Getting started

Run
```sh
docker build -t my-app . && docker run -p 3000:3000 my-app
curl -k https://localhost:3000
```