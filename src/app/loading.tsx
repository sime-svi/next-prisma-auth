export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* Spinner simple con Tailwind */}
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
    </div>
  );
}