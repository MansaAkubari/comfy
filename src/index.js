import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.render(
//   <Auth0Provider>
//     <UserProvider>
//       <CartProvider>
//         <FilterProvider>
//           <ProductsProvider>
//             <App />
//           </ProductsProvider>
//         </FilterProvider>
//       </CartProvider>
//     </UserProvider>
//   </Auth0Provider>,
//   document.getElementById("root")
// );

// dev-4ebt1pcn1ea2prtb.us.auth0.com
// w4a4kZ11E3fVyM866aovQaBB2P5pchoD
// fof7hAJQPJ2gGNU6bowKwWbfJVD5sQSCj6_8Nw93_agnOC7f31stkbCwe688dCc7

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
