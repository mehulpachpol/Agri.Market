import { useState } from "react";
import { Navbar, Main, Product, Footer } from "../components";
import Login from "./Login";
import { Button } from "react-bootstrap";

function Home() {

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