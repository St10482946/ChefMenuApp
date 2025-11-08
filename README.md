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

## Changelog
*Part 3 Submission*
- Added MenuContext to manage global state for menu items.
- Implemented React Navigation with a stack containing Home, AddDish, and Guest screens.
- Refactored the “add dish” form into a separate AddDishScreen as required.
- Added GuestScreen to simulate a customer browsing the menu.
- Implemented course filtering using chip-style UI buttons in both Home and Guest screens.
- Added DishCard reusable component to display menu items consistently.
- Added remove item functionality (demonstrated in Guest view).
- Implemented search functionality with useMemo for performance optimization.
- Added average price per course calculation via calculateAverages utility.
- Added total dish count summary to Home screen.
- Fixed average currency formatting to always display two decimals (Rxx.xx).
- Added input validation and alert feedback for empty form fields.
- Improved layout consistency and styling across screens.
- Updated README with documentation, test instructions, and video demonstration notes.

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
   git clone https://github.com/st10482946/ChefMenuApp.git
   cd ChefMenuApp
   npm install
   npx expo start

   ## Github Repo Link
   git remote add origin https://github.com/ST10482946/ChefMenuApp.git

   ## Video demonstration link**
   https://www.loom.com/share/773f58af85c849f580b4ec9482884017?sid=59ebde03-549b-48af-b678-e9b859db7a57