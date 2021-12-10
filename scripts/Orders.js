import { getOrders, getMetals, getStyles, getSizes } from "./database.js";


const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const orders = getOrders()

const buildOrderListItem = (order) => {
    const foundMetal = metals.find((metal) => metal.id === order.metalId)
    // const totalCost = foundMetal.price

    const foundSize = sizes.find((size) => size.id === order.sizeId)
    const foundStyle = styles.find((style) => style.id === order.styleId)
    
    const totalCost = foundStyle.price + foundMetal.price + foundSize.price
   
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>` 

   return `<li>
   Order #${size.id} cost ${costString}
    </li>` 

    return `<li>
    Order #${style.id} cost ${costString}
    </li>` 
};

export const Orders = () => {
    
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()
    
    let html = "<ul>"

    const listItems = orders.map((order) => buildOrderListItem(order));
    

    html += listItems.join("")
    html += "</ul>"

    return html
}
