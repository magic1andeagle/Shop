import App from "../../App";
import About from "../../pages/About";
import Cart from "../../pages/Cart";
import Favourites from "../../pages/Favourites";
import Items from "../../pages/Items";
import { sportItemsContext } from "../../context/context";

export const START_PAGE_ROUTE = '/'
export const ABOUT_PAGE_ROUTE = "/about";
export const CART_PAGE_ROUTE = "/cart";
export const FAVOURITES_PAGE_ROUTE = "/favourites";
export const TEST_ROUTE = '/test'

export const publicRoutes = [
  { path: ABOUT_PAGE_ROUTE, element: <About /> },
  { path: START_PAGE_ROUTE, element: <Items/> },
  { path: CART_PAGE_ROUTE, element: <Cart/> },
  { path: FAVOURITES_PAGE_ROUTE, element: <Favourites/> }
];

export const authRoutes = [
    { path: TEST_ROUTE, element: <About/> }
]
