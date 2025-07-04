"use client";
import { useState, useEffect, useMemo } from "react";
import { useFacebookPixelInitializer } from "@/hooks/useFacebookPixelInitializer";
import ShoppingCart from "@/components/ShoppingCart";
import CardPacksProduct from "@/components/CardPacksProduct";
import OrderForm from "@/components/OrderForm";
import CTAProducts from "@/components/CTAProducts";
import imgSoftProduct1 from "@/assets/img/img/services/dev-web/pack-1/imagen-muestra-de-pagina-web.webp";
import imgSoftProduct2 from "@/assets/img/img/services/dev-web/pack-2/imagen-muestra-de-pagina-web.webp";
import imgSoftProduct3 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import imgSoftProduct4 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import "./DevSoftClient.css";

export default function DevSoftClient() {
  const isPixelReady = useFacebookPixelInitializer();
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

  const products = useMemo(() => [
    {
      id: "solucion_basica",
      name: "Solución Básica",
      price: 9499,
      currency: "MXN",
      imageSrc: imgSoftProduct1.src,
    },
    {
      id: "solucion_estandar",
      name: "Solución Estándar",
      price: 17299,
      currency: "MXN",
      imageSrc: imgSoftProduct2.src,
    },
    {
      id: "solucion_avanzada",
      name: "Solución Avanzada",
      price: 34499,
      currency: "MXN",
      imageSrc: imgSoftProduct3.src,
    },
    {
      id: "solucion_profesional",
      name: "Solución Profesional",
      price: 66899,
      currency: "MXN",
      imageSrc: imgSoftProduct4.src,
    },
  ], []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (isPixelReady && typeof window !== "undefined" && window.fbq && products.length > 0) {
      window.fbq("track", "ViewContent", {
        content_type: "product_group",
        content_ids: products.map((p) => p.id),
        content_name: "Soluciones de Desarrollo de Software",
        contents: products.map((p) => ({
          id: p.id,
          quantity: 1,
          item_price: p.price,
          image_url: p.imageSrc, // Añadido image_url
        })),
        currency: "MXN",
      });
    }
  }, [isPixelReady, products]);

  const handleQuoteRequest = async ({ idProduct, title, moneda, dataPrice, imageSrc }) => {
    setIsFormVisible(true); // Mostrar el formulario inmediatamente
    setIsGeneratingOrder(true); // Indicar que estamos generando la orden/cotización

    if (isPixelReady && typeof window !== "undefined" && window.fbq) {
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
      imageSrc, // Añadido imageSrc
    };
    setCartItems([quoteItem]); // Para cotizaciones, usualmente se reemplaza el carrito
    setIsGeneratingOrder(false); // Finaliza la carga

    // Disparar InitiateCheckout para cotizaciones también, si aplica
    if (isPixelReady && typeof window !== "undefined" && window.fbq && generatedOrderNumber) {
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
    // Asumiendo que en DevSoftClient todos los productos son cotizables
    // y no hay un flujo de "añadir al carrito" directo.
    // Si lo hubiera, se implementaría aquí.
    console.warn("handleAddToCart llamado en DevSoftClient, pero todos los productos parecen ser cotizables. Considera usar handleQuoteRequest.");
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

    if (isPixelReady && typeof window !== "undefined" && window.fbq) {
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
    if (isGeneratingOrder && isFormVisible) {
      console.log("La apertura del formulario o generación de orden ya está en progreso.");
      return;
    }

    setIsFormVisible(true); // Mostrar el contenedor del formulario inmediatamente

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

    if (isPixelReady && typeof window !== "undefined" && window.fbq && cartItems.length > 0) {
      if (tempOrderNumber) {
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
    if (isGeneratingOrder) {
        setIsGeneratingOrder(false);
    }
  };

  const handleSubmitOrder = (submittedOrderData) => {
    if (
      isPixelReady &&
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
        image_url: item.imageSrc, // Añadido image_url
      }));

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
        <h1 className="display-1 text-center text-white">
          Nuestros servicios de Software Empresarial
        </h1>
      </section>
      <section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
        <p className="lead w-100 px-3 px-md-5">
          En JEG Dev Studios te ofrecemos paquetes adaptados a tus necesidades y
          presupuesto. Ya sea que estés comenzando con un sistema de inventarios
          o necesites un software más robusto, tenemos la solución perfecta para
          ti.
        </p>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
          <CardPacksProduct
            idProduct="solucion_basica"
            dataPrice={9499}
            title="Solución Básica"
            price="9499"
            moneda="MXN"
            imageUrl={imgSoftProduct1.src}
            items={[
              "1 módulo funcional (ventas, citas, inventario, etc.).",
              "Interfaz gráfica simple y amigable. ",
              "Software de escritorio o app web local.",
              "Base de datos local (ej. SQLite).",
              "Manual básico de usuario.",
              "Instalación en un equipo.",
            ]}
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgSoftProduct1.src })}
          />
          <CardPacksProduct
            idProduct={"solucion_estandar"}
            dataPrice={17299}
            title="Solución Estándar"
            price="17299"
            moneda="MXN"
            imageUrl={imgSoftProduct2.src}
            items={[
              "Hasta 3 módulos integrados (ej. ventas, productos, clientes).",
              "Sistema multiusuario con login y control de acceso.",
              "Interfaz responsiva (web o escritorio).",
              "Base de datos local o en red.",
              "Exportación de reportes a PDF/Excel.",
              "Instalación en hasta 3 dispositivos.",
            ]}
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgSoftProduct2.src })}
          />
          <CardPacksProduct
            idProduct={"solucion_avanzada"}
            dataPrice={34499}
            title="Solución Avanzada"
            price="34499"
            moneda="MXN"
            imageUrl={imgSoftProduct3.src}
            items={[
              "Hasta 6 módulos personalizados (ventas, compras, almacén, clientes, empleados, reportes).",
              "Diseño visual adaptado a tu identidad corporativa.",
              "Base de datos en red o en la nube.",
              "Panel de control y estadísticas con gráficas.",
              "Acceso por roles y permisos.",
              "Instalación en red local o servidor.",
              "Capacitación inicial para tu equipo.",
            ]}
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgSoftProduct3.src })}
          />
          <CardPacksProduct
            idProduct={"solucion_profesional"}
            dataPrice={66899}
            title="Solución Profesional"
            price="66899"
            moneda="MXN"
            imageUrl={imgSoftProduct4.src}
            items={[
              "Módulos ilimitados según flujo de trabajo personalizado.",
              "Desarrollo basado en análisis detallado de procesos.",
              "Interfaz avanzada y adaptable (modo oscuro, responsiva, accesible).",
              "Control de usuarios y auditoría de acciones.",
              "Integraciones externas (facturación electrónica, CRMs, etc.).",
              "Seguridad avanzada (respaldos automáticos, cifrado de datos).",
              "Capacitación y documentación completa.",
              "Soporte técnico durante el primer mes incluido.",
            ]}
            onQuote={(details) => handleQuoteRequest({ ...details, imageSrc: imgSoftProduct4.src })}
          />
        </ul>
      </section>
      <CTAProducts />
    </>
  );
}
