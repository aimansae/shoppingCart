# Product Cart Page

This is a responsive **shopping cart page** inspired by [Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d) made with NextJs, Typescript

![App Preview](/public/assets/images/amIResponsive.PNG)

Here is my [GiHub Repo](https://github.com/aimansae/shoppingCart)
and the [Deployed version](https://shopping-cart-one-tau.vercel.app/)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Challenges and What I Learned](#challenges-and-what-i-learned)
- [Future Features](#future-features)
- [Credits](#credits)

## Features

- Add/remove items to/from cart
- Dynamic cart total calculation
- Item quantity increment/decrement
- Delete individual cart items
- Modal confirmation upon placing order
- Responsive layout using CSS Grid and Flexbox


## Technologies Used
- [React](https://react.dev/)
- [Next.js – Framework for React apps](https://nextjs.org/)
- [Tailwind CSS – Utility-first CSS](https://tailwindcss.com/docs/background-image)
- [TypeScript](https://nextjs.org/docs/pages/api-reference/config/typescript)

## Getting Started

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev

```
Open http://localhost:3000 to view the app locally.

## Deployment

This project is deployed on [Vercel](https://vercel.com/). To deploy:

- Push your code to a GitHub repository.
- Go to vercel.com
- Import the project and connect it to your GitHub repo.
- Select Next.js as framework.
- Click Deploy

## Challenges and What I Learned

- State Management

Managing the cart using an object with product IDs as keys.
Used useState and reduce() to dynamically calculate totals.

- Counter Logic
Prevented counter from dropping below 0.
Deleted product entry when quantity = 0.

-Working with Props
Passed product, count, and handlers between components like Products, CartSummary, and Modal.

- Responsive Layout

Tailwind Grid/Flex utilities for responsive column layout.
Adjusted structure for mobile-first design.

- Modal Behavior
Used conditional rendering to toggle modal on successful order.
Reset cart state after confirmation.

-URL Updates (To Be Improved)

Initially attempted: const newUrl = /?name=${productName}&quantity=${counter}
Still exploring best practices using useRouter() for pagination updates.

## Future Features

- Persistent Cart: Save cart state to localStorage
- Product API: Fetch product data from external API or database
- Filtering: Filter products by category or price
- Authentication: Add user login & checkout process
- Pagination URL Updates: Update pagination using router push
- Add thorough testing with Jest 

## Credits

- Frontend Mentor for the amazing challenge
- Tailwind CSS Docs
- Next.js Documentation