'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Aquí podrías enviar el error a un servicio como Sentry
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold text-red-600">¡Algo salió mal!</h2>
      <p className="text-gray-600">Ha ocurrido un error inesperado.</p>
      <button
        onClick={() => reset()} // Intenta recargar la parte que falló
        className="rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}