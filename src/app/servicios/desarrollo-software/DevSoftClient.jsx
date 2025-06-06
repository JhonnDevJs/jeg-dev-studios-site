"use client";
import { useState, useEffect } from "react";
import ShoppingCart from "@/components/ShoppingCart";
import CardProduct from "@/components/CardProduct";
import OrderForm from "@/components/OrderForm";
import CTAProducts from "@/components/CTAProducts";
import "./DevSoftClient.css";

export default function DevSoftClient() {
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
    { id: 'paquete_basico', name: 'Paquete Básico', price: 5799, currency: 'MXN' },
    { id: 'paquete_plus', name: 'Paquete Plus', price: 17299, currency: 'MXN' },
    { id: 'paquete_pro', name: 'Paquete Pro', price: 28799, currency: 'MXN' },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_type: 'product_group',
        content_ids: products.map(p => p.id),
        content_name: 'Paquetes de Desarrollo Web',
        contents: products.map(p => ({
          id: p.id,
          quantity: 1,
          item_price: p.price
        })),
        currency: 'MXN',
      });
    }
  }, []);

  const handleAddToCart = ({ idProduct, title, moneda, dataPrice }) => {
    const productData = { idProduct, title, moneda, dataPrice: parseFloat(dataPrice) };

    setCartItems((prevItems) => [...prevItems, productData]);

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
    return "";
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openOrderForm = () => {
    setIsFormVisible(true);

    if (typeof window !== "undefined" && window.fbq && cartItems.length > 0) {
      const totalValue = cartItems.reduce((sum, item) => sum + item.dataPrice, 0);
      const currency = cartItems.length > 0 ? cartItems[0].moneda : 'MXN';
      const content_ids = cartItems.map(item => item.idProduct);
      const contents = cartItems.map(item => ({
        id: item.idProduct,
        quantity: 1,
        item_price: item.dataPrice
      }));

      window.fbq('track', 'InitiateCheckout', {
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
    if (typeof window !== "undefined" && window.fbq && cartItems.length > 0 && orderNumber) {
      const totalValue = cartItems.reduce((sum, item) => sum + item.dataPrice, 0);
      const currency = cartItems.length > 0 ? cartItems[0].moneda : 'MXN';
      const content_ids = cartItems.map(item => item.idProduct);
      const contents = cartItems.map(item => ({
        id: item.idProduct,
        quantity: 1,
        item_price: item.dataPrice
      }));

      window.fbq('track', 'Purchase', {
        contents: contents,
        content_ids: content_ids,
        content_type: 'product',
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
          Nuestros servicios de Software Empresarial
        </h2>
      </section>
      <section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
        <p className="lead w-100 px-3 px-md-5">
          En JEG Dev Studios te ofrecemos paquetes adaptados a tus necesidades y presupuesto. Ya sea que estés comenzando con una landing page o necesites un sitio más robusto, tenemos la solución perfecta para ti.
        </p>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
          <CardProduct
            idProduct="solucion_basica"
            dataPrice={9499}
            title="Solución Básica"
            price="9499"
            moneda="MXN"
            items={[
              "1 módulo funcional (ventas, citas, inventario, etc.).",
              "Interfaz gráfica simple y amigable. ",
              "Software de escritorio o app web local.",
              "Base de datos local (ej. SQLite).",
              "Manual básico de usuario.",
              "Instalación en un equipo.",
            ]}
            onAdd={handleAddToCart}
          />
          <CardProduct
            idProduct={"solucion_estandar"}
            dataPrice={18999}
            title="Solución Estándar"
            price="17299"
            moneda="MXN"
            items={[
              "Hasta 3 módulos integrados (ej. ventas, productos, clientes).",
              "Sistema multiusuario con login y control de acceso.",
              "Interfaz responsiva (web o escritorio).",
              "Base de datos local o en red.",
              "Exportación de reportes a PDF/Excel.",
              "Instalación en hasta 3 dispositivos.",
            ]}
            onAdd={handleAddToCart}
          />
          <CardProduct
            idProduct={"solucion_avanzada"}
            dataPrice={34499}
            title="Solución Avanzada"
            price="34499"
            moneda="MXN"
            items={[
              "Hasta 6 módulos personalizados (ventas, compras, almacén, clientes, empleados, reportes).",
              "Diseño visual adaptado a tu identidad corporativa.",
              "Base de datos en red o en la nube.",
              "Panel de control y estadísticas con gráficas.",
              "Acceso por roles y permisos.",
              "Instalación en red local o servidor.",
              "Capacitación inicial para tu equipo.",
            ]}
            onAdd={handleAddToCart}
          />
          <CardProduct
            idProduct={"solucion_profesional"}
            dataPrice={66899}
            title="Solución Profesional"
            price="66899"
            moneda="MXN"
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
            onAdd={handleAddToCart}
          />
        </ul>
      </section>
      <CTAProducts />
    </>
  );
}
