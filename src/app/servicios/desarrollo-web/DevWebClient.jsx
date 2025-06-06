"use client";
import { useState, useEffect } from "react";
import ShoppingCart from "@/components/ShoppingCart";
import CardProduct from "@/components/CardProduct";
import OrderForm from "@/components/OrderForm";
import CTAProducts from "@/components/CTAProducts";
import "./DevWebClient.css";

export default function DevWebClient() {
  // 1. Inicializa cartItems como un array vacío.
  // Esto asegura que el renderizado del servidor y el renderizado inicial del cliente sean consistentes.
  const [cartItems, setCartItems] = useState([]);

  // 2. Usa useEffect para cargar desde localStorage DESPUÉS de que el componente se haya montado en el cliente.
  useEffect(() => {
    // Este código solo se ejecuta en el cliente, después del renderizado inicial.
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItems");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    }
  }, []); // El array de dependencias vacío asegura que se ejecute una vez después del montaje inicial del cliente.

  // Datos de los productos para el evento ViewContent
  const products = [
    { id: 'paquete_basico', name: 'Paquete Básico', price: 5799, currency: 'MXN' },
    { id: 'paquete_plus', name: 'Paquete Plus', price: 17299, currency: 'MXN' },
    { id: 'paquete_pro', name: 'Paquete Pro', price: 28799, currency: 'MXN' },
  ];

  // 3. El useEffect existente para guardar en localStorage está bien,
  // pero es buena práctica verificar también `typeof window` si existe la posibilidad
  // de que se ejecute durante SSR (aunque con `cartItems` en la dependencia,
  // se ejecutará principalmente en el lado del cliente después de las actualizaciones).
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    // Evento ViewContent de Facebook Pixel al cargar la página de productos
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_type: 'product_group',
        content_ids: products.map(p => p.id),
        content_name: 'Paquetes de Desarrollo Web',
        contents: products.map(p => ({
          id: p.id,
          quantity: 1, // Asumimos que se muestra 1 de cada uno
          item_price: p.price
        })),
        currency: 'MXN', // Moneda general para el grupo
      });
    }
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleAddToCart = ({ idProduct, title, moneda, dataPrice }) => {
    const productData = { idProduct, title, moneda, dataPrice: parseFloat(dataPrice) };
    // productId ahora es directamente idProduct
    setCartItems((prevItems) => [...prevItems, productData]);

    // Evento AddToCart de Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: productData.title,
        content_ids: [productData.idProduct],
        content_type: 'product',
        value: productData.dataPrice,
        currency: productData.moneda,
        contents: [{
          id: productData.idProduct,
          quantity: 1,
          item_price: productData.dataPrice
        }],
      });
    }
  };

  const handleRemoveProduct = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const [orderNumber, setOrderNumber] = useState(() => {
    // Generar un número de orden inicial si es necesario, o dejarlo vacío.
    // Se generará uno nuevo al abrir el formulario si está vacío.
    return "";
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openOrderForm = () => {
    setIsFormVisible(true);
    // Se asume que orderNumber se establece a través de setOrderNumber
    // (por ejemplo, desde ShoppingCart o después de una interacción con el backend)

    // Evento InitiateCheckout de Facebook Pixel
    if (typeof window !== "undefined" && window.fbq && cartItems.length > 0) {
      const totalValue = cartItems.reduce((sum, item) => sum + item.dataPrice, 0);
      const currency = cartItems.length > 0 ? cartItems[0].moneda : 'MXN';
      const content_ids = cartItems.map(item => item.idProduct); // Usar item.idProduct
      const contents = cartItems.map(item => ({
        id: item.idProduct, // Usar item.idProduct
        quantity: 1,
        item_price: item.dataPrice
      }));

      window.fbq('track', 'InitiateCheckout', {
        contents: contents,
        content_ids: content_ids,
        currency: currency,
        num_items: cartItems.length,
        value: totalValue,
        order_id: orderNumber, // Se usa el orderNumber del estado.
                               // Si está vacío, se enviará vacío. Es opcional para InitiateCheckout.
      });
    }
  };
  const closeOrderForm = () => setIsFormVisible(false);

  const handleSubmitOrder = (submittedOrderData) => {
    // Evento Purchase de Facebook Pixel
    if (typeof window !== "undefined" && window.fbq && cartItems.length > 0 && orderNumber) {
      const totalValue = cartItems.reduce((sum, item) => sum + item.dataPrice, 0);
      const currency = cartItems.length > 0 ? cartItems[0].moneda : 'MXN';
      const content_ids = cartItems.map(item => item.idProduct); // Usar item.idProduct
      const contents = cartItems.map(item => ({
        id: item.idProduct, // Usar item.idProduct
        quantity: 1,
        item_price: item.dataPrice
      }));

      window.fbq('track', 'Purchase', {
        contents: contents,
        content_ids: content_ids,
        content_type: 'product', // Para Purchase, a menudo se especifica 'product'
        currency: currency,
        num_items: cartItems.length,
        value: totalValue,
        order_id: orderNumber,
      });
    }

    setCartItems([]);
    setOrderNumber(""); // Resetea el número de orden después de la compra
    closeOrderForm(); // Cierra el formulario después de enviar
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
      <section className="__image-background-sections d-flex justify-content-center align-items-center w-100">
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
            idProduct="paquete_basico"
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
            idProduct={"paquete_plus"}
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
            idProduct={"paquete_pro"}
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
