export default function FAQs() {
  const faqs = [
    {
      question: "What is Jujutsu Infinite?",
      answer: "Jujutsu Infinite is a Roblox RPG inspired by the popular anime and manga series Jujutsu Kaisen. Players create their own Jujutsu sorcerer and engage in battles against cursed spirits and challenging bosses."
    },
    {
      question: "How often are new codes released?",
      answer: "New codes are typically released to celebrate milestones, events, or updates. Check back regularly for the latest codes!"
    },
    {
      question: "Why aren't some codes working?",
      answer: "Codes may expire or be deactivated without notice. Always try to redeem codes as soon as possible after they're released."
    },
    {
      question: "How do I get more spins in Jujutsu Infinite?",
      answer: "You can get more spins by redeeming codes, leveling up, or purchasing them with Robux."
    },
    {
      question: "What are innate techniques in Jujutsu Infinite?",
      answer: "Innate techniques are unique abilities that your character can use. They come in different rarity levels, from Common to Special Grade."
    }
  ]

  return (
    <section id="faqs" className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-purple-500">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-md">
            <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

