import React from 'react'

const Footer = () => {
  return (
   <>
      <section className="bg-purple-600 text-white py-20 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Start Exploring Today
        </h2>

        <p className="mb-8 text-lg opacity-90">
          Find the perfect media for your projects.
        </p>

        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          Explore Now
        </button>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center">

        <p>
          © 2026 MediaSearch. All rights reserved.
        </p>

      </footer>
      </>
  )
}

export default Footer