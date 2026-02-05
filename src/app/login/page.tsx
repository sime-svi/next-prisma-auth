'use client';

import { useActionState } from 'react'; 
import { authenticate } from '@/lib/actions';

export default function Page() {
  const [errorMessage, dispatch, isPending] = useActionState(authenticate, undefined);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Iniciar Sesión</h1>
        
        {/* Añadimos aria-disabled para que se vea visualmente si está cargando */}
        <form action={dispatch} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              className="w-full border p-2 rounded"
              type="email"
              name="email"
              placeholder="user@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Contraseña</label>
            <input
              className="w-full border p-2 rounded"
              type="password"
              name="password"
              placeholder="******"
              required
              minLength={6}
            />
          </div>
          
          <button
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
            disabled={isPending} // Deshabilita el botón mientras carga
          >
            {isPending ? 'Entrando...' : 'Entrar'}
          </button>
          
          {errorMessage && (
            <div className="text-red-500 text-sm text-center">{errorMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
}