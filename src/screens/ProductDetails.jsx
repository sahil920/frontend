import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'
import { Col, ListGroup, ListGroupItem, Row, Button, Form } from 'react-bootstrap'
import Rating from "../components/Rating"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
const ProductDetails = () => {
    const history = useNavigate();
    const { id } = useParams();
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails)
    const { product } = productDetails
    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch, id])
    const addToCartHandler = () => {
        history(`/cart/${id}?qty=${qty}`);
    }
    return (
        <>
            <Link to="/" className="btn btn-light">
                <i className="fas fa-arrow-left    "></i>
                &nbsp; GO BACK
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} Reviews`}
                            />
                        </ListGroupItem>
                        <ListGroupItem>Price : ${product.price}</ListGroupItem>
                        <ListGroupItem>{product.description}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroupItem>
                        <Row>
                            <Col>Status :</Col>
                            <Col>
                                {product.countInStock > 0 ? "In Stock " : "out of stock"}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    {product.countInStock > 0 && (
                        <ListGroupItem>
                            <Row>
                                <Col>Qty</Col>
                                <Form.Control
                                    as="select"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                >
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Row>
                        </ListGroupItem>
                    )}
                    <ListGroupItem>
                        <Button
                            className="btn-block"
                            type="button"
                            onClick={addToCartHandler}
                        >
                            Add to cart
                        </Button>
                    </ListGroupItem>
                </Col>
            </Row>
        </>

    )
}
export default ProductDetails