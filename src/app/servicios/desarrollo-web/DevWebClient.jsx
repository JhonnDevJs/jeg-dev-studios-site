"use client";
import { useState, useEffect } from "react";
import ShoppingCart from "@/components/ShoppingCart";
import CardProduct from "@/components/CardProduct";
import OrderForm from "@/components/OrderForm";
import CTAProducts from "@/components/CTAProducts";

export default function DevWebClient() {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const handleAddToCart = ({ title, moneda, dataPrice }) => {
    setCartItems((prevItems) => [
      ...prevItems,
      { title, moneda, dataPrice: parseFloat(dataPrice) },
    ]);
  };

  const handleRemoveProduct = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const [orderNumber, setOrderNumber] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openOrderForm = () => setIsFormVisible(true);
  const closeOrderForm = () => setIsFormVisible(false);

  const handleSubmitOrder = (submittedOrderData) => {
    setCartItems([]);
    // Puedes resetear orderNumber aquí si lo necesitas
  };
  return (
    <>
      {isFormVisible && (
        <OrderForm
          onClose={closeOrderForm}
          onSubmit={handleSubmitOrder}
          orderNumber={orderNumber}
          items={cartItems}
        />
      )}
      <ShoppingCart
        items={cartItems}
        onRemove={handleRemoveProduct}
        onOpenOrderForm={openOrderForm}
        setOrderNumber={setOrderNumber}
      />
      <section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0 m-0">
        <h2 className="display-1 text-center text-white">
          Nuestros servicios de desarrollo web
        </h2>
      </section>
      <section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
        <p className="lead w-100 px-3 px-md-5">
          En JEG Dev Studios te ofrecemos paquetes adaptados a tus necesidades y presupuesto. Ya sea que estés comenzando con una landing page o necesites un sitio más robusto, tenemos la solución perfecta para ti.
        </p>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
          <CardProduct
            dataPrice={5799}
            title="Paquete Básico"
            price="5799"
            moneda="MXN"
            items={[
              "1 año de Hosting y dominio (con hostinger)",
              "Certificado SSL",
              "Email corporativo",
              "Diseño responsivo (optimizado para móviles)",
              "Cambios en el diseño: 2 a nivel de sección)",
              "4 Secciones dentro del layout/landing page",
              "Integración de botón de WhatsApp",
              "Implementación básica de SEO",
              "Stack tecnológico: Frontend: HTML, CSS, JAVASCRIPT Backend: Node js",
              "Tiempo de entrega: 7 a 10 días hábiles",
            ]}
            onAdd={handleAddToCart}
          />
          <CardProduct
            dataPrice={17299}
            title="Paquete Plus"
            price="17299"
            moneda="MXN"
            items={[
              "1 año de Hosting y dominio (a elegir Hostinger ó Dondominio)",
              "Certificado SSL",
              "Email corporativo",
              "Diseño responsivo (optimizado para móviles)",
              " Cambios en el diseño: 4 (a nivel de sección)",
              "4 Secciones dentro del layout/landing page",
              "Integración básica de redes sociales (Botón de WhatsApp, Facebook)",
              "Implementación básica de SEO",
              "1 Mantenimiento gratuito a los 6 meses",
              "Stack tecnológico: Frontend: HTML, Bootstrap CSS, JAVASCRIPT Backend: PHP (Laravel)",
              "Tiempo de entrega: 10 a 15 días hábiles.",
            ]}
            onAdd={handleAddToCart}
          />
          <CardProduct
            dataPrice={28799}
            title="Paquete Pro"
            price="28799"
            moneda="MXN"
            items={[
              "1 año de Hosting y dominio (con dondominio)",
              "Certificado SSL",
              "Email corporativo",
              "Diseño responsivo (optimizado para móviles)",
              "Cambios en el diseño: 8 (a nivel de sección)",
              "Hasta 10 landing pages/layouts",
              "4 Secciones dentro del layout/landing page",
              "Integración completa de redes sociales (Facebook, Instagram, X (Twitter), WhatsApp).",
              "Implementación básica de SEO",
              "2 días Mantenimiento gratuitos 1 cada 6 meses",
              "Stack tecnológico: Frontend: HTML, Bootstrap CSS, JAVASCRIPT Backend: PHP (Laravel) ó Node js",
              "Tiempo de entrega: 15 a 30 días hábiles.",
            ]}
            onAdd={handleAddToCart}
          />
        </ul>
      </section>
      <CTAProducts />
    </>
  );
}
