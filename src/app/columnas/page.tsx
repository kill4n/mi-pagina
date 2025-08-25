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
              Reflexiones sobre Servicios Públicos
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed mb-6">
              Análisis y reflexiones sobre el sector de servicios públicos domiciliarios, 
              regulación sectorial y los desafíos en la prestación de servicios de calidad 
              desde la perspectiva del Superintendente de Servicios Públicos.
            </p>
          </div>

          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-lato text-2xl font-bold text-gray-900 mb-3">
                Modernización de la Regulación en Servicios Públicos
              </h3>
              <p className="font-inter text-sm text-gray-500 mb-4">
                Publicado el 15 de enero de 2025
              </p>
              <p className="font-inter text-gray-700 leading-relaxed mb-4">
                La regulación de servicios públicos debe evolucionar para responder 
                a los desafíos del siglo XXI. Necesitamos marcos regulatorios que 
                promuevan la innovación, garanticen la calidad y protejan los derechos 
                de los usuarios en un entorno cada vez más digitalizado.
              </p>
              <a href="#" className="font-inter text-[#0396FF] hover:underline">
                Leer más →
              </a>
            </article>

            <article className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-lato text-2xl font-bold text-gray-900 mb-3">
                Diálogo Sectorial: Clave para una Regulación Efectiva
              </h3>
              <p className="font-inter text-sm text-gray-500 mb-4">
                Publicado el 8 de enero de 2025
              </p>
              <p className="font-inter text-gray-700 leading-relaxed mb-4">
                La construcción de consensos entre usuarios, empresas prestadoras 
                y reguladores es fundamental para lograr una supervisión efectiva. 
                El diálogo sectorial nos permite tomar decisiones informadas que 
                beneficien a todos los actores del ecosistema de servicios públicos.
              </p>
              <a href="#" className="font-inter text-[#0396FF] hover:underline">
                Leer más →
              </a>
            </article>

            <article className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-lato text-2xl font-bold text-gray-900 mb-3">
                Acceso Universal a Servicios Públicos de Calidad
              </h3>
              <p className="font-inter text-sm text-gray-500 mb-4">
                Publicado el 2 de enero de 2025
              </p>
              <p className="font-inter text-gray-700 leading-relaxed mb-4">
                Garantizar que todos los colombianos tengan acceso a servicios públicos 
                de calidad es un imperativo ético y económico. Desde la Superintendencia 
                trabajamos para cerrar brechas y asegurar que ninguna comunidad quede atrás 
                en el acceso a servicios esenciales como agua, energía y gas.
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