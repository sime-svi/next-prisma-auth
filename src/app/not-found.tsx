import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900">404</h2>
      <p className="mt-2 text-lg text-gray-600">Ups, parece que te has perdido.</p>
      <p className="mb-6 text-sm text-gray-500">La página que buscas no existe o ha sido movida.</p>
      
      <Link
        href="/"
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}