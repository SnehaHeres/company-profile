
function Services() {

  return (

    <section id="services" className="bg-gray-100 p-16">

      <h2 className="text-3xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">

          <img
            src="/machinery.jpg"
            alt="Machinery Foundation Work"
            className="w-full h-40 object-cover rounded mb-4"
          />

          <h3 className="font-bold text-lg">
            Machinery Foundation Work
          </h3>

        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">

          <img
            src="/road.jpg"
            alt="CC Road Construction"
            className="w-full h-40 object-cover rounded mb-4"
          />

          <h3 className="font-bold text-lg">
            CC Road Construction
          </h3>

        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">

<img
src="/solar.jpg"
alt="Solar Plant Installation"
className="w-full h-40 object-cover rounded mb-4"
/>

<h3 className="font-bold text-lg">
Solar Plant Installation
</h3>

</div>

      </div>

    </section>

  );
}

export default Services;