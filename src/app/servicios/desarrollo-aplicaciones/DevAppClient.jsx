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
  const [orderNumber, setOrderNumber] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isGeneratingOrder, setIsGeneratingOrder] = useState(false); // Estado para la carga

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
      imageSrc: imgAppProduct1.src,
    },
    {
      id: "app_dual_basica",
      name: "App Dual Básica",
      price: 37999,
      currency: "MXN",
      imageSrc: imgAppProduct2.src,
    },
    {
      id: "app_funcional_pro",
      name: "App Funcional Pro",
      price: 75999,
      currency: "MXN",
      imageSrc: imgAppProduct3.src,
    },
    {
      id: "app_a_medida_premium",
      name: "App a Medida Premium",
      price: 134999,
      currency: "MXN",
      imageSrc: imgAppProduct4.src,
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
          image_url: p.imageSrc, // Añadido image_url
        })),
        currency: "MXN",
      });
    }
  }, []);

  const handleQuoteRequest = async ({ idProduct, title, moneda, dataPrice, imageSrc }) => {
    setIsFormVisible(true); // Mostrar el formulario inmediatamente
    setIsGeneratingOrder(true); // Indicar que estamos generando la orden/cotización

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: title,
        content_ids: [idProduct],
        content_type: "custom_quote",
        value: dataPrice,
        currency: moneda,
        image_url: imageSrc, // Añadido image_url
      });
    }

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
        // Considerar si cerrar el formulario o permitir que el usuario lo cierre manualmente
        // setIsFormVisible(false); // Podrías descomentar esto si prefieres cerrar el form en error
        return;
      }
    } catch (error) {
      console.error("Error al solicitar el número de cotización:", error);
      alert("Hubo un error al solicitar el número de cotización. Por favor, inténtelo de nuevo.");
      setIsGeneratingOrder(false);
      // setIsFormVisible(false); // Podrías descomentar esto si prefieres cerrar el form en error
      return;
    }

    const quoteItem = {
      idProduct,
      title,
      moneda,
      dataPrice: parseFloat(dataPrice),
      imageSrc, // Añadido imageSrc
    };
    setCartItems([quoteItem]); // Para cotizaciones, usualmente se reemplaza el carrito
    setIsGeneratingOrder(false); // Finaliza la carga

    // Disparar InitiateCheckout para cotizaciones también, si aplica
    if (typeof window !== "undefined" && window.fbq && generatedOrderNumber) {
        window.fbq("track", "InitiateCheckout", {
            contents: [{ id: quoteItem.idProduct, quantity: 1, item_price: quoteItem.dataPrice, image_url: quoteItem.imageSrc }],
            content_ids: [quoteItem.idProduct],
            currency: quoteItem.moneda,
            num_items: 1,
            value: quoteItem.dataPrice,
            order_id: generatedOrderNumber,
        });
    }
  };


  const handleAddToCart = ({ idProduct, title, moneda, dataPrice, imageSrc }) => {
    // En este componente, parece que todos los productos son "cotizables"
    // Si hubiera productos que se añaden directamente sin cotización, aquí iría esa lógica.
    // Por ahora, asumimos que handleAddToCart no se usa o redirige a handleQuoteRequest si es necesario.
    // Si tienes productos que se añaden directamente al carrito sin ser cotización,
    // deberías implementar esa lógica aquí de forma similar a DevWebClient.jsx
    console.warn("handleAddToCart llamado en DevAppClient, pero todos los productos parecen ser cotizables. Considera usar handleQuoteRequest.");
    // Opcionalmente, podrías llamar a handleQuoteRequest aquí si esa es la intención:
    // handleQuoteRequest({ idProduct, title, moneda, dataPrice });

    // Si realmente necesitas añadir al carrito sin el flujo de cotización para algunos productos:
    const productData = {
      idProduct,
      title,
      moneda,
      dataPrice: parseFloat(dataPrice),
      imageSrc, // Añadido imageSrc
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
            image_url: productData.imageSrc, // Añadido image_url
          },
        ],
      });
    }
  };

  const handleRemoveProduct = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const openOrderForm = async () => {
    // Prevenir múltiples ejecuciones si ya se está procesando
    if (isGeneratingOrder && isFormVisible) {
      console.log("La apertura del formulario o generación de orden ya está en progreso.");
      return;
    }

    setIsFormVisible(true); // Mostrar el contenedor del formulario inmediatamente

    let tempOrderNumber = orderNumber; // Usar una variable temporal para la lógica de esta ejecución

    // Si no hay orderNumber (porque no vino de una cotización directa) Y hay items en el carrito
    // (esto sería si handleAddToCart se usara para añadir items antes de abrir el form)
    if (!tempOrderNumber && cartItems.length > 0) {
      setIsGeneratingOrder(true); // Indicar que estamos generando la orden
      try {
        const response = await fetch(
          "https://jegdevstudios.onrender.com/generate-order-number"
        );
        const data = await response.json();

        if (response.ok) {
          tempOrderNumber = data.orderNumber;
          setOrderNumber(data.orderNumber); // Actualizar el estado para el evento Purchase y futuros checkouts
        } else {
          alert("Hubo un error al generar el número de orden para el checkout. Por favor, inténtelo de nuevo.");
          setIsGeneratingOrder(false);
          return; // Detener procesamiento adicional para InitiateCheckout si la generación falló
        }
      } catch (error) {
        console.error("Error al solicitar el número de orden para el checkout:", error);
        alert("Hubo un error al solicitar el número de orden para el checkout. Por favor, inténtelo de nuevo.");
        setIsGeneratingOrder(false);
        return; // Detener procesamiento adicional
      }
      setIsGeneratingOrder(false); // Intento de generación finalizado
    }

    // Disparar InitiateCheckout solo si tenemos artículos en el carrito y un número de orden válido
    if (typeof window !== "undefined" && window.fbq && cartItems.length > 0) {
      if (tempOrderNumber) { // tempOrderNumber tendrá el valor correcto aquí
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
          image_url: item.imageSrc, // Añadido image_url
        }));

        window.fbq("track", "InitiateCheckout", {
          contents: contents,
          content_ids: content_ids,
          currency: currency,
          num_items: cartItems.length,
          value: totalValue,
          order_id: tempOrderNumber,
        });
      } else {
        console.warn("InitiateCheckout omitido: No se pudo obtener un número de orden válido para el checkout.");
      }
    }
  };

  const closeOrderForm = () => {
    setIsFormVisible(false);
    // Si el formulario se cierra mientras se generaba una orden, resetear el estado de carga.
    if (isGeneratingOrder) {
        setIsGeneratingOrder(false);
    }
  };

  const handleSubmitOrder = (submittedOrderData) => {
    if (
      typeof window !== "undefined" &&
      window.fbq &&
      cartItems.length > 0 &&
      orderNumber // Asegurarse que orderNumber (del estado) esté disponible
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
        image_url: item.imageSrc, // Añadido image_url
      }));

      // Determinar content_type para Purchase
      // Si el carrito tiene 1 item y es el resultado de una cotización, marcar como 'custom_quote'
      const isQuotePurchase = cartItems.length === 1 && products.some(p => p.id === cartItems[0].idProduct);

      window.fbq("track", "Purchase", {
        contents: contents,
        content_ids: content_ids,
        content_type: isQuotePurchase ? "custom_quote" : "product",
        currency: currency,
        num_items: cartItems.length,
        value: totalValue,
        order_id: orderNumber,
      });
    }

    setCartItems([]);
    setOrderNumber(""); // Limpiar el número de orden después de la compra
    closeOrderForm(); // Cierra el formulario
  };
  return (
    <>
      {isFormVisible && (
        <OrderForm
          onClose={closeOrderForm}
          onSubmit={handleSubmitOrder}
          orderNumber={orderNumber}
          items={cartItems}
          isLoading={isGeneratingOrder} // Pasar el estado de carga
        />
      )}
      <ShoppingCart
        items={cartItems}
        onRemove={handleRemoveProduct}
        onOpenOrderForm={openOrderForm}
        // setOrderNumber={setOrderNumber} // Ya no se pasa directamente
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
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgAppProduct1.src })}
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
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgAppProduct2.src })}
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
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgAppProduct3.src })}
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
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgAppProduct4.src })}
          />
        </ul>
      </section>
      <CTAProducts />
    </>
  );
}
