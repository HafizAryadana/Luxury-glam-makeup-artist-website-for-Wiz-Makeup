'use client';

import { motion } from "framer-motion";

export default function WizMakeupLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#120d08] to-black text-white font-sans overflow-hidden relative scroll-smooth">

      {/* GOLD GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#b08b57] rounded-full blur-3xl opacity-20 -translate-x-24 -translate-y-24"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d8c3a5] rounded-full blur-3xl opacity-10 translate-x-24 translate-y-24"></div>

      {/* ORNAMENT */}
      <div className="absolute top-24 right-10 text-7xl text-[#b08b57] opacity-10 rotate-12 select-none">
        ✿
      </div>

      <div className="absolute bottom-40 left-10 text-6xl text-[#d8c3a5] opacity-10 -rotate-12 select-none">
        ❀
      </div>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center justify-center text-center px-6 py-20 md:py-28"
      >
        <div className="max-w-4xl mx-auto relative z-10">

          {/* LOGO */}
          <img
            src="/wiz.png"
            alt="WizMakeup Logo"
            className="w-[320px] md:w-[520px] mx-auto object-contain mb-10"
          />

          <p className="text-lg md:text-xl text-[#d8c3a5] mb-10 leading-relaxed max-w-3xl mx-auto">
            Professional makeup services for graduation, engagement,
            wedding, bridesmaid, and special events with elegant and
            flawless results.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/6281904881511"
              className="px-8 py-3 rounded-2xl bg-[#b08b57] text-white shadow-lg hover:scale-105 transition"
            >
              Book via WhatsApp
            </a>

            <a
              href="#portfolio"
              className="px-8 py-3 rounded-2xl border border-[#d8c3a5] text-[#d8c3a5] hover:bg-[#b08b57] hover:text-white transition"
            >
              View Portfolio
            </a>
          </div>

        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="px-6 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <div className="aspect-[4/5] rounded-3xl bg-[#1a120a] border border-[#3a2a18] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center hover:scale-105 transition duration-700"></div>
          </div>
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#b08b57] mb-3">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#f5e7d0]">
            Elegant Makeup With a Soft Glam Touch
          </h2>

          <p className="text-[#d8c3a5] leading-relaxed mb-5">
            Wiz Makeup provides professional makeup services for various
            occasions including graduation, engagement, wedding, and
            party makeup.
          </p>

          <p className="text-[#d8c3a5] leading-relaxed">
            Using premium products and customized looks to enhance your
            natural beauty while keeping your makeup flawless all day.
          </p>
        </div>
      </motion.section>
      {/* PORTFOLIO */}
      <motion.section
        id="portfolio"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="px-6 py-24 bg-gradient-to-b from-black via-[#120d08] to-black"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-sm text-[#b08b57] mb-3">
              Portfolio
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-[#f5e7d0]">
              Makeup Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "/portofolio1.jpeg",
              "/portofolio2.jpeg",
              "/portofolio3.jpeg",
              "/portofolio4.jpeg",
              "/potrofolio5.jpeg",
              "/potrofolio6.jpeg",
            ].map((photo, item) => (
              <div
                key={item}
                className="aspect-[4/5] rounded-3xl border border-[#3a2a18] shadow-xl hover:scale-[1.03] hover:-translate-y-2 transition duration-500 cursor-pointer relative overflow-hidden bg-[#1a120a]"
              >
                <img
                  src={photo}
                  alt={`Portfolio ${item + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PRICE LIST */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="px-6 py-24 bg-gradient-to-b from-black via-[#120d08] to-black"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-sm text-[#b08b57] mb-3">
              Pricelist
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-[#f5e7d0]">
              Makeup Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* REGULAR */}
            <div className="bg-[#1a120a] rounded-3xl p-8 shadow-2xl border border-[#3a2a18] hover:-translate-y-2 transition duration-500">
              <h3 className="text-2xl mb-6 font-medium text-[#b08b57]">
                Regular
              </h3>

              <div className="space-y-4 text-[#d8c3a5]">
                <div className="flex justify-between">
                  <span>Wisuda SMP</span>
                  <span>135K</span>
                </div>
                <div className="flex justify-between">
                  <span>Wisuda SMA</span>
                  <span>175K</span>
                </div>
                <div className="flex justify-between">
                  <span>Year Book</span>
                  <span>150K</span>
                </div>
                <div className="flex justify-between">
                  <span>Party</span>
                  <span>175K</span>
                </div>
                <div className="flex justify-between">
                  <span>Bridesmaid</span>
                  <span>200K</span>
                </div>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="bg-[#b08b57] text-white rounded-3xl p-8 shadow-2xl hover:-translate-y-2 transition duration-500 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>

              <h3 className="text-2xl mb-6 font-medium">
                Premium
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Graduation Univ</span>
                  <span>250K</span>
                </div>
                <div className="flex justify-between">
                  <span>Engagement</span>
                  <span>350K</span>
                </div>
                <div className="flex justify-between">
                  <span>Unduh Mantu</span>
                  <span>350K</span>
                </div>
                <div className="flex justify-between">
                  <span>Prewedding</span>
                  <span>350K</span>
                </div>
                <div className="flex justify-between">
                  <span>Akad Makeup Only</span>
                  <span>500K</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <section className="px-6 py-24 bg-gradient-to-b from-black via-[#120d08] to-black text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-[#b08b57] mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#f5e7d0]">
            Ready to Book Your Makeup Session?
          </h2>

          <p className="text-[#d8c3a5] mb-8 leading-relaxed">
            Contact us via WhatsApp or Instagram for booking and more
            information.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6281904881511"
              className="px-8 py-3 rounded-2xl bg-[#b08b57] text-white shadow-lg hover:scale-105 transition"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/wizmakeup_"
              className="px-8 py-3 rounded-2xl border border-[#d8c3a5] text-[#d8c3a5] hover:bg-[#b08b57] hover:text-white transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-[#d8c3a5] bg-black border-t border-[#3a2a18]">
        © 2026 Wiz Makeup — All Rights Reserved
      </footer>
    </div>
  );
}
