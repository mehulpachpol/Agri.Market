// import { ADD_ITEM, CART_GET_FAILURE, CART_GET_REQUEST, CART_GET_SUCCESS, DEL_ITEM } from "../constants/cartConstant";

// export const getCartData = (id) => (dispatch) => {
//     dispatch({
//       type: CART_GET_REQUEST,
//     });
  
//     fetch(`http://localhost:8080/cart/user/${id}`, {
//         method: 'GET',
//       })
//       .then(response => response.json())
//       .then(data => {
//           dispatch({
//             type: CART_GET_SUCCESS,
//             payload: data,
//           });
//       })
//       .catch(error => {
//         dispatch({
//           type: CART_GET_FAILURE,
//           payload: "Error in loading cart",
//           authenticate: false,
//         });
//       });
//   };

//   export const addCartData = (uid, pid) => (dispatch) => {
//     dispatch({
//       type: CART_GET_REQUEST,
//     });
  
//     fetch(`http://localhost:8080/user/${uid}/product/${pid}`, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//       })
//       .then(response => response.json())
//       .then(data => {
//           dispatch({
//             type: CART_GET_SUCCESS,
//             payload: data,
//           });
//       })
//       .catch(error => {
//         dispatch({
//           type: CART_GET_FAILURE,
//           payload: "Error in loading cart",
//           authenticate: false,
//         });
//       });
//   };

//   export const addCart = (product) =>(dispatch)=>{
//     dispatch({
//         type: ADD_ITEM,
//         payload:product

//       });

      
// }

// // For Delete Item to Cart
// export const delCart = (product) =>{
//     return {
//         type: DEL_ITEM,
//         payload:product
//     }
// }