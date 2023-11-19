import React from "react";
import "./style.css";
import { Button, ButtonGroup, WrapItem } from "@chakra-ui/react";

const ItemListContainer = () => {
  const products = [
    {
      id: 1,
      category: "ropa",
      nombre: "CAMISETA TITULAR ARGENTINA 3 ESTRELLAS 2022",
      precio: "$ 41.999",
      imagen:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d96391ff8e147a48e9aaf7300e7cf3d_9366/Camiseta_titular_Argentina_3_estrellas_2022_Blanco_IB3593_01_laydown.jpg",
    },
    {
      id: 2,
      category: "ropa",
      nombre: "CAMISETA ALTERNATIVA ARGENTINA 3 ESTRELLAS 22",
      precio: "$ 69.999",
      imagen:
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/057eb3ac37e1485eacc7efaa9fe9b952_9366/Camiseta_Alternativa_Argentina_3_estrellas_22_Violeta_GC4403_01_laydown.jpg",
    },
    {
      id: 3,
      category: "ropa",
      nombre: "CAMISETA TITULAR BOCA JUNIORS 22/23",
      precio: "$ 39.999",
      imagen:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4fcfb797d457430eaccaaec200dafeb7_9366/Camiseta_Titular_Boca_Juniors_22-23_Azul_HE6323_01_laydown.jpg",
    },
    {
      id: 4,
      category: "zapatillas",
      nombre: "ZAPATILLAS GRAND COURT 2.0",
      precio: "$ 59.999",
      imagen:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c3a4cc503fb4bd8920074f18cc26441_9366/Zapatillas_Grand_Court_2.0_Blanco_ID4474_01_standard.jpg",
    },
    {
      id: 5,
      category: "zapatillas",
      nombre: "ZAPATILLAS SUPERNOVA 2.0",
      precio: "$ 77.799",
      imagen:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2a081b8541364d31ae47af48008bd4b8_9366/Zapatillas_Supernova_2.0_Azul_HQ9938_01_standard.jpg",
    },
    {
      id: 6,
      category: "zapatillas",
      nombre: "ZAPATILLAS DURAMO SL 2.0",
      precio: "$ 62.999",
      imagen:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9384cffae025443990adaf200091d6ef_9366/Zapatillas_Duramo_SL_2.0_Naranja_HP2373_01_standard.jpg",
    },
  ];

  const filteredRopa = products.filter(
    (product) => product.category === "ropa"
  );
  const filteredZapatillas = products.filter(
    (product) => product.category === "zapatillas"
  );

  return (
    <div>
      <div className="product-row">
        {filteredRopa.map((product) => (
          <div key={product.id} className="product-item">
            <img
              id="img"
              src={product.imagen}
              alt={product.nombre}
              className="product-image"
            />
            <h2 class="name">{product.nombre}</h2>
            <p class="price">{product.precio}</p>
            <WrapItem>
              <Button id="buttn" colorScheme="purple">Comprar</Button>
            </WrapItem>
            <Button id="buttn" colorScheme="purple" variant="outline">
              Añadir al carrito
            </Button>
          </div>
        ))}
      </div>
      <div className="product-row">
        {filteredZapatillas.map((product) => (
          <div key={product.id} className="product-item">
            <img
              id="img"
              src={product.imagen}
              alt={product.nombre}
              className="product-image"
            />
            <h2 class="name">{product.nombre}</h2>
            <p class="price">{product.precio}</p>
            <WrapItem>
              <Button id="buttn" colorScheme="purple">Comprar</Button>
            </WrapItem>
            <Button id="buttn" colorScheme="purple" variant="outline">
              Añadir al carrito
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemListContainer;
