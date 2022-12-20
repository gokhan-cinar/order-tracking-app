
## Technology Stack

- Vuex
- Vue router
- Element-ui
- Vite

## View Structure

- Orders: Page where orders are listed
- CreateOrder: The page where the new order to be added is created

## Component Structure

- Order Folder  
    - OrderItem.Component: Returns a list of data passed to this component as a prop
    - OrderItemList.Component: Shows the order list of the OrderItem component
    - OrderItemCreate.Component: This component has an order creation form and lists the selected orders
    - OrderItemDetailsBoxes.Component: This component shows the Delivery Details
- PageTitle Folder
    - Index.Component: The area where the page titles are shown
- SideBar Folder
    - SideBar.Component: Layer where menu and submenu links are combined
    - SidebarItem.Component: The Component that submenu links and orders are filtered
    - SidebarMenu.Component: The component containing icons located vertically on the left


## Project setup

```
npm install
```

## Project Start

```
npm run serve
```
