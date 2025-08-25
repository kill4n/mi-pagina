import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative pt-16"
        style={{
          backgroundImage: `url('/hero-background.png')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-lato text-5xl md:text-7xl font-black mb-4 tracking-wide">
            ANDRÉS CAMACHO
          </h1>
          <p className="font-montserrat text-xl md:text-2xl font-semibold mb-8">
            Candidato al Senado de la República
          </p>
          <p className="font-inter text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ingeniero Electricista, Físico y Magíster en Energías Renovables. 
            Una nueva generación de liderazgo progresista para Colombia.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="font-lato text-3xl font-black text-gray-900 mb-8 text-center leading-tight">
                Perfil Andrés Camacho, Candidato al Senado de la República
              </h2>
              <div className="font-inter text-gray-700 leading-relaxed space-y-6">
                <p className="text-base">
                  <strong>Andrés Camacho Morales</strong> (Bogotá D.C, 1981), es ingeniero eléctrico, físico y magíster en energías renovables, 
                  formado en la Universidad Distrital Francisco José de Caldas y el Tecnológico de Monterrey. Hoy Camacho aspira al Senado 
                  de la República, poniendo a disposición de las y los colombianos una trayectoria que combina la preparación técnica, 
                  con un profundo compromiso social y experiencia probada en gestión pública. Su paso por el Ministerio de Minas y Energía, 
                  entre 2023 y 2025, lo ha convertido en uno de los principales impulsores de la transición energética justa en Colombia 
                  y como un referente de una nueva generación de liderazgos progresistas surgidos del primer gobierno de izquierda 
                  democrática en Colombia.
                </p>
                
                <p className="text-base">
                  Camacho no proviene de las élites tradicionales. Su historia está marcada por la educación pública y el movimiento social. 
                  Durante sus años universitarios, fue vocero de movimientos por la defensa de la educación superior, llegando a ser 
                  Secretario General de la Federación de Estudiantes de la Universidad Distrital (FEUD). Su compromiso con la causa 
                  estudiantil lo llevó a ser elegido como representante estudiantil al Consejo Superior Universitario de la UD, 
                  donde defendió el carácter público, gratuito y de calidad de la educación superior.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-lato text-xl font-bold text-[#0396FF] mb-4">Formación Académica</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Ingeniero Eléctrico - Universidad Distrital Francisco José de Caldas</li>
                      <li>• Físico - Universidad Distrital Francisco José de Caldas</li>
                      <li>• Magíster en Energías Renovables - Tecnológico de Monterrey</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-lato text-xl font-bold text-[#0396FF] mb-4">Experiencia</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Ministerio de Minas y Energía (2023-2025)</li>
                      <li>• Secretario General FEUD</li>
                      <li>• Representante Estudiantil - Consejo Superior UD</li>
                      <li>• Líder en movimientos sociales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-lato text-3xl font-black text-gray-900 mb-8">Mi Compromiso con Colombia</h2>
          <p className="font-inter text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            Trabajamos por una transición energética justa, una sociedad más equitativa e inclusiva. 
            Mi experiencia técnica y política me permite abordar los desafíos actuales con una perspectiva integral, 
            priorizando siempre el bienestar de las comunidades y la sostenibilidad del país.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#0396FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-lato text-xl font-bold text-gray-900 mb-4">Transición Energética</h3>
              <p className="font-inter text-gray-600 leading-relaxed">Impulsar una transición justa hacia energías renovables, 
              creando empleos dignos y protegiendo el medio ambiente.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#0396FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                </svg>
              </div>
              <h3 className="font-lato text-xl font-bold text-gray-900 mb-4">Educación Pública</h3>
              <p className="font-inter text-gray-600 leading-relaxed">Defender y fortalecer la educación superior pública, 
              gratuita y de calidad como motor de transformación social.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#0396FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
                </svg>
              </div>
              <h3 className="font-lato text-xl font-bold text-gray-900 mb-4">Justicia Social</h3>
              <p className="font-inter text-gray-600 leading-relaxed">Construir una Colombia más justa y equitativa, 
              donde las oportunidades sean para todos, no solo para las élites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-lato text-2xl font-bold mb-4 tracking-wider">ANDRÉS CAMACHO</h3>
          <p className="font-inter text-gray-400 mb-6">Construyendo el futuro de Colombia juntos</p>
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://x.com/andrescamachom_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0396FF] transition-colors transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/andrés-camacho-morales-72505b161" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0396FF] transition-colors transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/ingeniero__camacho/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0396FF] transition-colors transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@andres_camacho_m" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0396FF] transition-colors transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.342-1.888-1.464-3.338h-3.853v13.944c-.013 1.403-.633 2.719-1.716 3.64a4.923 4.923 0 01-6.991-1.062 4.923 4.923 0 011.062-6.991 4.923 4.923 0 013.64 1.716c.326.297.594.645.792 1.031v-3.944c-2.729-.235-5.269 1.562-6.08 4.311-.811 2.748.31 5.741 2.683 7.167s5.404.967 7.167-1.406c1.763-2.374.967-5.404-1.406-7.167v-3.944z"/>
              </svg>
            </a>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="font-inter text-sm text-gray-500">
              © 2025 Andrés Camacho. Todos los derechos reservados. | Candidato al Senado de la República
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
