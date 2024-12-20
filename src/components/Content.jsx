
function Content ({title, caption}) {
  return (
    <main className="container mx-auto px-4 py-8">
      <section id="hero" className="text-center py-12 bg-pink-100 rounded-md shadow-md">
        <h2 className="text-4xl font-bold text-pink-600">{title}</h2>
        <p className="mb-4 text-yellow-300">{caption}</p>
        <p className="text-gray-700 mt-4">Crochet products tailored just for you.</p>
        <button className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
          Shop Now
        </button>
      </section>

      <section id="products" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-md text-center shadow-md">
          <h3 className="text-xl font-bold">Crochet</h3>
          <p className="text-gray-600">Rheyy.</p>
        </div>
        <div className="p-4 border rounded-md text-center shadow-md">
          <h3 className="text-xl font-bold">Crochet</h3>
          <p className="text-gray-600">jjjj</p>
        </div>
        <div className="p-4 border rounded-md text-center shadow-md">
          <h3 className="text-xl font-bold">Crochet</h3>
          <p className="text-gray-600">hahha</p>
        </div>
      </section>
    </main>
  );
};

export default Content;
