import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import TitleSection from "../../components/TitleSection";
import Loading from "../../components/Loading";
import { Section, LargeButton, Grid } from "./style";

const ProductList = () => {
  const firstLoadApi = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";
  const [nextPage, setNextPage] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetches data once when component is rendered
  useEffect(() => {
    loadProducts(firstLoadApi);
  }, []);

  const loadProducts = (url) => {
    // shows Loading while fetching data
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // concatenates current product list with new items
        setProducts([...products, ...res.products]);
        // stores next page url
        setNextPage(`https://${res.nextPage}`);
        // hides Loading after received data
        setLoading(false);
      })
  }

  return (
    <Section>
      <TitleSection>Sua seleção especial</TitleSection>
      
      <Grid>
        {products && products.map(item => (
          <Card product={item} key={item.id} />
        ))}
      </Grid>

      {loading && <Loading />}

      <LargeButton flat onClick={() => loadProducts(nextPage)}>Ainda mais produtos aqui!</LargeButton>
    </Section>
  )
};

export default ProductList;
