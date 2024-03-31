import { useEffect, useState } from "react";
import { Navbar, Main, Product, Footer } from "../components";
import Login from "./Login";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../redux/action/cartAction";

function Home() {

  // const dispatch = useDispatch()
  // let id = sessionStorage.getItem("id")
  // console.log(id);

  // const cartData = useSelector(state => state.cart)
  // const carts = cartData.response;

  // useEffect(() => {
  //   dispatch(getCartData(id))
  // }, [])
 

  const [loggedIn , setLoggedIn] = useState(false);
  return (
    <>
    {/* {loggedIn?<Button className="btn btn-primary" onClick={()=>setLoggedIn(!loggedIn)}>Login Out</Button>:
    <Button className="btn btn-danger" onClick={()=>setLoggedIn(!loggedIn)}>Log In</Button>
    }
    
    {loggedIn?<>
      <Navbar />
      <Main />
      <Product />
      <Footer />
      </> :
      <Login/>
      } */}
    <Navbar />
      <Main />
      <Product />
      <Footer />
    </>
  )
}

export default Home