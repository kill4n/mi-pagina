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
            DAGOBERTO QUIROGA COLLAZOS
          </h1>
          <p className="font-montserrat text-xl md:text-2xl font-semibold mb-8">
            Superintendente de Servicios Públicos Domiciliarios
          </p>
          <p className="font-inter text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Abogado de la Universidad Libre, líder en administración pública 
            y regulación de servicios públicos domiciliarios.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="font-lato text-3xl font-black text-gray-900 mb-8 text-center leading-tight">
                Perfil Dagoberto Quiroga Collazos, Superintendente de Servicios Públicos
              </h2>
              <div className="font-inter text-gray-700 leading-relaxed space-y-6">
                <p className="text-base">
                  <strong>Dagoberto Quiroga Collazos</strong> es un destacado abogado de la Universidad Libre de Colombia 
                  con una sólida trayectoria en el sector público. Actualmente se desempeña como Superintendente de 
                  Servicios Públicos Domiciliarios, cargo al que fue designado mediante Decreto 1957 del 27 de septiembre 
                  de 2022. Su gestión ha sido reconocida por diversos sectores como técnica, equitativa y colaborativa, 
                  siendo considerado un "superintendente superestrella" por su capacidad de diálogo con el sector privado 
                  y su enfoque preventivo para evitar intervenciones en empresas de servicios públicos.
                </p>
                
                <p className="text-base">
                  Quiroga Collazos ha sido abogado de confianza del presidente Gustavo Petro, representándolo en diversos 
                  procesos legales y contribuyendo a la creación y reconocimiento legal del partido político Colombia Humana. 
                  Su experiencia incluye roles de liderazgo en instituciones clave del Estado, destacándose por su lealtad 
                  al gobierno y su compromiso con la transparencia, presentando su renuncia cada seis meses para evaluación 
                  de desempeño. Su gestión se caracteriza por el equilibrio entre el rigor técnico y la sensibilidad social.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-lato text-xl font-bold text-[#0396FF] mb-4">Formación Académica</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Abogado - Universidad Libre de Colombia</li>
                      <li>• Especialización en Derecho Administrativo</li>
                      <li>• Formación en Regulación de Servicios Públicos</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-lato text-xl font-bold text-[#0396FF] mb-4">Experiencia Destacada</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Superintendente de Servicios Públicos (2022-presente)</li>
                      <li>• Vicerrector Administrativo - Universidad Distrital (2007-2008)</li>
                      <li>• Contralor Delegado - Contraloría General (1998-2002)</li>
                      <li>• Director Jurídico - Alcaldía de Bogotá (2004-2005)</li>
                      <li>• Secretario General - Personería de Bogotá</li>
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
          <h2 className="font-lato text-3xl font-black text-gray-900 mb-8">Visión y Gestión en Servicios Públicos</h2>
          <p className="font-inter text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            Como Superintendente de Servicios Públicos Domiciliarios, mi compromiso es garantizar servicios de calidad, 
            accesibles y equitativos para todos los colombianos. Mi gestión se fundamenta en el equilibrio entre 
            regulación técnica, diálogo sectorial y protección de los derechos de los usuarios.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#0396FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-lato text-xl font-bold text-gray-900 mb-4">Regulación Efectiva</h3>
              <p className="font-inter text-gray-600 leading-relaxed">Supervisión técnica y equitativa del sector de servicios públicos, 
              promoviendo la calidad y continuidad en el suministro de servicios esenciales.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#0396FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="font-lato text-xl font-bold text-gray-900 mb-4">Diálogo Sectorial</h3>
              <p className="font-inter text-gray-600 leading-relaxed">Construcción de consensos entre sector público, privado 
              y usuarios, fomentando la colaboración para mejores resultados regulatorios.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#0396FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5 2A9 9 0 1111 3a9.003 9.003 0 016 12.945"/>
                </svg>
              </div>
              <h3 className="font-lato text-xl font-bold text-gray-900 mb-4">Protección al Usuario</h3>
              <p className="font-inter text-gray-600 leading-relaxed">Defensa de los derechos de los usuarios y promoción 
              de servicios públicos accesibles, de calidad y con tarifas justas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-lato text-2xl font-bold mb-4 tracking-wider">DAGOBERTO QUIROGA COLLAZOS</h3>
          <p className="font-inter text-gray-400 mb-6">Superintendente de Servicios Públicos Domiciliarios</p>
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://www.linkedin.com/in/dagoberto-quiroga-a4853899/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0396FF] transition-colors transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="font-inter text-sm text-gray-500">
              © 2025 Dagoberto Quiroga Collazos. Todos los derechos reservados. | Superintendente de Servicios Públicos Domiciliarios
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
