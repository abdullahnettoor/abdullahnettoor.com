---
name: Abdullah Nettoor Portfolio
description: A product-first gallery for a backend engineer who ships complete systems.
colors:
  canvas: "#f2f1eb"
  paper: "#fbfaf5"
  ink: "#102c27"
  muted: "#526761"
  line: "#cbd1ca"
  hibah-saffron: "#e5ba62"
  hibah-green: "#214d43"
  pumpos-cobalt: "#3157db"
  pumpos-night: "#101a45"
  conversation-coral: "#e66248"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 6.3vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.93
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.68rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  control: "8px"
  product-window: "15px"
  room: "30px"
spacing:
  compact: "12px"
  standard: "24px"
  room: "clamp(1.25rem, 3vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.1rem"
    height: "48px"
---

# Design System: Product Rooms

## Overview

**Creative North Star: "The Engineering Throughline"**

The portfolio is a calm spatial system around engineering judgment. Broad color rooms create pace, while an unbroken line connects observation, domain modeling, implementation, and shipping. Products appear as evidence inside that practice rather than owning the homepage.

The memorable behavior is the transition from principle to proof. Each engineering idea is followed by a real product or repository example, and detailed application stories move to dedicated case-study pages.

**Key Characteristics:**
- Engineering ideas at architectural scale
- Quiet shared navigation and typography
- Broad color fields that pace the narrative
- Sparse, factual annotations
- One continuous throughline rather than scattered animation

## Colors

The shared palette uses mineral neutrals and deep green-black ink. Each project receives one substantial color field instead of many small accents.

- **Canvas:** The default breathing space around rooms.
- **Paper:** Product windows and high-legibility content surfaces.
- **Ink:** Shared text, buttons, and the open-source workshop.
- **Hibah Saffron:** Owns the complete opening room.
- **PumpOS Night and Cobalt:** Own the operational second room and its product state.
- **Conversation Coral:** Reserved for the final contact room and focus indication.

**The Room Color Rule.** A project color owns a whole region and never appears as scattered decoration across unrelated sections.

## Typography

Archivo is broad, direct, and contemporary at display scale while remaining compact and readable for body copy. Azeret Mono appears only for state, data, and technical annotations.

**The Engineering Thesis Rule.** Engineering ideas carry the largest type after the opening thesis; product names stay compact on the homepage and expand only on case-study pages.

## Layout

Desktop rooms use an asymmetric two-part composition inside a 1480px maximum shell. A dominant product surface sits beside a narrow contextual edge. Thresholds reverse the balance by giving explanation more space. Below 1050px, rooms become a single column. Mobile keeps the sequence strict: product, context, action. Content remains visible without animation.

## Elevation & Depth

The system is flat by default. Depth comes from nested tonal surfaces and one structural shadow (`0 28px 70px rgba(28, 43, 33, .2)`) beneath large product windows. Small content never floats in independent cards.

## Shapes

The gallery shell uses broad, softly squared rooms. Product surfaces use modest radii and crisp internal geometry. Pills are reserved for state labels and compact controls.

## Components

### Buttons
- **Shape:** Compact squared control with an 8px radius and a 48px minimum height.
- **Primary:** Deep ink on light rooms. Warm yellow on the PumpOS night room.
- **Hover / Focus:** Moves upward by 3px on hover; keyboard focus uses a 3px conversation-coral outline.

### Product Windows
- **Shape:** 15px radius with crisp, flat internal rows.
- **Depth:** The only consistently elevated object in a room.
- **Content:** Uses representative public product language and labels itself as representative.

### Navigation
- **Desktop:** Quiet text links with one underlined conversation action.
- **Mobile:** Only the identity and conversation action remain; the action becomes a 44px outlined capsule.

## Do's and Don'ts

### Do:
- **Do** let one product or idea dominate each viewport.
- **Do** use real product language and verifiable claims.
- **Do** create variety through each project's material and content.
- **Do** preserve generous quiet space around dense product surfaces.

### Don't:
- **Don't** use a custom cursor, marquee, skill cloud, or decorative metrics.
- **Don't** turn the portfolio into a simulated terminal or admin dashboard.
- **Don't** repeat the same card grid for every section.
- **Don't** invent architecture, scale, adoption, or performance claims.
