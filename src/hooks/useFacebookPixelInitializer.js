// src/hooks/useFacebookPixelInitializer.js
import { useEffect, useState } from 'react';

// Reemplaza esto con tu ID de Píxel de Facebook. Considera usar variables de entorno.
const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '466277362702541';

// Flags globales para asegurar que el script y la inicialización ocurran solo una vez por carga de página.
let fbScriptLoaded = false;
let fbPixelInitializedForId = false;

export function useFacebookPixelInitializer() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!PIXEL_ID || PIXEL_ID === '466277362702541') {
      console.warn('Facebook Pixel ID no está configurado correctamente.');
      return;
    }

    // Si ya está listo e inicializado en esta sesión.
    if (fbPixelInitializedForId && window.fbq) {
      setIsReady(true);
      return;
    }

    // Asegura que la función `fbq` exista (parte del snippet estándar de FB)
    if (!window.fbq) {
      const n = window.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!window._fbq) window._fbq = n;
      n.push = n;
      n.loaded = !0; // Indica que la interfaz fbq está lista, no necesariamente fbevents.js
      n.version = '2.0';
      n.queue = [];
    }

    // Carga fbevents.js si aún no se ha cargado
    const scriptId = 'facebook-pixel-script';
    if (!document.getElementById(scriptId)) {
      const scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.async = true;
      scriptElement.defer = true;
      scriptElement.src = 'https://connect.facebook.net/en_US/fbevents.js';
      
      scriptElement.onload = () => {
        console.log('fbevents.js cargado exitosamente.');
        fbScriptLoaded = true;
        if (!fbPixelInitializedForId) {
          window.fbq('init', PIXEL_ID);
          // Considera si necesitas un 'PageView' genérico aquí para estas páginas.
          // window.fbq('track', 'PageView'); 
          fbPixelInitializedForId = true;
          console.log(`Facebook Pixel inicializado con ID: ${PIXEL_ID}`);
        }
        setIsReady(true);
      };
      scriptElement.onerror = () => {
        console.error('Error al cargar fbevents.js.');
        setIsReady(false);
      };
      
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(scriptElement, firstScript);
      } else {
        document.head.appendChild(scriptElement); // Fallback
      }
    } else {
      // El script ya existe en el DOM.
      fbScriptLoaded = true;
      if (window.fbq && !fbPixelInitializedForId) {
        // El script pudo haber sido cargado por otro medio, pero no inicializado para este ID.
        window.fbq('init', PIXEL_ID);
        // window.fbq('track', 'PageView');
        fbPixelInitializedForId = true;
        console.log(`Facebook Pixel re-inicializado (o confirmado) con ID: ${PIXEL_ID}`);
      }
      // Si ya estaba inicializado, o se acaba de inicializar, marcamos como listo.
      if (fbPixelInitializedForId) {
         setIsReady(true);
      }
    }
  }, []); // El efecto se ejecuta una vez por montaje del componente. Los flags globales manejan la unicidad.

  return isReady;
}
