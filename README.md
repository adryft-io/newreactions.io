![logo](https://raw.githubusercontent.com/adryft-io/images/master/logo-01.png)

New reactions is a platform to interact with technology that surrounds our physical and digital space. We believe in the power of connectivity and automation, where a user can hand over control of a certain aspect of their lives, to make life a little easier. This project was born from an admiration of IFTTT’s brilliant approach to IoT -- simultaneously paying homage and innovating on the concept. Here, we harness the power of technology to transform actions into reactions.


–––––––


![preview](https://raw.githubusercontent.com/adryft-io/images/master/newreaction.jpg)

## How it Works
New reactions allows a user to select an action, for example when a user receives a Gmail labeled "important", a reaction, such as a SMS text message via Twilio, will be sent.  An action is connected to a reaction through the creation of a formulae.

![preview](https://raw.githubusercontent.com/adryft-io/images/master/channels.png)
![preview](https://raw.githubusercontent.com/adryft-io/images/master/formulae.png)

## Microservices Architecture 
New reactions is built upon modular micro-services -- each service runs in a Docker container linked together through a docker-compose.yml file, which offers: 

1. Portability between execution environments, such as AWS or Digital Ocean. 
2. Minimize divergence between development and production environments which streamlines continuous deployment. 
3. Scalability -- new instances of micro-services can be readily created.
![preview](https://raw.githubusercontent.com/adryft-io/images/master/newreactions-architecture.png)

## Technology Stack 

![logo](https://raw.githubusercontent.com/adryft-io/images/master/techstack.jpg)







