import Image from 'next/image'

export default function HowToRedeem() {
  return (
    <section id="how-to-redeem" className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-purple-500">How to Redeem Jujutsu Infinite Codes</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Open Roblox and launch Jujutsu Infinite.</li>
            <li>Navigate to the &apos;Customize&apos; option in the main menu.</li>
            <li>Enter the code in the &apos;Redeem Code Here&apos; text box.</li>
            <li>Press the &apos;&gt;&apos; button to claim your rewards.</li>
          </ol>
          <p className="mt-4">
            These codes provide valuable resources that help players progress faster in their journey as Jujutsu sorcerers. 
            Make sure to redeem them quickly before they expire!
          </p>
        </div>
        <div className="md:w-1/3">
          <Image 
            src="/images/redeemcode.png" 
            alt="Redeeming Jujutsu Infinite Codes" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

