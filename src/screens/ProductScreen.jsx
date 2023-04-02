import React from 'react'
import Card from 'react-bootstrap/Card';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
const ProductScreen = ({ product }) => {
    return (
        <>
            <Card className="my-3 p-3 rounded">
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant="top" />
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    <Card.Text as="div">
                        $ {product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductScreen