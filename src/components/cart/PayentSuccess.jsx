import React from 'react'
import { Link } from 'react-router-dom'

const PayentSuccess = () => {
  return (
    <section className='payemntsuccess'>
        <main>
            <h1>Order Confirmed</h1>
            <p>Order Placed Successfully, You can order Status below</p>
            <Link to="/myorders">Check Status</Link>
        </main>
    </section>
  )
}

export default PayentSuccess