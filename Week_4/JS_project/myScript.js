const products = [];
const cart = [];
const orders = [];
const customers = [];

const bottle1 = {
    name: "Retro",
    price: 20,
    id: 1,
    available: true,
    picture: "bottle_retro.jpg",
    desc: "Retro bottle",
    details: {
        color: "white",
        volume_1: 1,
        material: "Steel",
        sustainablity: "",
        isolation_h: "24h hot or cold"
    }
};
console.log(1, bottle1)


products.push(bottle1);
// To do: declare bottle 2 to n and push them to products list

function addToCart(productID) {
    let productInList = false;
    //check if product is already in cart
    cart.forEach(function(product){
        //if it is, increase quantity by
        if(productID === product.id){
            product.quantity++    
            productInList = true;
        }

    });
    
    //if not: 
    if(!productInList){
        cart.push({
            id: productID,
            quantity: 1
        });
    }   
}

function isNewCustomer(){
    let newCustomer = false;
    //check if product is already in cart
    customerList.forEach(function(customer){
        //if it is, increase quantity by
        if(email === customer.email){        
            return false;
        }
        
    });

    return true;
}

function createCustomer(customer){
    customer.push({
        id: customer.length + 1,
        email: customer.email,
        fname: customer.fname,
        lname: customer.lname
    });// to do: add all needed information
}

function getCustomerID(email) {
    customers.forEach(function(customer) {
        //if it is, increase quantity by
        if(email === customer.email){        
            return customer.id;
        }
    });
}

function getProductInfo() {
    let resultArr = [];
    cart.forEach(function(item){
        const obj = {};
        let productID = item.id;
        let productQuantity = item.quantity;
        products.forEach(function(product){
            if(product.id === productID){
                obj = product;
                obj.quantity = item.quantity;
                obj.productTotal = product.price * productQuantity;
            }
        });
        resultArr.push(obj);
    });
    return resultArr;
}
function calculateTotal(productInfos){
    let total = 0;
    productInfos.forEach(function(product){
        total += product.productTotal;

    });
    return total;
}

function createOrder(formData){
   if(isNewCustomer(formData.email)){
    createCustomer(form.Data);
   }

   let customerID = getCustomerID(formData.email);
   let productInfos = getProductInfo();
   let total = calculateTotal(productInfos);
   let shippingAddress = getShippingAddress(formData);

   const order  = {
        id: orders.length + 1,
        datatime: new Date().toISOString(),
        customerID = 
        total = total,
        paymentMethod: formData.paymentMethod,
        shippingAddress: {

        },
        status: "new"
   };

   clearCart();
   formData = null;
/**
 * 1. check if customer already exists in list customers
 * 2. if customer exists: customerID to store it later in the orders (connecting customers with orders)
 * 3. if customer does  NOT exist: create new customer and get new customerID 
 * 4. get all product information of the products in the cart
 * 5. calculate total
 * 6. create new object in orders with
 * * orderID - number
 * * orderDate - string
 * * customerID - number
 * * total - number
 * * productInfos - array of objects
 * * paymentMethod - string
 * * shippingAddress - object
 * * status(new & unpaid, paid, processed, delivered, returned, canceled) - string
 * 7. clear our cart and formData
 */
}