function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >

      <div className="bg-black bg-opacity-70 p-12 rounded-lg shadow-xl">

        <h1 className="text-5xl font-bold mb-4 tracking-wide">
          OM Enterprises
        </h1>

        <p className="text-xl mb-6">
          Civil Construction & Solar Installation Services
        </p>

        <a href="#services">
          <button className="bg-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition shadow-lg">
            Our Services
          </button>
        </a>

      </div>

    </section>
  );
}

export default Hero;