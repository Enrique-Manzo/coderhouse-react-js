# About this app

This is an e-commerce app developped as part of the CoderHouse React bootcamp in February-March 2022.

The app was developped using the following technologies:

- ReactJS
- HTML/CSS
- Bootstrap
- Firebase
- REST api's

# Components

The app features a series of functional components to show products or interact with the database.

## Item list container

Displays the number of items passed through props.

## Category container

Displays items by category, which is retrieved using the useParams() hook.

## Cart widget

Displays the number of items added to the cart.

## Cart

Displays a breakdown of the items added to the cart, the final price and taxes, and a series of component that allow the user to make a purchase. If no items have been added to the cart, a message showing that the cart is empty will appear.

## Order search

Uses the order ID to retrive the order and display anonymized information about the order.

## 404 page

Displays a 404 page when reaching an invalid category or product page.

## Item details

Displays the requested item, including an image, title, description, and a counter widget.