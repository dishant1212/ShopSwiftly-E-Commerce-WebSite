import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate,Link } from "react-router-dom";
import {fetchData} from "../../../../../redux/slices/womenClotheSlice"
import { addItem } from "../../../../../redux/slices/cartSlice"

function WomenClothes(){

        const dispatch=useDispatch()
        const navigate=useNavigate()  
       const womenClothes=useSelector(state=>state.WomenClothes)
       const signInData=useSelector(state=>state.SignInData)
  
   function proccedToBuyHandler(){
    if(signInData.data){
      alert("Congraculation Successfully Buy")
    }else{
      alert("Please Sign in")
       navigate("/login")
    
    }
  }
      const addToCart=(item)=>{
      dispatch(addItem(item))
  } 

useEffect(()=>{
   dispatch(fetchData())
},[])

    return(
        <>
   {/* <div style={{height:"60vh",width:"100%" ,backgroundImage:`url(${"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/7448c89d-c754-4be0-8ecc-7012a78193d1._CR0%2C0%2C3000%2C600_SX1500_.jpg"})` ,backgroundSize:"cover"}}>

   </div> */}
    <div className="container">
       
          {womenClothes.data.map(item => (
            <div className="container-card" key={item.id}>
              <img src={item.imageUrl} alt={item.name} className="cotainer-card-Image" />
              <div className="container-cart-Details">
                <h3 className="container-cart-Details-headding">{item.name}</h3>
                <p  className="container-cart-Details-para">Price:&#8377; {item.price}</p>
                
              </div>
              <div className="container-card-btn">
               <button className="container-addToCart-addBtn" onClick={() => addToCart(item)}>Add to Cart</button>
              <button className="container-addToCart-buyBtn" onClick={proccedToBuyHandler}>Buy</button> 
               </div>
            </div>
          ))}
        </div> 
       {/* { clothes.data.length>0 && <div className="pagination-conatiner">
          
             
          
          <button className="pagination-btn" onClick={ previousPageHandler}>Previous</button>
          <p>
            {page} of { (clothes.data.length / 12)}
          </p>
          <button className="pagination-btn" onClick={nextPageHandler}>Next</button>
       } */}

    </>
    )
}

export default WomenClothes