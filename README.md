# ChefMenuApp 
**Module:** Mobile App Scripting (MAST5112)  
**Part 2 and 3**       
**Student:** Emily Qhawekazi Maramani (ST10482946)
**Lecturer:** Mr Asiphe Magaudini

## Overview
ChefMenuApp is a React Native (Expo) mobile application developed for a private chef named Christoffel.  
It allows the chef to create and view dynamic menus for clients.

## Features Implemented (Part 2)
- Add new dishes with **Name**, **Description**, **Course**, and **Price**
- **Predefined courses** (Starter, Main, Dessert, Beverage)
- **Menu list** displays added dishes instantly
- **Total item counter** updates automatically
- **Search** and **Filter chips** for quick browsing
- Simple, clean, and consistent user interface

## Upgrades & Features Added (Part 3)
- **AddDishScreen**: dedicated screen for adding dishes with **input validation**  
- **GuestScreen**: separate screen for guest users to view and filter dishes  
- **MenuContext**: centralized state management for menu items across screens  
- **calculateAverages utility**: computes average price per course and displays on HomeScreen  
- **Enhanced UI/UX**:  
- Course filter chips with selection highlighting  
- Navigation buttons for smooth transitions  
- Consistent styling and layout improvements  
- Modular code structure (`components`, `screens`, `utils`) for maintainability  

## App Structure
/components/
DishCard.js # Component for displaying dish cards
/screens/
HomeScreen.js # Main screen with search, filter, and summary
GuestScreen.js # Guest view with course filter
AddDishScreen.js # Form to add new dishes
/utils/
calculations.js # Utility to calculate average prices per course
App.js # Navigation & MenuContext provider
index.js # Entry point

## Technologies
- Snack / Expo  
- React Native  
- React Hooks: `useState`, `useMemo`, `useContext`  
- React Native Picker  
- React Navigation (Stack)  

## Changelog (Part 3 submission)
- feat: add MenuContext and navigation (Home, AddDish, Guest) — allows global state for menu items.
- feat: Home screen with search, filters, total count and averages (per-course).
- feat: Add Dish screen (moved from home) — chef can add new menu items (name, description, course, price).
- feat: Guest screen with course filter and remove option for demo/poe marking.
- feat: DishCard component — reusable UI for rendering dish details and remove action.
- fix: calculateAverages formatting and NaN handling (`Rxx.xx`).
- chore: UI consistency and style tweaks.
- docs: README containing this changelog and PoE checklist.
- Date	File / Component	Change Description
- 2025-11-09	Homescreen.js	Refactored home screen to display full menu, average prices, and course filter. Added for, while, and for-in loops to calculate averages. Improved UI for mobile and web.
- 2025-11-09	AddDishScreen.js	Added numeric validation for price. Added navigation buttons to Home and View Menu.
- 2025-11-09	ViewMenuScreen.js	Implemented delete functionality to remove dishes from global menu. Scrollable list added.
- 2025-11-09	DishCard.js	Reusable component for displaying dishes; includes delete button.
- 2025-11-09	global/menu.js	Created global array to store all dishes; functions for adding, removing, and retrieving dishes.
- 2025-11-09	App.js	Updated navigation stack to include HomeScreen, AddDishScreen, and ViewMenuScreen.
- 2025-11-09	UI / Styling	Improved colors, spacing, font sizes, and scrollability to ensure app is user-friendly on mobile and web devices.
- 2025-11-09	Loops & Functions	Added explicit for, while, and for-in loops as per POE rubric.
*UI Refinements*
- Adjusted typography, spacing, and card layout.
- Added visual feedback on selected filters.
- Improved readability of dish metadata labels.

*Component Architecture*
- Extracted dish rendering logic into DishCard component.
- Introduced helper functions to keep screen components clean.

*Initial Build*
- Created basic project structure with Expo.
- Added starter screens and placeholder content.
- Connected fundamental state hooks for dish input.

## How to Run
1. Clone the repo  
   https://github.com/st10482946/ChefMenuApp.git
   cd ChefMenuApp
   npm install
   npx expo start

## Snack - Expo Link
   https://snack.expo.dev/@qhawekazi/mast-part-3

## Github Repo Link
   https://github.com/St10482946/ChefMenuApp.git

## Video demonstration link**
   https://www.loom.com/share/0cff8440254142cea2089c595d6fdd38