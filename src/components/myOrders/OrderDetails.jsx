import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"sdfs=12354-56489"}
                </p>
            </div>
            <div>
            <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"lazydev"}
                </p>
                <p>
                    <b>Phone</b>
                    {236843541658}
                </p>
              </div>



              <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {"06-01-2023"}
                </p>
                <p>
                    <b>Delivered At</b>
                    {"16-01-2023"}
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Method</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Referrence</b>
                    #{"dhdghjgfdjdg"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"16-01-2023"}
                </p>
            </div>

            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    ₹{5485}
                </p>
                <p>
                    <b>Shipping charges</b>
                    ₹{200}
                </p>
                 <p>
                    <b>Tax</b>
                    ₹{232}
                </p>
                <p>
                    <b>Total Amount</b>
                    ₹{250 + 250 + 2132}
                </p>
               
               
            </div>
            <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>Cheese Burger</h4>
                    <div>
                        <span>{12}</span> x <span>{232}</span>
                    </div>
                </div>
                <div>
                    <h4> Veg Cheese Burger</h4>
                    <div>
                        <span>{7}</span> x <span>{152}</span>
                    </div>
                </div>
                <div>
                    <h4>Chicken Cheese Burger</h4>
                    <div>
                        <span>{8}</span> x <span>{332}</span>
                    </div>
                    </div>
                    <div>
                        <h4 style={{
                            fontWeight:800,
                        }} >Sub Total</h4>
                        <div
                        style={{
                            fontWeight:800,
                        }}
                        >₹{2132}</div>
                    </div>
            
            </article>
            
           
        </main>

    </section>
  )
}

export default OrderDetails