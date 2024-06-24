# ecommerce Store with NextJS and Sanity

This project is a eCommerce Store that sells Tech products. It is built on NextJS with an integration to Stripe, and uses Google logins for customers and admin users. 

## Requirements

Before you begin, ensure you have met the following requirements:
* You should have Node.js 18.17 or later

### Environment variables
   ```bash
   NEXT_PRIVATE_STRIPE_SECRET_KEY={your-secret-key-from-stripe}
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY={your-public-key-from-stripe}
   NEXTAUTH_URL={your-website-url}
   NEXTAUTH_SECRET={set-a-random-string}
   SANITY_STUDIO_TOKEN={yout-token-from-sanity}
   GOOGLE_CLIENT_ID={your-client-id-from-google}
   GOOGLE_CLIENT_SECRET={your-secret-key-from-google}
   ```
You can obtain the values for these variables by singning up for free accounts at [Sanity](https://www.sanity.io/login/sign-up?origin=https%3A%2F%2Fwww.sanity.io%2Fmanage), [Stripe](https://dashboard.stripe.com/register) and [Google](https://console.developers.google.com/apis/credentials). 


## Installation

Follow these steps to get your development environment up and running:

1. **Navigate to your project directory:**

2. **Clone the project repository:**
   ```bash
   git clone https://github.com/chrissilliw/TechStoreWithSanity.git
   ```

3. **Navigate to sanity-store**
   ```bash
   cd TechStoreWithSanity/sanity-store
   ```

4. **Install the sanity module**
   ```bash
   npm install
   ```

5. **Run sanity**
   ```bash
   npm run dev
   ```

6. **Navigate to NextJS module (suggestion to use new terminal)**
   ```bash 
   cd TechStoreWithSanity/tech-store
   ```
7. **Install tech-store**
   ```bash
   npm install
   ```
8. **Run tech-store**
   ```bash
   npm run dev
   ```

## Accessing the Project
* Frontend: http://localhost:3000
* Sanity Backend: http://localhost:3333/structure

## Frequently asked questions

### Is this project fully done?
No this is a first draft of a project. 
