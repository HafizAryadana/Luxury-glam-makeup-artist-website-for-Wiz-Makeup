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
            src="/WIZ.png"
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

      {/* WHY CHOOSE US */}
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
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-[#f5e7d0]">
              Why Choose WizMakeup
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {/* CARD 1 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-500">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl text-[#b08b57] mb-3">
                Premium Products
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Using high quality products for flawless and elegant results.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-500">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl text-[#b08b57] mb-3">
                Long Lasting
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Makeup designed to stay beautiful throughout your special day.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-500">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl text-[#b08b57] mb-3">
                Soft Glam Specialist
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Elegant soft glam looks tailored to your beauty style.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-500">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl text-[#b08b57] mb-3">
                Home Service
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Convenient on-location makeup service for your comfort.
              </p>
            </div>

          </div>

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
        Signature Collection
      </p>

      <h2 className="text-4xl md:text-5xl font-light text-[#f5e7d0]">
        Signature Looks
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {[
        { image: "/portofolio1.jpeg",},
        { image: "/portofolio2.jpeg",},
        { image: "/portofolio3.jpeg",},
        { image: "/portofolio4.jpeg",},
        { image: "/potrofolio5.jpeg",},
        { image: "/potrofolio6.jpeg",},
      ].map((photo, item) => (
        <div
          key={item}
          className="group aspect-[4/5] rounded-3xl border border-[#3a2a18] shadow-xl hover:shadow-[0_0_25px_rgba(176,139,87,0.35)] hover:-translate-y-2 transition duration-500 cursor-pointer relative overflow-hidden bg-[#1a120a]"
        >
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-100 flex items-end p-4">
            <div>
              <p className="text-[#b08b57] text-sm uppercase tracking-[0.2em]">
                WizMakeup
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</motion.section>

            {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="px-6 py-24 bg-gradient-to-b from-black via-[#120d08] to-black"
      >
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-sm text-[#b08b57] mb-3">
              FAQ
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-[#f5e7d0]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">

            {/* FAQ 1 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-6">
              <h3 className="text-xl text-[#b08b57] mb-2">
                Apakah include bulumata?
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Ya, semua paket makeup sudah include bulumata untuk hasil yang lebih flawless.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-6">
              <h3 className="text-xl text-[#b08b57] mb-2">
                Apakah tersedia home service?
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Ya, WizMakeup menyediakan home service sesuai area coverage dan jadwal booking.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-6">
              <h3 className="text-xl text-[#b08b57] mb-2">
                Berapa DP untuk booking?
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Booking dilakukan dengan DP terlebih dahulu untuk mengamankan jadwal makeup Anda.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-6">
              <h3 className="text-xl text-[#b08b57] mb-2">
                Bisa request makeup look?
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Tentu, client dapat request desired look sesuai kebutuhan seperti soft glam, bold glam, atau natural.
              </p>
            </div>

          </div>

        </div>
      </motion.section>

            {/* BOOKING FLOW */}
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
              Booking Flow
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-[#f5e7d0]">
              How To Book WizMakeup
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {/* STEP 1 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-500">
              <div className="text-4xl mb-4">📲</div>
              <h3 className="text-xl text-[#b08b57] mb-3">
                Chat WhatsApp
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Contact WizMakeup via WhatsApp for schedule and consultation.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-500">
              <div className="text-4xl mb-4">💄</div>
              <h3 className="text-xl text-[#b08b57] mb-3">
                Choose Your Look
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Discuss your desired makeup style and special occasion.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-500">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl text-[#b08b57] mb-3">
                Secure Your Slot
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Complete booking with DP payment to lock your appointment.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="bg-[#1a120a] border border-[#3a2a18] rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-500">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl text-[#b08b57] mb-3">
                Get Glam Ready
              </h3>
              <p className="text-[#d8c3a5] leading-relaxed">
                Enjoy your flawless WizMakeup experience on your special day.
              </p>
            </div>

          </div>

        </div>
      </motion.section>

      {/* INSTAGRAM */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="px-6 py-24 bg-gradient-to-b from-black via-[#120d08] to-black text-center"
      >
        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-[#b08b57] mb-3">
            Social Media
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-[#f5e7d0] mb-6">
            Follow Our Glam Journey
          </h2>

          <p className="text-[#d8c3a5] leading-relaxed mb-10 max-w-2xl mx-auto">
            Discover more signature looks, latest makeup transformations,
            and beauty inspirations through our Instagram.
          </p>

          <a
  href="https://instagram.com/wizmakeup_"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#b08b57] text-white shadow-xl hover:scale-105 transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-6 h-6"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>

  Visit Instagram
</a>

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

          </div>
        </div>
      </section>
      {/* STICKY WHATSAPP */}
<a
  href="https://wa.me/6281904881511"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 hover:scale-110 transition duration-300"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-14 h-14 drop-shadow-2xl"
  />
</a>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-[#d8c3a5] bg-black border-t border-[#3a2a18]">
        © 2026 Wiz Makeup — All Rights Reserved
      </footer>
    </div>
  );
}
