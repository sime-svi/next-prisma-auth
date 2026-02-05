import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center space-y-6">
      <h1 className="text-5xl font-bold tracking-tight">
        Plantilla Base
      </h1>
      
      <p className="text-xl text-gray-600 max-w-md">
        Next.js 15 · Tailwind v3 · Prisma · Auth.js v5
      </p>

      <div className="flex gap-4">
        <Link 
          href="/login" 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Probar Login
        </Link>
        <Link 
          href="/dashboard" 
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          Ir al Dashboard
        </Link>
      </div>
    </main>
  );
}