---
title: Hibah
description: A structured workflow for organizations running recurring donor programs, from personal enrollment links to payment verification, reminders, and gratitude.
eyebrow: Selected work · Recurring donor operations
accent: "#e5ba62"
accentInk: "#102c27"
heroCopyColor: "#30483f"
liveUrl: https://hibah.co.in
facts:
  - label: Product state
    value: Beta
  - label: Primary users
    value: Organizations and donor teams
  - label: Payment path
    value: Direct UPI to organization
  - label: Public proof
    value: Live product
operationTitle: Recurring giving had no single operational record.
operation: Enrollment, contribution history, UPI references, reminders, and gratitude material can drift across spreadsheets and WhatsApp conversations. Hibah gives both donors and teams one understandable path.
workflowTitle: From donor intent to a verified ledger entry.
workflow:
  - label: Enroll
    title: Personal access without another account
    description: Each donor receives a private passwordless link with their contribution history and payment actions.
  - label: Contribute
    title: Payments remain direct
    description: The donor uses the organization’s UPI details. Hibah does not act as the payment gateway.
  - label: Verify
    title: Reference numbers become reviewable state
    description: Teams verify submitted UPI transaction references and keep a chronological operational trail.
  - label: Follow up
    title: Reminder and gratitude stay connected
    description: Pending contributions can open pre-filled WhatsApp reminders, while verified contributions can produce branded gratitude material.
concernsTitle: The backend has to preserve trust without entering the money flow.
concerns:
  - label: Boundary
    title: Model payment evidence, not bank credentials.
    description: Public product behavior is centered on submitted UPI references and organization-side verification. Hibah states that it does not record bank credentials or UPI PINs.
  - label: Isolation
    title: Keep each organization’s operation separate.
    description: Organizations receive isolated workspaces with roles for owners, administrators, and operators. The product language makes tenant separation part of the trust model.
boundary: "Implementation note: database design, service boundaries, and deployment architecture are not described here because those details have not yet been confirmed for publication."
inspectTitle: The product is live in beta.
inspect: The public site documents the donor portal, UPI verification workflow, team roles, reminder path, branded output, and organization-level customization.
nextProject: pumpos
nextLabel: "PumpOS: one connected business day"
---
