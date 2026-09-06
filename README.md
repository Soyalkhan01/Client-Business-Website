# Glow Beauty — Beauty & Cosmetics Website

A modern, responsive and professionally designed beauty & cosmetics website built with React.js and Vite.

Glow Beauty provides a clean and elegant online experience for showcasing skincare, makeup, hair care, fragrances and other beauty essentials. The website includes product browsing, product details, wishlist functionality, gallery, contact form, newsletter subscription and essential policy pages.

---

## ✨ Features

### 🏠 Home
- Modern hero section
- Featured products
- Beauty categories
- Promotional sections
- Newsletter subscription
- Responsive layout

### 🛍️ Products
- Product listing
- Category filtering
- Product cards
- Product pricing
- Product ratings
- Responsive product grid

### 📦 Product Details
- Detailed product information
- Product image gallery
- Multiple product images
- Product highlights
- Price and rating information
- Quantity selection
- Wishlist functionality
- Delivery and return information
- Related products

### ❤️ Wishlist
- Add products to wishlist
- Remove products from wishlist
- View saved products
- Share wishlist/product
- Persistent wishlist using browser storage

### 🖼️ Gallery
- Beauty product gallery
- Category-based filtering
- Image preview modal
- Next/previous image navigation
- Responsive gallery layout
- Social media section

### 📩 Contact
- Contact information
- Contact form
- Form validation
- EmailJS integration
- Cloudflare Turnstile protection
- Success/error notifications
- Google Maps integration

### 📧 Newsletter
- Email subscription form
- EmailJS integration
- Cloudflare Turnstile protection
- Email validation
- Success/error notifications

### 📄 Information & Policy Pages
- About
- FAQ
- Privacy Policy
- Terms & Conditions
- Return Policy
- Refund Policy
- 404 Not Found page

### 📱 Responsive Design
- Mobile-friendly interface
- Tablet support
- Desktop optimization
- Responsive navigation
- Responsive product and gallery layouts

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- React Router

### Libraries & Integrations
- EmailJS
- Cloudflare Turnstile
- React Hot Toast
- React Icons

### Development Tools
- VS Code
- Git
- GitHub
- npm

### Deployment
- Vercel

---

## 📂 Project Structure

```text
Business-Website-Template/
│
├── public/
│   └── images/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Newsletter/
│   │   ├── Product/
│   │   └── ...
│   │
│   ├── data/
│   │   ├── products.js
│   │   ├── galleryData.js
│   │   ├── contactData.js
│   │   ├── privacyData.js
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   ├── Wishlist.jsx
│   │   ├── FAQ.jsx
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
---

## 🔐 Security

<details>
<summary>View Security Details</summary>

The `.env` file is intentionally excluded from Git using `.gitignore`.

Client-side `VITE_*` variables are exposed to the browser at build time. Therefore, private server-side secrets must never be stored in these variables.

</details>

---

## 📧 Email Integration

<details>
<summary>View Email Integration Details</summary>

The website uses EmailJS for:

- Contact form submissions
- Newsletter subscriptions

No custom backend is required for the current frontend implementation.

</details>

---

## 🛡️ Bot Protection

<details>
<summary>View Bot Protection Details</summary>

Cloudflare Turnstile is integrated into:

- Contact form
- Newsletter subscription

This helps reduce automated spam submissions.

For a production system requiring stronger verification, Turnstile tokens should also be validated server-side.

</details>

---

## 🎨 Design & UI

<details>
<summary>View Design & UI Details</summary>

The website focuses on:

- Clean and modern visual design
- Beauty-focused branding
- Consistent typography
- Responsive layouts
- Reusable UI components
- Accessible navigation
- Smooth user interactions
- Mobile-first presentation

</details>

---

## 📊 SEO

<details>
<summary>View SEO Details</summary>

The project includes basic SEO configuration such as:

- Page title
- Meta description
- Robots metadata
- Open Graph metadata
- Twitter card metadata
- Canonical URL
- Semantic HTML structure

### Additional Production SEO

Possible improvements include:

- XML sitemap
- `robots.txt`
- Google Search Console
- Google Analytics
- Structured data / Schema.org
- Image optimization
- Search keyword optimization

</details>

---

## 📱 Browser Support

<details>
<summary>View Supported Browsers</summary>

The website is designed for modern browsers including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Mobile browsers

</details>

---

## 🚀 Deployment

The frontend can be deployed using Vercel.

<details>
<summary>View Vercel Configuration</summary>

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

Environment variables must be added separately in the Vercel project settings.

</details>

---

## 🔮 Future Improvements

<details>
<summary>View Future Improvements</summary>

Possible future upgrades include:

- Admin dashboard
- Product management system
- Backend API
- MongoDB database
- Product image upload
- Dynamic product management
- Authentication
- Order management
- Payment integration
- Customer accounts
- Advanced analytics
- Server-side Turnstile verification

</details>

---

## 👨‍💻 Developer

<details>
<summary>View Developer Information</summary>

**Soyal Khan**

Full Stack Developer | React.js | Python | MERN Stack

### Skills

- React.js
- JavaScript
- Python
- Flask
- FastAPI
- Node.js
- Express.js
- MongoDB
- PostgreSQL
- REST APIs
- Tailwind CSS
- Git & GitHub

</details>

---

## 📄 License

<details>
<summary>View License Information</summary>

This project is developed for a client/business website.

The design, content, product information, images and branding may be subject to the client's ownership and usage rights.

---
