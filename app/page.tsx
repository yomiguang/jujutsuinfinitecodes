import About from '../components/About'
import ActiveCodes from '../components/ActiveCodes'
import ExpiredCodes from '../components/ExpiredCodes'
import HowToRedeem from '../components/HowToRedeem'
import GameVideos from '../components/GameVideos'
import FAQs from '../components/FAQs'

export default function Home() {
  return (
    <div className="space-y-16">
      <About />
      <ActiveCodes />
      <ExpiredCodes />
      <HowToRedeem />
      <GameVideos />
      <FAQs />
    </div>
  )
}

