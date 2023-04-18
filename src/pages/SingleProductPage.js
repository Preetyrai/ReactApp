import React, { useEffect, useState } from "react";
import { useParams, useHistory, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const [user, setuser] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetch_singleProduct,
  } = useProductsContext();
  useEffect(() => {
    fetch_singleProduct(`${url}${id}`);
    //eslint-disable-next-line
  }, [id]);


  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
         //eslint-disable-next-line
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (product !== undefined) {
    const {
      name,
      price,
      description,
      stock,
      stars,
      reviews,
      id: sku,
      company,
      images,
    } = product;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {product && <PageHero title={product?.name} product />}
      <div className="section section-center page">
        <Link to="/products" className="btn">
          {" "}
          Back to products
        </Link>
        <div className="product-center">
          <ProductImages images = {product?.images} />
          <section className="content">
            <h2>{product?.name} </h2>
            <Stars stars={product?.stars} reviews={product?.reviews} />
            <h5 className="price">{formatPrice(product?.price)}</h5>
            <p className="desc">{product?.description}</p>
            <p className="info">
              <span>Avilable:</span>
              {product?.stock > 0 ? "In Stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU:</span>
              {product?.sku}
            </p>
            <p className="info">
              <span>Brand:</span>
              {product?.company}
            </p>
            <hr />
            {product?.stock > 0 && <AddToCart product={product}/>}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
