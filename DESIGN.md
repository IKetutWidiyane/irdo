# DESIGN.md

# Design Philosophy

The product must feel like software built by a professional product team.

The design should be timeless, calm, highly usable, and production-ready.

Never generate interfaces that look like generic AI templates.

Every screen should resemble products such as:

- Linear
- Vercel
- Stripe Dashboard
- Notion
- Raycast
- GitHub
- Arc Browser
- Framer
- Clerk
- Resend

---

# Overall Principles

Prioritize:

- clarity
- readability
- hierarchy
- whitespace
- consistency
- accessibility

Every design decision should have a purpose.

Less is more.

Avoid unnecessary decorations.

---

# Visual Style

The interface should look:

- modern
- minimal
- professional
- premium
- software-first

Never look:

- playful
- childish
- over-designed
- futuristic
- cyberpunk

---

# Color System

Prefer neutral colors.

Examples:

Background

White
Slate-50
Neutral-50

Surface

White
Slate-100

Primary

Black
Slate-900

Secondary

Slate-600

Border

Slate-200

Hover

Slate-100

Error

Red-500

Success

Emerald-500

Warning

Amber-500

Avoid:

- rainbow gradients
- multiple accent colors
- glowing effects
- neon
- oversaturated colors

Use one primary accent color only.

---

# Typography

Use modern sans-serif fonts.

Preferred order:

Geist
Inter
IBM Plex Sans
SF Pro Display

Hierarchy:

H1

36–48px
Bold

H2

30–36px

H3

24px

Body

16px

Small

14px

Caption

12px

Rules:

Never use more than three font sizes inside one card.

Maintain consistent line height.

Never justify text.

---

# Spacing

Use an 8-point spacing system.

Allowed spacing:

4
8
12
16
24
32
40
48
64
80
96

Never place elements too close together.

Whitespace improves perceived quality.

---

# Border Radius

Buttons

8px

Cards

12px

Inputs

8px

Modal

16px

Avoid:

24px+
pill-shaped everything

---

# Shadows

Use very subtle shadows.

Prefer borders over shadows.

Example:

shadow-sm

Avoid:

huge floating shadows

colored shadows

multiple shadow layers

---

# Borders

Use borders frequently.

Border color:

slate-200

Border width:

1px

Cards should often rely on borders instead of shadows.

---

# Layout

Prefer:

max-width

1280px

Centered content

Generous padding

Grid system

Use:

12-column grid

or

CSS Grid

Avoid:

full-width text blocks

---

# Navigation

Navigation should feel similar to:

Linear

GitHub

Vercel

Use:

Simple navbar

Clear spacing

Small logo

Minimal links

No oversized CTA buttons.

---

# Cards

Cards should:

have padding

have borders

have subtle hover states

Avoid:

glassmorphism

large shadows

3D effects

---

# Buttons

Primary

solid

Secondary

outline

Ghost

transparent

Danger

red

Button height

40–44px

Avoid:

gradient buttons

glowing buttons

oversized buttons

---

# Forms

Inputs:

44px height

8px radius

Clear labels

Proper spacing

Validation messages

Never rely only on placeholders.

---

# Icons

Preferred libraries:

Lucide

Heroicons

Tabler Icons

Never mix icon libraries.

Icon size:

16
18
20
24

---

# Animations

Animation should be subtle.

Duration

150–250ms

Use:

fade

opacity

small translateY

small scale

Never:

bounce

spin forever

large zoom

flash

parallax

Animations should support usability.

---

# Images

Use images only when necessary.

Prefer:

illustrations

screenshots

product previews

Avoid:

generic stock photos

AI-generated people

random illustrations

---

# Empty States

Always include:

icon

title

description

primary action

The interface should never feel unfinished.

---

# Loading States

Prefer:

Skeleton loaders

Avoid:

Large spinners

Loading text everywhere

---

# Tables

Tables should:

have zebra-free rows

clear borders

sticky headers if needed

hover states

sorting indicators

---

# Dashboard

Dashboard layout should resemble:

Linear

GitHub

Stripe

Sections:

Overview

Analytics

Recent Activity

Quick Actions

Settings

---

# Responsive Design

Desktop first

Then:

Tablet

Mobile

Avoid horizontal scrolling.

Navigation should collapse naturally.

---

# Accessibility

Minimum contrast ratio:

WCAG AA

Every button:

focus state

Every form:

label

Every image:

alt text

Keyboard navigation must work.

---

# Components

Prefer reusable components.

Examples:

Button

Input

Textarea

Select

Badge

Alert

Modal

Drawer

Dropdown

Tabs

Accordion

Card

Table

Tooltip

Popover

Pagination

Breadcrumb

Avatar

---

# Code Style

Prefer composition.

Avoid duplicated UI.

Create reusable components.

Never hardcode spacing repeatedly.

---

# Tailwind Guidelines

Prefer utilities.

Avoid unnecessary custom CSS.

Prefer:

max-w-7xl

mx-auto

gap-6

space-y-6

rounded-xl

border

bg-background

text-foreground

---

# Hero Section

Keep hero compact.

Headline

One sentence.

Subheadline

Maximum two lines.

One primary CTA.

One secondary CTA.

Avoid huge illustrations.

---

# Landing Page

Recommended order:

Hero

Features

Benefits

Statistics

Testimonials

Pricing

FAQ

CTA

Footer

---

# Dark Mode

Dark mode should not simply invert colors.

Use neutral dark backgrounds.

Avoid pure black.

---

# Performance

Avoid heavy animations.

Avoid unnecessary JavaScript.

Optimize images.

Lazy load where possible.

---

# Design References

Always think:

Would this look believable on:

- Linear?
- Vercel?
- Stripe?
- GitHub?

If the answer is "no",

redesign it.

---

# Things To Avoid

Never generate:

❌ giant gradients

❌ glassmorphism

❌ neumorphism

❌ glowing buttons

❌ oversized rounded corners

❌ excessive blur

❌ floating cards

❌ unnecessary icons

❌ random colors

❌ huge hero sections

❌ walls of text

❌ decorative animations

❌ inconsistent spacing

❌ AI-looking layouts

---

# Final Rule

The final interface should feel handcrafted by experienced product designers.

Every page must be something that could realistically appear on:

- Linear
- Vercel
- Stripe
- Notion
- GitHub

When in doubt:

choose simplicity over decoration.