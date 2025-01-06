'use client'

import { useState } from 'react'
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'

const activeCodes = [
  { code: 'HAPPY_2025', reward: '100 Spins, 2x Mastery, and 2x EXP for 1 hour' },
  { code: '50K_FOLLOWERS', reward: '50 Spins and 2x EXP for 1 hour' },
  { code: 'TWITTER_75_YAY', reward: '100 Spins' },
  { code: 'JJ_SHUTDOWN', reward: '25 Spins' },
  { code: 'BACK_UP_AGAIN', reward: '25 Spins and 1 hour of 2x EXP' },
  { code: 'TOP_SECRET', reward: '150 Spins' },
  { code: 'MISSION_SHUTDOWN', reward: '50 Spins' },
  { code: 'RELEASE_SHUTDOWN_SRRY', reward: '200 Spins' },
  { code: 'RELEASE', reward: '200 Spins' },
  { code: 'MERRY_CHRISTMAS', reward: '100 Spins' },
]

export default function ActiveCodes() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section id="codes" className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-purple-500">Active Jujutsu Infinite Codes (January 2025)</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {activeCodes.map((item) => (
          <div key={item.code} className="bg-gray-700 p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <code className="text-green-400 font-bold">{item.code}</code>
              <button
                onClick={() => copyToClipboard(item.code)}
                className="text-purple-500 hover:text-purple-400 transition-colors"
                aria-label={`Copy code ${item.code}`}
              >
                {copiedCode === item.code ? (
                  <CheckIcon className="h-5 w-5" />
                ) : (
                  <ClipboardIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            <p className="text-sm text-gray-300">{item.reward}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

