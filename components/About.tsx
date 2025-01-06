import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-purple-500">Jujutsu Infinite Codes (January 2025)</h2>
          <p className="mb-4">
            Jujutsu Infinite is an exciting Roblox RPG inspired by the popular anime and manga series Jujutsu Kaisen. 
            In this immersive game, players have the opportunity to create their own Jujutsu sorcerer, harnessing 
            various skills and innate techniques while embarking on a thrilling story-driven adventure.
          </p>
          <p>
            As you progress through Jujutsu Infinite, you'll engage in intense battles against cursed spirits and 
            face challenging bosses. The game offers a unique blend of action, strategy, and character development, 
            allowing you to grow stronger and master the art of Jujutsu sorcery.
          </p>
        </div>
        <div className="md:w-1/3">
          <Image 
            src="/images/jujutsuInfinite.png" 
            alt="Jujutsu Infinite Character" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

