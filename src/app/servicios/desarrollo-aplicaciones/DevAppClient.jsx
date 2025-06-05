"use client";
import { useState, useEffect } from "react";
import ShoppingCart from "@/components/ShoppingCart";
import CardProduct from "@/components/CardProduct";
import OrderForm from "@/components/OrderForm";
import CTAProducts from "@/components/CTAProducts";

export default function DevAppClient() {
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
          Nuestros servicios de desarrollo de aplicaciones
        </h2>
      </section>
      <section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
        <p className="lead w-100 px-3 px-md-5">
          En JEG Dev Studios te ofrecemos paquetes adaptados a tus necesidades y presupuesto. Ya sea que estés iniciando con una app sencilla o necesites una aplicación móvil completa y escalable, tenemos la solución perfecta para ti.
        </p>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
          <CardProduct
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
