"use client";
import { useState, useEffect } from "react";
import ShoppingCart from "@/components/ShoppingCart";
import CardPacksProduct from "@/components/CardPacksProduct";
import OrderForm from "@/components/OrderForm";
import CTAProducts from "@/components/CTAProducts";
import imgAppProduct1 from "@/assets/img/img/services/dev-web/pack-1/imagen-muestra-de-pagina-web.webp";
import imgAppProduct2 from "@/assets/img/img/services/dev-web/pack-2/imagen-muestra-de-pagina-web.webp";
import imgAppProduct3 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import imgAppProduct4 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import "./DevAppClient.css";

export default function DevAppClient() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItems");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    }
  }, []);
  const products = [
    {
      id: "app_de_inicio",
      name: "App de Inicio",
      price: 18999,
      currency: "MXN",
    },
    {
      id: "app_dual_basica",
      name: "App Dual Básica",
      price: 37999,
      currency: "MXN",
    },
    {
      id: "app_funcional_pro",
      name: "App Funcional Pro",
      price: 75999,
      currency: "MXN",
    },
    {
      id: "app_a_medida_premium",
      name: "App a Medida Premium",
      price: 134999,
      currency: "MXN",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_type: "product_group",
        content_ids: products.map((p) => p.id),
        content_name: "Paquetes de Desarrollo de Aplicaciones",
        contents: products.map((p) => ({
          id: p.id,
          quantity: 1,
          item_price: p.price,
        })),
        currency: "MXN",
      });
    }
  }, []);
  
  const handleQuoteRequest = async ({ idProduct, title, moneda, dataPrice }) => {

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: title,
        content_ids: [idProduct],
        content_type: "custom_quote",
        value: dataPrice,
        currency: moneda,
      });
    }

    try {
      const response = await fetch(
        "https://jegdevstudios.onrender.com/generate-order-number"
      );
      const data = await response.json();

      if (response.ok) {
        setOrderNumber(data.orderNumber);
      } else {
        alert("Hubo un error al generar el número de cotización. Por favor, inténtelo de nuevo.");
        return;
      }
    } catch (error) {
      console.error("Error al solicitar el número de cotización:", error);
      alert("Hubo un error al solicitar el número de cotización. Por favor, inténtelo de nuevo.");
      return;
    }

    setCartItems([
      {
        idProduct,
        title,
        moneda,
        dataPrice: parseFloat(dataPrice),
      },
    ]);
    setIsFormVisible(true);
  };


  const handleAddToCart = ({ idProduct, title, moneda, dataPrice }) => {
    const productData = {
      idProduct,
      title,
      moneda,
      dataPrice: parseFloat(dataPrice),
    };
    setCartItems((prevItems) => [...prevItems, productData]);

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart", {
        content_name: productData.title,
        content_ids: [productData.idProduct],
        content_type: "product",
        value: productData.dataPrice,
        currency: productData.moneda,
        contents: [
          {
            id: productData.idProduct,
            quantity: 1,
            item_price: productData.dataPrice,
          },
        ],
      });
    }
  };

  const handleRemoveProduct = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const [orderNumber, setOrderNumber] = useState(() => {
    return "";
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openOrderForm = () => {
    setIsFormVisible(true);
    if (typeof window !== "undefined" && window.fbq && cartItems.length > 0) {
      const totalValue = cartItems.reduce(
        (sum, item) => sum + item.dataPrice,
        0
      );
      const currency = cartItems.length > 0 ? cartItems[0].moneda : "MXN";
      const content_ids = cartItems.map((item) => item.idProduct);
      const contents = cartItems.map((item) => ({
        id: item.idProduct,
        quantity: 1,
        item_price: item.dataPrice,
      }));

      window.fbq("track", "InitiateCheckout", {
        contents: contents,
        content_ids: content_ids,
        currency: currency,
        num_items: cartItems.length,
        value: totalValue,
        order_id: orderNumber,
      });
    }
  };
  const closeOrderForm = () => setIsFormVisible(false);

  const handleSubmitOrder = (submittedOrderData) => {
    if (
      typeof window !== "undefined" &&
      window.fbq &&
      cartItems.length > 0 &&
      orderNumber
    ) {
      const totalValue = cartItems.reduce(
        (sum, item) => sum + item.dataPrice,
        0
      );
      const currency = cartItems.length > 0 ? cartItems[0].moneda : "MXN";
      const content_ids = cartItems.map((item) => item.idProduct);
      const contents = cartItems.map((item) => ({
        id: item.idProduct,
        quantity: 1,
        item_price: item.dataPrice,
      }));

      window.fbq("track", "Purchase", {
        contents: contents,
        content_ids: content_ids,
        content_type: "product",
        currency: currency,
        num_items: cartItems.length,
        value: totalValue,
        order_id: orderNumber,
      });
    }

    setCartItems([]);
    setOrderNumber("");
    closeOrderForm();
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
          Nuestros servicios de desarrollo de aplicaciones
        </h2>
      </section>
      <section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
        <p className="lead w-100 px-3 px-md-5">
          En JEG Dev Studios te ofrecemos paquetes adaptados a tus necesidades y
          presupuesto. Ya sea que estés iniciando con una app sencilla o
          necesites una aplicación móvil completa y escalable, tenemos la
          solución perfecta para ti.
        </p>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
          <CardPacksProduct
            idProduct={"app_de_inicio"}
            dataPrice={18999}
            title="App de Inicio"
            price="18999"
            moneda="MXN"
            imageUrl={imgAppProduct1}
            items={[
              "App nativa sencilla para Android o iOS (1 plataforma).",
              "Diseño responsivo y minimalista.",
              "Hasta 3 pantallas principales (Home, Servicios, Contacto).",
              "Sin base de datos ni backend complejo.",
              "Publicación en tienda (Google Play o App Store incluida).",
              "Manual básico de uso y entrega de APK. ",
            ]}
            onQuote={handleQuoteRequest} 
          />
          <CardPacksProduct
            idProduct={"app_dual_basica"}
            dataPrice={37999}
            title="App Dual Básica"
            price="37999"
            moneda="MXN"
            imageUrl={imgAppProduct2}
            items={[
              "App para Android e iOS (React Native o Kotlin Multiplatform).",
              "Hasta 6 pantallas dinámicas (login, inicio, catálogo, detalles, contacto, perfil).",
              "Integración con base de datos remota y backend en Java.",
              "Sistema básico de autenticación y almacenamiento de datos.",
              "Publicación en ambas tiendas.",
              "Diseño adaptado y personalizado con tu identidad visual.",
            ]}
            onQuote={handleQuoteRequest} 
          />
          <CardPacksProduct
            idProduct={"app_funcional_pro"}
            dataPrice={75999}
            title="App Funcional Pro"
            price="75999"
            moneda="MXN"
            imageUrl={imgAppProduct3}
            items={[
              "App híbrida o nativa para Android e iOS.",
              "Módulos personalizados (usuarios, productos, pedidos, etc.).",
              "Backend Java con APIs seguras y escalables.",
              "Diseño UI/UX profesional (componentes animados, navegación fluida).",
              "Sistema de notificaciones push.",
              "Base de datos relacional conectada al backend.",
              "Panel de administración web opcional.",
            ]}
            onQuote={handleQuoteRequest}
          />
          <CardPacksProduct
            idProduct={"app_a_medida_premium"}
            dataPrice={134999}
            title="App a Medida Premium"
            price="134999"
            moneda="MXN"
            imageUrl={imgAppProduct4}
            items={[
              "App personalizada desde cero (multiplataforma).",
              "Arquitectura avanzada y optimizada.",
              "Funcionalidades complejas (geolocalización, pagos, cámara, multimedia, etc.).",
              "Backend modular con Java (APIs RESTful seguras).",
              "Panel de control con estadísticas y gestión remota.",
              "Mantenimiento técnico por 3 meses incluido.",
              "Asesoría y soporte para estrategias de publicación y escalabilidad.",
            ]}
            onQuote={handleQuoteRequest} 
          />
        </ul>
      </section>
      <CTAProducts />
    </>
  );
}
