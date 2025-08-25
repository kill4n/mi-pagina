export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-lato text-4xl font-black text-gray-900 mb-8 text-center">
          Podcast
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 mb-8 text-center">
            <div className="w-32 h-32 bg-[#0396FF] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2ZM8.07 17.1a1 1 0 0 1-1.41.05 1 1 0 0 1 0-1.41 6 6 0 0 1 8.49 0 1 1 0 0 1 0 1.41 1 1 0 0 1-1.41-.05 4 4 0 0 0-5.67 0Zm2.12-4.24a1 1 0 0 1 0 1.41 1 1 0 0 1-1.41 0 2 2 0 0 1 0-2.83 4 4 0 0 1 5.66 0 2 2 0 0 1 0 2.83 1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41Zm2.83-2.83a1 1 0 0 1 0 1.41 1 1 0 0 1-1.41 0 6 6 0 0 0-8.49 0 1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41 8 8 0 0 1 11.31 0Z"/>
              </svg>
            </div>
            
            <h2 className="font-montserrat text-2xl font-bold text-[#0396FF] mb-4">
              Conversaciones sobre el Futuro de Colombia
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed mb-6">
              Un espacio para dialogar sobre los temas que más nos importan: 
              transición energética, educación pública, justicia social y el futuro 
              que queremos construir juntos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-lato text-xl font-bold text-gray-900 mb-3">
                Episodios Recientes
              </h3>
              <p className="font-inter text-gray-600 mb-4">
                Próximamente encontrarás aquí los episodios más recientes de nuestro podcast.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-lato text-xl font-bold text-gray-900 mb-3">
                Invitados Especiales
              </h3>
              <p className="font-inter text-gray-600 mb-4">
                Conversaciones con líderes, académicos y ciudadanos comprometidos 
                con el cambio social.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}