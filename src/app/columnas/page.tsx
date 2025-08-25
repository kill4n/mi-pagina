export default function ColumnasPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-lato text-4xl font-black text-gray-900 mb-8 text-center">
          Columnas
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="font-montserrat text-2xl font-bold text-[#0396FF] mb-4">
              Reflexiones sobre Colombia
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed mb-6">
              En esta sección encontrarás mis reflexiones y análisis sobre los desafíos 
              y oportunidades que enfrenta nuestro país. Desde la perspectiva de un 
              ingeniero y físico comprometido con el cambio social.
            </p>
          </div>

          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-lato text-2xl font-bold text-gray-900 mb-3">
                La Transición Energética: Un Camino hacia el Futuro
              </h3>
              <p className="font-inter text-sm text-gray-500 mb-4">
                Publicado el 15 de enero de 2025
              </p>
              <p className="font-inter text-gray-700 leading-relaxed mb-4">
                Colombia tiene una oportunidad histórica de liderar la transición energética 
                en América Latina. Con nuestros recursos naturales y el talento de nuestra 
                gente, podemos construir un modelo energético sostenible que genere empleos 
                dignos y proteja nuestro medio ambiente.
              </p>
              <a href="#" className="font-inter text-[#0396FF] hover:underline">
                Leer más →
              </a>
            </article>

            <article className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-lato text-2xl font-bold text-gray-900 mb-3">
                Educación Pública: La Base de una Sociedad Justa
              </h3>
              <p className="font-inter text-sm text-gray-500 mb-4">
                Publicado el 8 de enero de 2025
              </p>
              <p className="font-inter text-gray-700 leading-relaxed mb-4">
                Como producto de la educación pública, entiendo su poder transformador. 
                Debemos fortalecer nuestras universidades públicas y garantizar que sean 
                espacios de excelencia académica y movilidad social para todos los colombianos.
              </p>
              <a href="#" className="font-inter text-[#0396FF] hover:underline">
                Leer más →
              </a>
            </article>

            <article className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-lato text-2xl font-bold text-gray-900 mb-3">
                Una Nueva Generación de Liderazgo
              </h3>
              <p className="font-inter text-sm text-gray-500 mb-4">
                Publicado el 2 de enero de 2025
              </p>
              <p className="font-inter text-gray-700 leading-relaxed mb-4">
                Colombia necesita líderes que vengan de las bases, que entiendan las 
                luchas del pueblo y que tengan la preparación técnica para proponer 
                soluciones reales. Es hora de una nueva generación comprometida con el cambio.
              </p>
              <a href="#" className="font-inter text-[#0396FF] hover:underline">
                Leer más →
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}