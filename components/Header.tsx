import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-500">Jujutsu Infinite Codes</Link>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="hover:text-purple-500 transition-colors">About</Link></li>
          <li><Link href="#codes" className="hover:text-purple-500 transition-colors">Codes</Link></li>
          <li><Link href="#how-to-redeem" className="hover:text-purple-500 transition-colors">How to Redeem</Link></li>
          <li><Link href="#videos" className="hover:text-purple-500 transition-colors">Videos</Link></li>
          <li><Link href="#faqs" className="hover:text-purple-500 transition-colors">FAQs</Link></li>
        </ul>
      </nav>
    </header>
  )
}

