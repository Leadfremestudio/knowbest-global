Here is a detailed Product Requirements Document (PRD) tailored specifically to feed into Google Antigravity to generate your React.js project. It incorporates all the structural elements from your wireframes and audio explanation, along with the modern, animated aesthetic you requested.

---

# Product Requirements Document (PRD)

**Project Name:** ElevateEd - Study Abroad & Job Consultancy Website
**Tech Stack:** React.js, GSAP (for animations), CSS Modules/Tailwind CSS
**Design Language:** Minimalist, Modern, Awwwards-inspired
**Theme:** Premium Gold & Deep Blue

## 1. Project Overview

A highly interactive, modern, and minimalist web application for an education and job consultancy agency. The site will help users explore studying and working abroad, view country-specific details, and submit inquiries seamlessly. All dynamic content (countries, courses, testimonials) must be isolated in a separate `data.js` file to ensure the React components remain clean and easily updatable.

## 2. UI/UX & Design Guidelines

* **Color Palette:**
* Primary: Deep/Navy Blue (for trust, corporate feel, and deep contrast).
* Accent: Premium Gold (for highlights, buttons, and hover states).
* Backgrounds: Clean whites and very light gray/blue tints for minimal sections. Use large, high-quality background images for pages with less text content to maintain visual weight.


* **Typography:** Modern Sans-Serif (e.g., Inter, Syne, or Plus Jakarta Sans) for clean readability and a premium feel.
* **Animations (GSAP):**
* Smooth page transitions.
* Parallax scrolling effects on hero images and backgrounds.
* Staggered fade-up animations for lists (e.g., the country lists and course items).
* Magnetic button effects for navigation items and floating action buttons.



## 3. Core Architecture & Global Components

### 3.1. Navigation Menu

* **Sticky Header:** Transparent at the top, transitioning to a solid Deep Blue on scroll.
* **Menu Items:** Home, About Us, Achievements, Study Abroad, Job Abroad, Contact Us.
* **Dropdown Behavior:** Hovering/Clicking "Study Abroad" or "Job Abroad" triggers a sleek, animated dropdown menu listing available countries (e.g., UK, US, Canada, Ukraine).

### 3.2. Floating Action Buttons (Persistent)

* **Location:** Fixed to the middle-right or bottom-right of the viewport.
* **Visibility:** Persistent upon scrolling down the page.
* **Buttons:**
1. **WhatsApp Chatbot Icon:** Directs users to a WhatsApp chat.
2. **Inquiry Form Icon:** Opens a custom popup/modal overlay containing a quick Google Form-style inquiry submission form.



### 3.3. Footer

* Minimalist layout containing standard links.
* Must include an embedded or popup-triggering inquiry form that activates when the user reaches the bottom of the page.

## 4. Page Specifications

### 4.1. Home Page

* **Hero Section:** Full-screen immersive layout with a striking background image, bold gold typography, and a clear Call to Action (CTA).
* **About Us Preview:** A brief, beautifully typeset introduction.
* **Testimonials:** A sliding carousel or masonry grid of student success stories.
* **Contact/Footer:** Seamless transition into the contact section.

### 4.2. Country Detail Page (Dynamic Route: `/study-abroad/:country`)

* **Hero Section:** * High-quality background image representative of the country.
* The Country's Flag integrated elegantly into the header design.
* Country Name in large, bold typography.


* **Overview:** A small, nicely formatted description paragraph about studying/working in that specific country.
* **Courses Provided Section:** A list of available programs (e.g., Medicine, MBBS).

### 4.3. Course Accordion Component (Within Country Page)

* **UI Pattern:** Expanding Accordion / Dropdown list.
* **Behavior:** When a user clicks a specific course container (e.g., "MBBS"), the box smoothly expands downwards (using GSAP `height` animation) to reveal detailed content inside, such as the list of specific universities or colleges offering that course in that country.
* **Design:** Clean borders, gold arrow/plus icons that rotate upon expanding.

## 5. Data Architecture (`data.js`)

The application must dynamically map over a separate data file. Antigravity should structure `data.js` to look something like this:

```javascript
export const siteData = {
  studyAbroad: [
    {
      id: "uk",
      name: "United Kingdom",
      flag: "/assets/flags/uk.svg",
      heroImage: "/assets/images/uk-hero.jpg",
      description: "Experience world-class education...",
      courses: [
        {
          courseName: "MBBS",
          details: ["University of Oxford", "Imperial College London"]
        },
        {
          courseName: "Medicine",
          details: ["King's College", "University of Edinburgh"]
        }
      ]
    },
    // ... US, Canada, Ukraine
  ],
  jobAbroad: [ /* Similar structure */ ],
  testimonials: [ /* Array of testimonial objects */ ]
};

```

## 6. Execution Instructions for Antigravity

1. **Setup:** Bootstrap the React application. Create a dedicated `/data` folder for `data.js`.
2. **Routing:** Implement `react-router-dom` for navigating between Home and the dynamic Country pages.
3. **Componentization:** Break down the UI into `Navbar`, `FloatingActions`, `Hero`, `CountryDropdown`, and `CourseAccordion`.
4. **Styling & Animation:** Apply the Gold/Blue theme globally. Integrate GSAP `ScrollTrigger` for scroll-based reveals and `gsap.to()` for the accordion dropdowns and hover states.

---