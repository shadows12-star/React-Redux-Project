import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

        {/* Background camera image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598387993441-a364f854cffd?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/60 via-[#0a0e1a]/50 to-[#0a0e1a]" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Defining the{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300 bg-clip-text text-transparent">
              cinematic
            </span>
            <br />standard.
          </h1>
          <p className="text-slate-300 text-base max-w-md mx-auto leading-relaxed">
            AlamMedia is the definitive marketplace for high-fidelity assets, built for
            creators who refuse to compromise on visual excellence.
          </p>
        </div>

      </section>

      {/* MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">
              Our Mission
            </p>
            <h2 className="text-4xl font-extrabold text-white leading-tight mb-6">
              Empowering creators
              <br />with{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                unrivaled precision.
              </span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              We believe that every frame should tell a story, and every pixel should serve
              a purpose. AlamMedia was born from the need for a curated sanctuary where
              quality isn't just a metric, but a philosophy.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              From native 8K masters to professional RAW workflows, we bridge the gap
              between technical superiority and narrative artistry. Our commitment is to
              provide the world's most discerning storytellers with the tools they need to
              define the future of visual communication.
            </p>
          </div>

          {/* Right: Camera lens image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <img
                src="https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&q=80"
                alt="Camera lens"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-white/5 bg-[#0d1117] py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: '10M+', label: 'Media Assets' },
            { value: '500K+', label: 'Creators' },
            { value: '8K', label: 'Max Resolution' },
            { value: '190+', label: 'Countries' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {value}
              </p>
              <p className="text-slate-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to elevate your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              narrative?
            </span>
          </h2>
          <p className="text-slate-400 text-sm mb-10 leading-relaxed">
            Whether you're a world-class creator looking to monetize your best work, or a
            storyteller seeking the perfect frame, your journey starts here.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/collections"
              className="px-7 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25 text-sm"
            >
              Join the Elite Collective
            </Link>
            <Link
              to="/home"
              className="px-7 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-200 text-sm"
            >
              Explore the Vault
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default About