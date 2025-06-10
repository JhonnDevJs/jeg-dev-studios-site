"use client";
import { useState, useEffect } from "react";
import ShoppingCart from "@/components/ShoppingCart";
import CardProduct from "@/components/CardProduct";
import CardPacksProduct from "@/components/CardPacksProduct";
import OrderForm from "@/components/OrderForm";
import CTAProducts from "@/components/CTAProducts";
import CardSmallList from "@/components/CardSmallList";
import CardNestedLists from "@/components/CardNestedLists";
import imgWebProduct1 from "@/assets/img/img/services/dev-web/pack-1/imagen-muestra-de-pagina-web.webp";
import imgWebProduct2 from "@/assets/img/img/services/dev-web/pack-2/imagen-muestra-de-pagina-web.webp";
import imgWebProduct3 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import "./DevWebClient.css";
import CardsProcess from "@/components/CardsProcess";

export default function DevWebClient() {
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
      id: "paquete_basico",
      name: "Paquete Básico",
      price: 5799,
      currency: "MXN",
      imageSrc: imgWebProduct1.src,
    },
    {
      id: "paquete_plus",
      name: "Paquete Plus",
      price: 17299,
      currency: "MXN",
      imageSrc: imgWebProduct2.src,
    },
    {
      id: "paquete_pro",
      name: "Paquete Pro",
      price: 28799,
      currency: "MXN",
      imageSrc: imgWebProduct3.src,
    },
    // Nota: "landing-page-profesional" no está en este array `products`.
    // Su imagen se rastreará en AddToCart, pero no en el ViewContent inicial del grupo de productos.
    // Si deseas incluirlo en el ViewContent del grupo, deberías añadirlo aquí también.
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
        content_name: "Paquetes de Desarrollo Web",
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

  // Nuevo handler para cotizaciones personalizadas
  const handleQuoteRequest = async ({
    idProduct,
    title,
    moneda,
    dataPrice,
    imageSrc,
  }) => {
    setIsFormVisible(true); // Mostrar el formulario inmediatamente
    setIsGeneratingOrder(true); // Indicar que estamos generando la orden/cotización

    // Dispara evento de Pixel
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
    // Generar número de orden/cotización
    try {
      const response = await fetch(
        "https://jegdevstudios.onrender.com/generate-order-number"
      );
      const data = await response.json();

      if (response.ok) {
        generatedOrderNumber = data.orderNumber;
        setOrderNumber(data.orderNumber);
      } else {
        alert(
          "Hubo un error al generar el número de cotización. Por favor, inténtelo de nuevo."
        );
        setIsGeneratingOrder(false);
        // Considerar si cerrar el formulario o permitir que el usuario lo cierre manualmente
        // setIsFormVisible(false);
        return;
      }
    } catch (error) {
      console.error("Error al solicitar el número de cotización:", error);
      alert(
        "Hubo un error al solicitar el número de cotización. Por favor, inténtelo de nuevo."
      );
      setIsGeneratingOrder(false);
      // setIsFormVisible(false);
      return;
    }

    setCartItems([
      {
        idProduct,
        title,
        moneda,
        dataPrice: parseFloat(dataPrice),
        imageSrc, // Añadido imageSrc
      },
    ]);
    setIsGeneratingOrder(false); // Finaliza la carga

    // Disparar InitiateCheckout para cotizaciones también, si aplica
    if (typeof window !== "undefined" && window.fbq && generatedOrderNumber) {
      const item = {
        idProduct,
        title,
        moneda,
        dataPrice: parseFloat(dataPrice),
        imageSrc,
      };
      window.fbq("track", "InitiateCheckout", {
        contents: [
          {
            id: item.idProduct,
            quantity: 1,
            item_price: item.dataPrice,
            image_url: item.imageSrc,
          },
        ],
        content_ids: [item.idProduct],
        currency: item.moneda,
        num_items: 1,
        value: item.dataPrice,
        order_id: generatedOrderNumber,
      });
    }
  };
  const handleAddToCart = ({
    idProduct,
    title,
    moneda,
    dataPrice,
    imageSrc,
  }) => {
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
    if (isGeneratingOrder && isFormVisible) {
      console.log(
        "La apertura del formulario o generación de orden ya está en progreso."
      );
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
          alert(
            "Hubo un error al generar el número de orden para el checkout. Por favor, inténtelo de nuevo."
          );
          setIsGeneratingOrder(false);
          return;
        }
      } catch (error) {
        console.error(
          "Error al solicitar el número de orden para el checkout:",
          error
        );
        alert(
          "Hubo un error al solicitar el número de orden para el checkout. Por favor, inténtelo de nuevo."
        );
        setIsGeneratingOrder(false);
        return;
      }
      setIsGeneratingOrder(false);
    }

    if (typeof window !== "undefined" && window.fbq && cartItems.length > 0) {
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
        console.warn(
          "InitiateCheckout omitido: No se pudo obtener un número de orden válido para el checkout."
        );
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

      window.fbq("track", "Purchase", {
        contents: contents,
        content_ids: content_ids,
        content_type: "product", // o "custom_quote" si es relevante diferenciar
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
        // setOrderNumber={setOrderNumber} // setOrderNumber ya no se pasa directamente aquí
      />
      <section className="__image-background-sections d-flex justify-content-center align-items-center w-100">
        <h2 className="display-1 text-center text-white">
          Nuestros servicios de desarrollo web
        </h2>
      </section>
      <section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
        <h3>
          ¿Necesitas un sitio web especifico y secillo pero profesional para tu
          negocio?
        </h3>
        <p className="lead w-100 px-3 px-md-5">
          En JEG Dev Studios tenemos la solución perfecta para ti. Adquiere tu
          sitio web personalizado y profesional en solo un par de clicks.
        </p>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
          <CardProduct
            idProduct="landing-page-profesional"
            dataPrice={2999}
            title="Landing Page Profesional"
            price="2999"
            moneda="MXN"
            imageUrl={imgWebProduct1}
            items={[
              "Dominio personalizado incluido (1 año)",
              "Hosting gratuito mediante Google Sites",
              "Diseño responsivo",
              "Posicionamiento inicial en Google (SEO básico)",
              "Diseño adaptado a la marca del cliente",
              "Escoge 5 secciones para tu página",
            ]}
            onAdd={(details) =>
              handleAddToCart({ ...details, imageSrc: imgWebProduct1.src })
            }
          />
        </ul>
      </section>
      <section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
        <p className="lead w-100 px-3 px-md-5">
          En JEG Dev Studios te ofrecemos paquetes adaptados a tus necesidades y
          presupuesto. Ya sea que estés comenzando con una landing page o
          necesites un sitio más robusto, tenemos la solución perfecta para ti.
        </p>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
          <CardPacksProduct
            idProduct="paquete_basico"
            dataPrice={5799}
            title="Paquete Básico"
            price="5799"
            moneda="MXN"
            imageUrl={imgWebProduct1}
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
            onQuote={(details) =>
              handleQuoteRequest({ ...details, imageSrc: imgWebProduct1.src })
            }
          />
          <CardPacksProduct
            idProduct={"paquete_plus"}
            dataPrice={17299}
            title="Paquete Plus"
            price="17299"
            moneda="MXN"
            imageUrl={imgWebProduct2}
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
            onQuote={(details) =>
              handleQuoteRequest({ ...details, imageSrc: imgWebProduct2.src })
            }
          />
          <CardPacksProduct
            idProduct={"paquete_pro"}
            dataPrice={28799}
            title="Paquete Pro"
            price="28799"
            moneda="MXN"
            imageUrl={imgWebProduct3}
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
            onQuote={(details) =>
              handleQuoteRequest({ ...details, imageSrc: imgWebProduct3.src })
            }
          />
        </ul>
      </section>
      <section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
        <CardSmallList
          titulo="Descubrimiento y Planificación Inicial"
          subtitulo="Desde el primer contacto, nos enfocamos en comprender tu visión, objetivos y necesidades específicas. ¿Qué hacemos en esta fase?"
          list={[
            " Reunión inicial contigo para entender tu negocio y el propósito del sitio.",
            " Definimos las funcionalidades clave, el diseño deseado y objetivos de cada sección.",
            " Elegimos el paquete de desarrollo más adecuado (Básico, Plus o Pro).",
            " Creamos un Product Backlog, que es la lista de todo lo que tu sitio debe incluir.",
          ]}
          lastText="Tecnologías: Según el paquete, usamos stacks modernos como Figma, HTML, JavaScript, Tailwind, Next.js, Bootstrap, Node.js, PHP (Laravel) o Java."
        />
        <CardNestedLists
          titulo=" Ciclos de Desarrollo Iterativos (Sprints)"
          subtitulo="Dividimos el proyecto en pequeños ciclos llamados Sprints, de 1 o 2 semanas, en los que desarrollamos y entregamos funcionalidades específicas de tu sitio web. Cada Sprint incluye:"
          list={[
            {
              text: "a. Sprint Planning",
              sublist: [
                "Planificamos qué secciones o funcionalidades vamos a trabajar (por ejemplo, sección de contacto, página de inicio, integración de WhatsApp).",
                "Nos aseguramos de que las tareas estén alineadas a tus prioridades y al paquete que adquiriste.",
              ],
            },
            {
              text: "b. Desarrollo y Actualizaciones",
              sublist: [
                " Nuestro equipo trabaja en el desarrollo del contenido acordado.",
                " Usamos frameworks modernos para garantizar velocidad, seguridad y escalabilidad.",
                " Durante el Sprint, mantenemos comunicación constante contigo para resolver dudas o validar avances.",
              ],
            },
            {
              text: "c. Entrega Parcial y Feedback",
              sublist: [
                " Al final de cada Sprint, te mostramos un avance funcional real del sitio (por videollamada o enlace privado).",
                " Tú nos das tu feedback y podemos ajustar detalles antes del siguiente Sprint.",
              ],
            },
          ]}
        />
        <CardSmallList
          titulo=" Revisión Final y Entrega del Proyecto"
          subtitulo="Una vez terminado el número de Sprints necesarios (dependiendo del paquete elegido), realizamos lo siguiente:"
          list={[
            " Una demostración final del sitio completo.",
            " Una revisión conjunta para asegurarnos de que todo está correcto.",
            " Ajustes finales y optimización.",
            " Publicación en tu dominio con certificado SSL, email corporativo y conexión a redes sociales (según el paquete).",
          ]}
        />
      </section>
      <section className=" col-9 container-fluid bg-transparent text-center text-white py-5">
        <div className="row justify-content-center g-4">
          <div className="col-10 col-md-6 col-lg-4 d-flex justify-content-center">
            <CardsProcess
              number="1"
              titulo="Paquete Básico"
              list={[
                "Duración estimada: 7 - 10 días hábiles",
                "Tecnologías: Figma, HTML, CSS, JS, Node.js",
                "Entregas por Sprint: 1-2 entregas",
              ]}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <CardsProcess
              number="2"
              titulo="Paquete Plus"
              list={[
                "Duración estimada: 10 - 15 días hábiles",
                "Tecnologías: Figma, HTML, Bootstrap, JS, Php (Laravel)",
                "Entregas por Sprint: 1-2 entregas",
              ]}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <CardsProcess
              number="3"
              titulo="Paquete Pro"
              list={[
                "Duración estimada: 15 - 30 días hábiles",
                "Tecnologías: Figma, Next.js, Tailwind CSS, Php (Laravel) o Node.js",
                "Entregas por Sprint: 3-5 entregas",
              ]}
            />
          </div>
        </div>
      </section>

      <CTAProducts />
    </>
  );
}
