---
sidebar_position: 2
tags:
  - enterprise
---

# Views

A view is a saved way of looking at the rows in a base. Each view remembers its own filters, sorts, visible properties, column layout, and grouping, so you can keep a table for editing and a board for tracking the same records. Views appear as tabs above the base. Click a tab to switch to it.

A base supports two view types: **Table** and **Kanban**.

## Table View

The table view is a grid of rows and columns. It is the default when you create a base.

- Add a row — use the add-row control at the bottom of the grid. The first editable cell is focused so you can start typing.
- Edit a cell — click into it. Each property type has its own editor: a text box, a number input, a dropdown for Select and Status, a picker for Person and Page, a date picker, a checkbox toggle, and so on.
- Reorder rows — drag a row by its row number on the left.
- Select rows — use the checkbox on the row number. Select several to act on them together.
- Delete rows — select one or more rows and delete them from the selection bar.
- Expand a row — open a row as a record to see and edit every property at once (see below).
- Hide or show columns — use the properties control in the toolbar to choose which properties are visible.
- Reorder and resize columns — drag column headers and their resize handles. See [Properties](./properties.md).

## Kanban View

The Kanban view is a board of cards grouped into columns.

- The board is grouped by a **Select** or **Status** property. Each option becomes a column, and rows without a value are collected in a **No value** column.
- Move a card between columns to change its value for the grouping property.
- Reorder cards within a column by dragging them.
- Reorder or hide columns to focus on the stages that matter.
- **Card properties** — choose which properties appear on each card, in addition to the title.

To group a board, the base needs at least one Select or Status property.

## Creating and Managing Views

1. Click **+** next to the view tabs.
2. Choose **Table** or **Kanban**.
3. For a Kanban view, pick the Select or Status property to group by. If the base has exactly one such property, it is used automatically.

To rename, reorder, or delete a view, use its tab.

## The Row Record

Expanding a row opens it as a record in a dialog that lists every property for that row. From the record you can:

- Edit any property.
- Add a new property to the base.
- Move to the previous or next row.
- Delete the row.

## Exporting to CSV

Use the export control in the toolbar to download the base as a CSV file. The export includes the rows and the visible columns.

## Opening an Inline Base Full-Screen

A base embedded in a document has an expand control in its toolbar that opens it as a full page, giving you the full grid to work in. Close it to return to the document.
