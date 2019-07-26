import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ShareForm from "./ShareForm";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <ProductList />
        <ShareForm />
      </Container>

      <Footer />
    </>
  )
}

export default Home;