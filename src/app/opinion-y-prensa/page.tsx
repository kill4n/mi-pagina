export default function OpinionYPrensaPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-lato text-4xl font-black text-gray-900 mb-8 text-center">
          Opinión y Prensa
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="font-montserrat text-2xl font-bold text-[#0396FF] mb-4">
              Artículos de Opinión
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed mb-4">
              Análisis y reflexiones sobre regulación de servicios públicos, política pública 
              y temas sectoriales relevantes por parte de Dagoberto Quiroga Collazos.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="font-montserrat text-2xl font-bold text-[#0396FF] mb-4">
              Apariciones en Medios
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed mb-4">
              Entrevistas y participaciones en medios de comunicación donde 
              el Superintendente comparte su visión sobre regulación, servicios públicos 
              y temas de interés sectorial.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="font-montserrat text-2xl font-bold text-[#0396FF] mb-4">
              Comunicados de Prensa
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed mb-4">
              Comunicados oficiales de la Superintendencia de Servicios Públicos 
              Domiciliarios sobre regulaciones, decisiones y temas sectoriales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}