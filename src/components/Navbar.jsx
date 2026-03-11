function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">

      <h1 className="text-xl font-bold tracking-wide">
        OM Enterprises
      </h1>

      <div className="space-x-8 font-medium">
        <a href="#home" className="hover:text-orange-400 transition">Home</a>
        <a href="#services" className="hover:text-orange-400 transition">Services</a>
        <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;