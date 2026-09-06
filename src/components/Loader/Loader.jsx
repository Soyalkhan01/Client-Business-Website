function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">

      <h1 className="text-5xl font-bold text-pink-600">
        Glow Beauty
      </h1>

      <p className="text-gray-500 mt-3">
        Beauty • Care • Luxury
      </p>

      <div className="mt-8 w-14 h-14 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin"></div>

    </div>
  );
}

export default Loader;