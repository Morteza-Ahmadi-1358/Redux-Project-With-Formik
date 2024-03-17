import React from 'react'
import { connect } from 'react-redux'

const Products = (props) => {
  return (
    <div>
        {
            props.products.map(product => {
                return <h4>{product.name} --- {product.price}</h4>
            })
        }
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
}

export default connect(mapStateToProps)(Products)