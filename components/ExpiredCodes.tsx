const expiredCodes = [
  'JJ_SHUTDOWN',
  'BACK_UP_AGAIN',
  'TOP_SECRET',
  'RELEASE_SHUTDOWN_SRRY',
  'MISSION_SHUTDOWN',
  'WAVE3_PATCH',
  'WELCOME_WAVE3',
  'DIM_MAX',
  'UPDATE_3',
  '350K_YAY',
  'ROLLBACK_SRRY',
]

export default function ExpiredCodes() {
  return (
    <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-purple-500">Expired Jujutsu Infinite Codes</h2>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {expiredCodes.map((code) => (
          <div key={code} className="bg-gray-700 p-2 rounded-md">
            <code className="text-red-400">{code}</code>
          </div>
        ))}
      </div>
    </section>
  )
}

