import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255,.5),
      rgba(255, 255, 255,.5)
    ),
    url("https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [ setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
        <>
        <Container>
        <div
            style={{
                height:"100vh",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}
            >

            <div
                style={{
                    border:"none",
                    width:120,
                    padding:"100px",
                    backgroundColor:"teal",
                    color:"white",
                    fontSize:"30px",
                    fontWeight:"600",
                    cursor:"pointer",
                }}
                >
                    Successfull!
                </div>
                <div
                style={{
                    border:"none",
                    width:120,
                    borderRadius:5,
                    padding:"100px",
                    backgroundColor:"#7A9798",
                    color:"white",
                    fontSize:"20px",
                    fontWeight:"500",
                    cursor:"pointer",
                }}
                >{}
                    Your order is being prepared.Thanks for Shopping!
                </div>
                </div>
                
        
        </Container>
       
        
         </>
    )
}



  
export default Success;
