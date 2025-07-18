import React, { useState, useEffect } from 'react';

const App = () => {

  const [activeSection, setActiveSection] = useState('home');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false); 
    }
  };


  useEffect(() => {

    const sections = ['home', 'quote', 'about'];
    let currentActive = 'home';
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentActive = sectionId;
          break;
        }
      }
    }
    setActiveSection(currentActive);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      <nav className="fixed w-full bg-gray-800 bg-opacity-90 backdrop-blur-sm z-50 shadow-lg rounded-b-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-400">
            Sparkle - Honkai : Star Rail
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-red-400 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex space-x-6">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className={`transition duration-300 ease-in-out hover:text-red-400 ${activeSection === 'home' ? 'text-red-400 font-semibold' : 'text-gray-300'}`}
              >
                Beranda
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('quote')}
                className={`transition duration-300 ease-in-out hover:text-red-400 ${activeSection === 'quote' ? 'text-red-400 font-semibold' : 'text-gray-300'}`}
              >
                Kutipan
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition duration-300 ease-in-out hover:text-red-400 ${activeSection === 'about' ? 'text-red-400 font-semibold' : 'text-gray-300'}`}
              >
                Tentang
              </button>
            </li>
          </ul>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-700 py-2 rounded-b-lg">
            <ul className="flex flex-col items-center space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className={`block w-full py-2 px-4 text-center transition duration-300 ease-in-out hover:bg-gray-600 ${activeSection === 'home' ? 'text-red-400 font-semibold' : 'text-gray-300'}`}
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('quote')}
                  className={`block w-full py-2 px-4 text-center transition duration-300 ease-in-out hover:bg-gray-600 ${activeSection === 'quote' ? 'text-red-400 font-semibold' : 'text-gray-300'}`}
                >
                  Kutipan
                </button>
              </li>
              <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className={`block w-full py-2 px-4 text-center transition duration-300 ease-in-out hover:bg-gray-600 ${activeSection === 'about' ? 'text-red-400 font-semibold' : 'text-gray-300'}`}
                  >
                    Tentang
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>

        <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: 'url("/sparkle-bg.png")' }}
            onError={(e) => { e.target.onerror = null; e.target.src = '/sparkle-bg.png'; }}
          ></div>

          <div className="relative z-10 container mx-auto bg-gray-800 bg-opacity-70 rounded-xl shadow-2xl p-8 md:p-12 border border-red-600">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <div className="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-red-400 drop-shadow-lg">
                  Sparkle
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-6">
                  The Masked Fool of the Stellaron Hunters
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8 max-w-full md:max-w-md">
                  <img
                    src="/sparkle-pose.png"
                    alt="Sparkle Pose 1"
                    className="w-full h-auto object-cover rounded-lg shadow-md border-2 border-red-500"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/sparkle-pose.png'; }}
                  />
                  <img
                    src="/sparkle-mask.png"
                    alt="Sparkle Mask"
                    className="w-full h-auto object-cover rounded-lg shadow-md border-2 border-red-500"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'sparkle-mask.png'; }}
                  />
                  <img
                    src="/sparkle-smile.png"
                    alt="Sparkle Smile"
                    className="w-full h-auto object-cover rounded-lg shadow-md border-2 border-red-500"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/sparkle-smile.png'; }}
                  />

                </div>

                <div className="text-left text-gray-200">
                  <p className="text-lg leading-relaxed mb-4">
                    Seiyuu: Reina Ueda (JP), Lizzie Freeman (EN)
                  </p>
                  <p className="text-lg leading-relaxed">
                    Sparkle adalah anggota misterius dan tidak terduga dari Masked Fools, sebuah organisasi yang memuja Aeon of Elation, Aha. Dia dikenal karena kecintaannya pada teater, kekacauan, dan penguasaan penyamaran yang luar biasa. Baginya, dunia adalah panggung besar, dan setiap interaksi adalah bagian dari pertunjukan yang lebih besar.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    Dia adalah karakter yang sulit ditebak, seringkali berbicara dalam teka-teki dan menikmati memanipulasi situasi untuk hiburan pribadinya. Dengan berbagai topeng dan identitas, Sparkle selalu berhasil mengejutkan orang-orang di sekitarnya, meninggalkan jejak kekaguman dan kebingungan.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    She is <a
                                      href="https://github.com/ClaireFearless" 
                                      target="https://github.com/ClaireFearless" 
                                      rel="noopener noreferrer" 
                                      className="text-red-300 hover:text-red-400 font-semibold underline hover:no-underline">
                    OnyyJuna's
                            </a> Wife. ❤️
                  </p>
                </div>
              </div>

              <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
                <img
                  src="h/sparkle-main.png"
                  alt="Sparkle Main Art"
                  className="w-full max-w-xs md:max-w-full h-auto object-cover rounded-xl shadow-2xl border-4 border-red-700"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/sparkle-main.png'; }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="quote" className="py-20 px-4 bg-gray-800 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/sparkle-quote.png" }}
            onError={(e) => { e.target.onerror = null; e.target.src = '/sparkle-quote.png'; }}
          ></div>
          <div className="relative z-10 container mx-auto max-w-3xl text-center bg-gray-900 bg-opacity-70 p-8 rounded-xl shadow-2xl border border-red-600">
            <p className="text-3xl md:text-4xl italic font-semibold text-red-300 mb-6 leading-relaxed">
              "Hidup adalah sebuah drama, dan kita semua adalah aktor."
            </p>
            <p className="text-xl text-gray-400">- Sparkle, The Masked Fool</p>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8 text-red-400">Tentang Sparkle</h2>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-2/3 text-left">
              
                <p className="text-lg leading-relaxed mb-4 text-gray-200">
                  Sparkle adalah anggota dari Masked Fools, sebuah kelompok yang mengagungkan Aha, Aeon of Elation. Dia adalah karakter yang sangat eksentrik dan karismatik, yang menikmati menciptakan kekacauan dan kegembiraan melalui penyamaran dan trik-triknya. Baginya, dunia adalah panggung besar, dan setiap interaksi adalah bagian dari pertunjukan yang lebih besar.
                </p>
                <p className="text-lg leading-relaxed text-gray-200">
                  Dia memiliki kemampuan untuk mengubah penampilannya dan meniru orang lain dengan sempurna, membuatnya menjadi ahli dalam intrik dan manipulasi. Meskipun motifnya seringkali tidak jelas dan tindakannya bisa jadi ambigu, Sparkle selalu berhasil meninggalkan kesan yang tak terlupakan pada siapa pun yang berinteraksi dengannya. Dia adalah perwujudan dari kegembiraan yang tak terbatas dan kebebasan mutlak.
                </p>
                <p className="text-lg leading-relaxed mt-4 text-gray-200">
                  Sebagai seorang Harmony character, Sparkle sangat ahli dalam mendukung tim dengan memberikan Skill Point tambahan dan meningkatkan Damage rekan tim, menjadikannya salah satu support terbaik di Honkai: Star Rail. Dia memanipulasi medan perang dengan tawa dan tipuan, membuat musuh dan sekutunya sama-sama terkejut.
                </p>
              </div>

              <div className="md:w-1/3 flex flex-col items-center gap-6">
                <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg border border-red-600 bg-gray-800">
                  <img
                    src="/sparkle-detail1.png"
                    alt="Detail Tinggi"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/sparkle-detail1.png'; }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center z-10">
                    <p className="text-5xl font-extrabold text-red-300">165 cm</p>
                    <p className="text-lg text-gray-200 mt-2">Tingginya yang elegan</p>
                  </div>
                </div>

                <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg border border-red-600 bg-gray-800">
                  <img
                    src="/sparkle-detail2.png" 
                    alt="Detail Nama Jepang"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/sparkle-detail2.png'; }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center z-10">
                    <p className="text-4xl font-extrabold text-red-300">花火</p>
                    <p className="text-lg text-gray-200 mt-2">Nama Jepang (Hanabi)</p>
                  </div>
                </div>

                <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg border border-red-600 bg-gray-800">
                  <img
                    src="sparkle-detail3.png" 
                    alt="Detail Ulang Tahun"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/sparkle-detail3.png'; }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center z-10">
                    <p className="text-4xl font-extrabold text-red-300">21 Februari</p>
                    <p className="text-lg text-gray-200 mt-2">Tanggal Ulang Tahun</p>
                  </div>
                </div>

                <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg border border-red-600 bg-gray-800">
                  <img
                    src="/sparkle-detail4.png" 
                    alt="Detail Afiliasi"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/sparkle-detail4.png'; }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center z-10">
                    <p className="text-3xl font-extrabold text-red-300">Masked Fools</p>
                    <p className="text-lg text-gray-200 mt-2">Afiliasi</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 bg-gray-800 text-center text-gray-400">
          <p class="copyright-text">&copy; {new Date().getFullYear()} OnyyJuna All Rights Reserved.</p>
        </footer>
      </div>
    );
  };

  export default App;