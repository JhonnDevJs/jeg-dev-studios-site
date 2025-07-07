"use client";
import { useState, useEffect, useMemo } from "react";
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
  const [orderNumber, setOrderNumber] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isGeneratingOrder, setIsGeneratingOrder] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItems");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    }
  }, []);

  const products = useMemo(() => [
    {
      id: "app_de_inicio",
      name: "App de Inicio",
      price: 18999,
      currency: "MXN",
      imageSrc: imgAppProduct1.src,
      description: "App nativa sencilla para Android o iOS (1 plataforma). Diseño responsivo y minimalista. Hasta 3 pantallas principales (Home, Servicios, Contacto). Sin base de datos ni backend complejo. Publicación en tienda (Google Play o App Store incluida). Manual básico de uso y entrega de APK.",
    },
    {
      id: "app_dual_basica",
      name: "App Dual Básica",
      price: 37999,
      currency: "MXN",
      imageSrc: imgAppProduct2.src,
      description: "App para Android e iOS (React Native o Kotlin Multiplatform). Hasta 6 pantallas dinámicas (login, inicio, catálogo, detalles, contacto, perfil). Integración con base de datos remota y backend en Java. Sistema básico de autenticación y almacenamiento de datos. Publicación en ambas tiendas. Diseño adaptado y personalizado con tu identidad visual.",
    },
    {
      id: "app_funcional_pro",
      name: "App Funcional Pro",
      price: 75999,
      currency: "MXN",
      imageSrc: imgAppProduct3.src,
      description: "App híbrida o nativa para Android e iOS. Módulos personalizados (usuarios, productos, pedidos, etc.). Backend Java con APIs seguras y escalables. Diseño UI/UX profesional (componentes animados, navegación fluida). Sistema de notificaciones push. Base de datos relacional conectada al backend. Panel de administración web opcional.",
    },
    {
      id: "app_a_medida_premium",
      name: "App a Medida Premium",
      price: 134999,
      currency: "MXN",
      imageSrc: imgAppProduct4.src,
      description: "App personalizada desde cero (multiplataforma). Arquitectura avanzada y optimizada. Funcionalidades complejas (geolocalización, pagos, cámara, multimedia, etc.). Backend modular con Java (APIs RESTful seguras). Panel de control con estadísticas y gestión remota. Mantenimiento técnico por 3 meses incluido. Asesoría y soporte para estrategias de publicación y escalabilidad.",
    },
  ], []);

  // Fragmento enriquecido para SEO
  const productSchema = products.map(product => ({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.imageSrc,
    "description": product.description,
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "priceCurrency": product.currency,
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  }));

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // --- LIMPIEZA: Elimina todo lo de Facebook Pixel ---

  const handleQuoteRequest = async ({ idProduct, title, moneda, dataPrice, imageSrc }) => {
    setIsFormVisible(true);
    setIsGeneratingOrder(true);

    let generatedOrderNumber = "";
    try {
      const response = await fetch(
        "https://jegdevstudios.onrender.com/generate-order-number"
      );
      const data = await response.json();

      if (response.ok) {
        generatedOrderNumber = data.orderNumber;
        setOrderNumber(data.orderNumber);
      } else {
        alert("Hubo un error al generar el número de cotización. Por favor, inténtelo de nuevo.");
        setIsGeneratingOrder(false);
        return;
      }
    } catch (error) {
      console.error("Error al solicitar el número de cotización:", error);
      alert("Hubo un error al solicitar el número de cotización. Por favor, inténtelo de nuevo.");
      setIsGeneratingOrder(false);
      return;
    }

    const quoteItem = {
      idProduct,
      title,
      moneda,
      dataPrice: parseFloat(dataPrice),
      imageSrc,
    };
    setCartItems([quoteItem]);
    setIsGeneratingOrder(false);
  };

  const handleAddToCart = ({ idProduct, title, moneda, dataPrice, imageSrc }) => {
    const productData = {
      idProduct,
      title,
      moneda,
      dataPrice: parseFloat(dataPrice),
      imageSrc,
    };
    setCartItems((prevItems) => [...prevItems, productData]);
  };

  const handleRemoveProduct = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const openOrderForm = async () => {
    if (isGeneratingOrder && isFormVisible) {
      console.log("La apertura del formulario o generación de orden ya está en progreso.");
      return;
    }

    setIsFormVisible(true);

    let tempOrderNumber = orderNumber;

    if (!tempOrderNumber && cartItems.length > 0) {
      setIsGeneratingOrder(true);
      try {
        const response = await fetch(
          "https://jegdevstudios.onrender.com/generate-order-number"
        );
        const data = await response.json();

        if (response.ok) {
          tempOrderNumber = data.orderNumber;
          setOrderNumber(data.orderNumber);
        } else {
          alert("Hubo un error al generar el número de orden para el checkout. Por favor, inténtelo de nuevo.");
          setIsGeneratingOrder(false);
          return;
        }
      } catch (error) {
        console.error("Error al solicitar el número de orden para el checkout:", error);
        alert("Hubo un error al solicitar el número de orden para el checkout. Por favor, inténtelo de nuevo.");
        setIsGeneratingOrder(false);
        return;
      }
      setIsGeneratingOrder(false);
    }
  };

  const closeOrderForm = () => {
    setIsFormVisible(false);
    if (isGeneratingOrder) {
      setIsGeneratingOrder(false);
    }
  };

  const handleSubmitOrder = (submittedOrderData) => {
    setCartItems([]);
    setOrderNumber("");
    closeOrderForm();
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {isFormVisible && (
        <OrderForm
          onClose={closeOrderForm}
          onSubmit={handleSubmitOrder}
          orderNumber={orderNumber}
          items={cartItems}
          isLoading={isGeneratingOrder}
        />
      )}
      <ShoppingCart
        items={cartItems}
        onRemove={handleRemoveProduct}
        onOpenOrderForm={openOrderForm}
      />
      <section className="__image-background-sections d-flex justify-content-center align-items-center w-100">
        <h1 className="display-1 text-center text-white">
          Nuestros servicios de desarrollo de aplicaciones
        </h1>
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
            imageUrl={imgAppProduct1.src}
            items={[
              "App nativa sencilla para Android o iOS (1 plataforma).",
              "Diseño responsivo y minimalista.",
              "Hasta 3 pantallas principales (Home, Servicios, Contacto).",
              "Sin base de datos ni backend complejo.",
              "Publicación en tienda (Google Play o App Store incluida).",
              "Manual básico de uso y entrega de APK. ",
            ]}
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgAppProduct1.src })}
          />
          <CardPacksProduct
            idProduct={"app_dual_basica"}
            dataPrice={37999}
            title="App Dual Básica"
            price="37999"
            moneda="MXN"
            imageUrl={imgAppProduct2.src}
            items={[
              "App para Android e iOS (React Native o Kotlin Multiplatform).",
              "Hasta 6 pantallas dinámicas (login, inicio, catálogo, detalles, contacto, perfil).",
              "Integración con base de datos remota y backend en Java.",
              "Sistema básico de autenticación y almacenamiento de datos.",
              "Publicación en ambas tiendas.",
              "Diseño adaptado y personalizado con tu identidad visual.",
            ]}
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgAppProduct2.src })}
          />
          <CardPacksProduct
            idProduct={"app_funcional_pro"}
            dataPrice={75999}
            title="App Funcional Pro"
            price="75999"
            moneda="MXN"
            imageUrl={imgAppProduct3.src}
            items={[
              "App híbrida o nativa para Android e iOS.",
              "Módulos personalizados (usuarios, productos, pedidos, etc.).",
              "Backend Java con APIs seguras y escalables.",
              "Diseño UI/UX profesional (componentes animados, navegación fluida).",
              "Sistema de notificaciones push.",
              "Base de datos relacional conectada al backend.",
              "Panel de administración web opcional.",
            ]}
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgAppProduct3.src })}
          />
          <CardPacksProduct
            idProduct={"app_a_medida_premium"}
            dataPrice={134999}
            title="App a Medida Premium"
            price="134999"
            moneda="MXN"
            imageUrl={imgAppProduct4.src}
            items={[
              "App personalizada desde cero (multiplataforma).",
              "Arquitectura avanzada y optimizada.",
              "Funcionalidades complejas (geolocalización, pagos, cámara, multimedia, etc.).",
              "Backend modular con Java (APIs RESTful seguras).",
              "Panel de control con estadísticas y gestión remota.",
              "Mantenimiento técnico por 3 meses incluido.",
              "Asesoría y soporte para estrategias de publicación y escalabilidad.",
            ]}
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgAppProduct4.src })}
          />
        </ul>
      </section>
      <CTAProducts />
    </>
  );
}