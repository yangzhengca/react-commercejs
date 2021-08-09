import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'

// const  products = [
//     {id:1,name:'Shoes',description:'Running shoes.',price:'$5', image:'https://cdn.fleetfeet.com/products/110348_453_L_Ghost_13.jpg/width:640-height:480-fit:trim/110348_453_L_Ghost_13.webp?signature=834f1945'},
//     {id:2,name:'MacBook',description:'Apple macbook.',price:'$10',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxILBtVyQV4f4kzAHoCEm299gMtIUMTWE9I5_vw4_kvtmDGe-Y_npPzhgW7X1L7BJUFAI&usqp=CAU'},
// ]

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent='center' spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={3} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                                                               ))}

            </Grid>
        </main>
    )
}

export default Products
