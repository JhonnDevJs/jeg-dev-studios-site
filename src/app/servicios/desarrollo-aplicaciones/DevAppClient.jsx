"use client";
import { useState, useEffect } from "react";
import ShoppingCart from "@/components/ShoppingCart";
import CardProduct from "@/components/CardProduct";
import OrderForm from "@/components/OrderForm";
import CTAProducts from "@/components/CTAProducts";
import "./DevAppClient.css";

export default function DevAppClient() {
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
    { id: 'app_de_inicio', name: 'App de Inicio', price: 18999, currency: 'MXN' },
    { id: 'app_dual_basica', name: 'App Dual Básica', price: 37999, currency: 'MXN' },
    { id: 'app_funcional_pro', name: 'App Funcional Pro', price: 75999, currency: 'MXN' },
    { id: 'app_a_medida_premium', name: 'App a Medida Premium', price: 134999, currency: 'MXN' },
  ];

  // 3. El useEffect existente para guardar en localStorage está bien,
  // pero es buena práctica verificar también `typeof window` si existe la posibilidad
  // de que se ejecute durante SSR.
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
        content_name: 'Paquetes de Desarrollo de Aplicaciones',
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
      <section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0 m-0">
        <h2 className="display-1 text-center text-white">
          Nuestros servicios de desarrollo de aplicaciones
        </h2>
      </section>
      <section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
        <p className="lead w-100 px-3 px-md-5">
          En JEG Dev Studios te ofrecemos paquetes adaptados a tus necesidades y presupuesto. Ya sea que estés iniciando con una app sencilla o necesites una aplicación móvil completa y escalable, tenemos la solución perfecta para ti.
        </p>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
          <CardProduct
            idProduct={"app_de_inicio"}
            dataPrice={18999}
            title="App de Inicio"
            price="18999"
            moneda="MXN"
            items={[
              "App nativa sencilla para Android o iOS (1 plataforma).",
              "Diseño responsivo y minimalista.",
              "Hasta 3 pantallas principales (Home, Servicios, Contacto).",
              "Sin base de datos ni backend complejo.",
              "Publicación en tienda (Google Play o App Store incluida).",
              "Manual básico de uso y entrega de APK. ",
            ]}
            onAdd={handleAddToCart}
          />
          <CardProduct
            idProduct={"app_dual_basica"}
            dataPrice={37999}
            title="App Dual Básica"
            price="37999"
            moneda="MXN"
            items={[
              "App para Android e iOS (React Native o Kotlin Multiplatform).",
              "Hasta 6 pantallas dinámicas (login, inicio, catálogo, detalles, contacto, perfil).",
              "Integración con base de datos remota y backend en Java.",
              "Sistema básico de autenticación y almacenamiento de datos.",
              "Publicación en ambas tiendas.",
              "Diseño adaptado y personalizado con tu identidad visual.",
            ]}
            onAdd={handleAddToCart}
          />
          <CardProduct
            idProduct={"app_funcional_pro"}
            dataPrice={75999}
            title="App Funcional Pro"
            price="75999"
            moneda="MXN"
            items={[
              "App híbrida o nativa para Android e iOS.",
              "Módulos personalizados (usuarios, productos, pedidos, etc.).",
              "Backend Java con APIs seguras y escalables.",
              "Diseño UI/UX profesional (componentes animados, navegación fluida).",
              "Sistema de notificaciones push.",
              "Base de datos relacional conectada al backend.",
              "Panel de administración web opcional.",
            ]}
            onAdd={handleAddToCart}
          />
          <CardProduct
            idProduct={"app_a_medida_premium"}
            dataPrice={134999}
            title="App a Medida Premium"
            price="134999"
            moneda="MXN"
            items={[
              "App personalizada desde cero (multiplataforma).",
              "Arquitectura avanzada y optimizada.",
              "Funcionalidades complejas (geolocalización, pagos, cámara, multimedia, etc.).",
              "Backend modular con Java (APIs RESTful seguras).",
              "Panel de control con estadísticas y gestión remota.",
              "Mantenimiento técnico por 3 meses incluido.",
              "Asesoría y soporte para estrategias de publicación y escalabilidad.",
            ]}
            onAdd={handleAddToCart}
          />
        </ul>
      </section>
      <CTAProducts />
    </>
  );
}
