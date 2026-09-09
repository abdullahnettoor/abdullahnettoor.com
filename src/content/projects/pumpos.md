---
title: PumpOS
description: An operating record for Indian fuel stations that connects shifts, nozzle readings, cash, stock, credit, accounting, and owner reporting.
eyebrow: Selected work · Fuel retail operations
accent: "#3157db"
accentInk: "#ffffff"
heroCopyColor: "#e1e6ff"
liveUrl: https://pumpos.app
repositoryUrl: https://github.com/abdullahnettoor/pumpos
facts:
  - label: Operating context
    value: Indian fuel stations
  - label: Continuity
    value: Offline-ready desktop
  - label: System shape
    value: Connected business events
  - label: Public proof
    value: Live site and repository
operationTitle: A station day was closing in pieces.
operation: Nozzle readings, drawer cash, tank movements, fleet credit, expenses, and reports often live across registers, spreadsheets, and phone calls. Mismatches surface late, when the shift is already being handed over.
workflowTitle: One business day connects the operation.
workflow:
  - label: Shift
    title: Capture the operational opening
    description: Opening cash, operators, and nozzle context establish the working state.
  - label: Record
    title: Link activity to business events
    description: Sales, collections, purchases, expenses, and stock movements belong to the same operating day.
  - label: Reconcile
    title: Surface variance before handover
    description: Nozzle-derived volume, expected cash, counted cash, and tank position can be reviewed together.
  - label: Report
    title: Give the owner one position
    description: Dashboards and immutable snapshots summarize the same record instead of rebuilding it after the fact.
concernsTitle: Continuity matters where the network cannot be trusted.
concerns:
  - label: Offline operation
    title: Keep the counter moving when connectivity drops.
    description: The public product description commits to an offline-ready desktop client and synchronization when the connection returns.
  - label: Traceability
    title: Preserve how the number became the number.
    description: Audit history, event history, and business-day snapshots are product requirements, not administrative extras. They are how staff investigate a mismatch.
boundary: "Implementation note: synchronization protocol, conflict strategy, database topology, and service architecture are not described here because those details have not yet been confirmed for publication."
inspectTitle: The operating model is public.
inspect: The site includes detailed workflows for shifts, inventory, accounting, credit, reports, role-based access, multi-station visibility, and offline continuity.
nextProject: hibah
nextLabel: "Hibah: recurring giving with a clear trail"
---
