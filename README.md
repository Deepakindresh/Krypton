# Ecommerce (React) Coding Assessment

## Overview

Built an E-commerce app using ReactJS with the latest version of react-router-dom and using the json server for backend db

## Pages and Features

- Login page (Checks for already existing accounts and logs in with utmost security)
- Home page (All products available with features of adding to favourite list and directly adding to cart or analyzing a specific product)
- Product page (Used for analyzing the product and has links to orders page)
- Cart Page (Alligns all the products and calculates total bill and sends data to server/db)




## Development Setup

- Clone this repo
- `npm install` - To install the dependencies
- `npm run server` - To start the JSON server
- `npm start` - To start the react app
- Might be needed to install some additional packages such as material ui icons, axios and json server


## How the application works?

The user of this react application should be able to view all the products. The application should have the following workflow,

1. Initially you would have to create an account and then login (this might take sometime and you might have to click the login button twice.)
2. Once the user is authenticated you can visit the home page where multiple products are visible and you can choose to favourite them or add them to your cart or go in a bit deeper by clicking the product and checking it out.
3. In the products page you can also favourite them, go back to home page or even go to the cart page by clicking buy now.
4. In the carts page you can choose to delete items from your cart if needed and place order and this will get updated in the server.
5. If logged out you wont be able to access the important pages but you can look at products.

## Implementation/ Outputs

### Login/Register page

<img width="1512" src="https://cdn.discordapp.com/attachments/928547119646781500/1002700971383726200/unknown.png">

### Home page

<img width="1512"  src="https://cdn.discordapp.com/attachments/928547119646781500/1002701545504256130/unknown.png">

### Product detail page

<img width="675"  src="https://cdn.discordapp.com/attachments/928547119646781500/1002701876422262945/unknown.png">

### Cart page

<img width="1415" src="https://cdn.discordapp.com/attachments/928547119646781500/1002702349267116115/unknown.png">

<img width="1472" src="https://cdn.discordapp.com/attachments/928547119646781500/1002702725378740234/unknown.png">

## API Usage and Implementation

<img width="1415" src="https://cdn.discordapp.com/attachments/928547119646781500/1002703015863660554/unknown.png">

<img width="1472" src="https://cdn.discordapp.com/attachments/928547119646781500/1002703293014872184/unknown.png">


## Future Scope (if had more time)

- Add footers, licensing, host with domains, add even more security.
- Features like searching and sorting products, adding chatbots, carousels for ads.
- Create cookies, collect user data with consent for further analysis.
- Recommendation systems to recommend products based on user interests.
- Leverage Cloud resources to improve speed and efficiency


API can be launched using npm run server.
| Endpoint | Result |
|------------------------------|-----------------------------------------------------|
| /users | Lists all available users |
| /products | Lists all available products |
| /orders | Lists all available orders  
| /favourites | Lists all available favourites

More info about API usage can be found at the [Postman Collection](https://www.getpostman.com/collections/9f28d57ae334429e1f1f)

---
