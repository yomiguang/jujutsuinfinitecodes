export default function GameVideos() {
  const videos = [
    { id: 't3Ovx9QeocM', title: 'Jujutsu Infinite Codes' },
    { id: 'AjNrlqPtUgA', title: 'Jujutsu Infinite Tutorial' },
    { id: 'IeOY7fNPHdo', title: 'Jujutsu Infinite Boss Fight' },
  ]

  return (
    <section id="videos" className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-purple-500">Jujutsu Infinite Game Videos</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div key={video.id} className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  )
}

