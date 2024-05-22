import { Button } from "@mui/material";

export const GroupedCart = (cartItem) =>{
    const updatedItems = [];
    cartItem.forEach(item => {
        const existingItem = updatedItems.find(updatedItem => updatedItem.info.id === item.id);
        if (existingItem) {
          existingItem.count += 1;
        } else {
          updatedItems.push({ info: item, count: 1 });
        }
      });
      // console.log(updatedItems)
      return updatedItems;
  }

export const CountButton =(cartItem,item,setCartItmes)=>{
    const buttons = [
      <Button
        onClick={()=>{
          if (item.count>1){
            const index = cartItem.findIndex(item1 => item1.id === item.info.id);
            if (index !== -1) {
              cartItem.splice(index, 1);
          }
          setCartItmes([...cartItem])
          }
            
  
        }}
        key="-"
        style={{
          width: "40px",
          padding: "3px",
          borderColor: "#DDDDDD",
          background: "#F7FBFC",
        }}
      >
        -
      </Button>,
      // <Button key="two">Two</Button>,
      <div className="border flex items-center justify-center w-10">
        <p>{item.count}</p>
      </div>,
      <Button
      onClick={()=>{
        // console.log(cartItem)
        setCartItmes([...cartItem, item.info])
      }}
        key="+"
        style={{
          width: "40px",
          padding: "3px",
          borderColor: "#DDDDDD",
          background: "#F7FBFC",
        }}
      >
        +
      </Button>,
    ];
    return buttons;
  }

export const TotalPrice = (cartItem) => {
  return cartItem.reduce((total, item) => total + item.newprice, 0);
};

export const RemoveItem =(cartItem,setCartItmes,selectedItem)=>{
  // console.log(cartItem)
  const newCartItems = cartItem.filter(item => item.id != selectedItem.info.id);
  setCartItmes(newCartItems);

}