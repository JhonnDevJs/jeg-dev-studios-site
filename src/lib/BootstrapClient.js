// src/components/BootstrapClient.js
'use client';

import { useEffect } from 'react';

function BootstrapClient() {
  useEffect(() => {
    // Importa dinámicamente el JS de Bootstrap que incluye Popper.js
    // Esto asegura que se ejecute solo en el cliente.
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    //console.log("Bootstrap JS loaded via BootstrapClient.js"); // Línea de depuración
  }, []);

  return null; // Este componente no renderiza nada visiblemente
}

export default BootstrapClient;
