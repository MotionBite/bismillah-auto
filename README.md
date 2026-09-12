# 🚗 Bismillah Auto – Local Business Website & Admin Dashboard

A fully responsive, SEO-optimized, and full-stack website built for **Bismillah Auto**, a local mechanical workshop and GPS tracker installation service provider.  
Developed with **Next.js 15 (App Router)** for high performance, modern UI, and seamless user experience — optimized for **local keyword ranking** on Google.

### [Live Link](https://bismillah-auto.netlify.app/)

## 📌 Project Overview

Bismillah Auto offers professional mechanical services and vehicle GPS tracker installations.  

This website was developed to:
- Showcase services and products
- Attract local customers through search engine visibility
- Provide easy navigation and a clean, modern design
- **Manage inventory dynamically through a secure custom Admin Dashboard**

The project is **indexed on Google**, added to **Google Search Console**, and includes an automatically generated **sitemap** for improved SEO.

## 🚀 Features

- **Next.js 15** with App Router for optimal performance and API routes
- **Secure Admin Dashboard** with JWT-based authentication
- **Database Integration** using Prisma ORM & PostgreSQL
- **Cloud Image Uploads** integrated with Cloudinary
- **Fully Responsive** design (mobile-first approach)
- **SEO Optimization** with `next-sitemap` and native Metadata API
- **Google Search Console** integration & sitemap submission
- **Framer Motion** animations for smooth UI interactions
- **Tailwind CSS** for modern, maintainable styling
- **Form Handling** using `react-hook-form` + `zod` validation
- **Interactive UI Feedback** with `react-toastify`
- **Component-Based Architecture** for scalability
- **Dynamic Service & Product Sections**
- **Local Keyword Optimization** for Google ranking

## 🛠️ Tech Stack

**Frontend:**
- [Next.js](https://nextjs.org/) (React Framework)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [Framer Motion](https://www.framer.com/motion/) (Animations)
- [Lucide React](https://lucide.dev/) (Icons)
- [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) (Form Validation)
- [React Toastify](https://fkhadra.github.io/react-toastify/) (Notifications)

**Backend & Database:**
- **Next.js API Routes** (Serverless Backend)
- **Prisma ORM** (Database Management)
- **PostgreSQL** (Relational Database)
- **Jose** (JWT Authentication)
- **Cloudinary** (Image Hosting)

**SEO & Optimization:**
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)
- Metadata API (Next.js native)

## 📂 Project Structure

```
app/
├── admin/             # Secure Admin Dashboard & Authentication
├── api/               # Backend API Routes (Auth, Products, Uploads)
├── components/        # Reusable UI components
├── contact/           # Contact page
├── legal/             # Legal information
├── product/           # Product details
├── services/          # Services offered
├── globals.css        # Global styles
├── layout.tsx         # Layout configuration
├── sitemap.ts         # Sitemap generation
├── robots.ts          # Robots.txt configuration
prisma/                # Database schema & migrations
public/                # Static assets
```

## 🔒 Environment Variables

To run this project locally, create a `.env` file based on `.env.example`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/bismillah_auto"

# Admin Authentication
ADMIN_EMAIL="admin@bismillahauto.com"
ADMIN_PASSWORD="your_secure_password"
JWT_SECRET="your_jwt_secret_key"

# Cloudinary (Image Uploads)
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

## ⚡ Performance & SEO

- Indexed on Google with **local keyword ranking**
- Optimized metadata for better CTR
- Sitemap and robots.txt for search engine crawling
- Mobile-friendly design with fast load times
- **Dynamic Prerendering** and Next.js Image optimization

## 📸 Screenshots

*(Add screenshots of homepage, service page, product section, and admin dashboard here)*

## 📬 Contact

**Developer:** [Farad Alam](https://github.com/farad-alam)  
**Client:** Bismillah Auto (Local Business)  

---

> 💡 This project demonstrates building a **real-world, full-stack, SEO-ready, high-performance business website** with Next.js, Prisma, and modern web technologies.
