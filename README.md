# Wallab

## tl;dr;
```
 docker-compose -f docker-compose.yml up --build
```

Repository containing some test projects to showcase skills in React/Redux as well as System Architecture Design.

## Getting Started
The application has three parts (the UI, the BFF, and the API). These all run independent of each other but the UI requires the BFF and the BFF uses the API.

## Running the Application
To run all the application together you can use `docker-compose` to run each process and link the hosts and dependencies appropriately.
The command to run the application:
```
 docker-compose -f docker-compose.yml up --build
```
Once the `docker-compose` command is complete the application will be available for view at `http://127.0.0.1:80`.

### UI
The UI component can be rendered by first building the application then serving it with the command `npm run serve`.

### BFF
The BFF layer is an express App and can be easiliy started with the command `npm start`.

### API
Just like the BFF layer the API portion of the system is an express App and can be easiliy started with the command `npm start`.


****
_Started Sep 27th 2017_