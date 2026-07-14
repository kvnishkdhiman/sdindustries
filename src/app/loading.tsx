export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-[#E4572E] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-[#1C1C1C]/60 font-body">Loading...</p>
      </div>
    </div>
  );
}