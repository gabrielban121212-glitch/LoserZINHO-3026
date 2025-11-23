import { Button } from '@/components/ui/button';
import { Users, Shield, MessageCircle, Keyboard } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/zombie-hero-nii7n.png"
            alt="Zombie Apocalypse"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            SURVIVE THE
            <br />
            <span className="text-green-500">APOCALYPSE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Be the last survivor or spread the infection. The choice is yours in this intense multiplayer experience.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-xl px-12 py-8 h-auto font-bold shadow-lg shadow-green-900/50"
          >
            PLAY NOW
          </Button>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <img
                src="/multiplayer-feature-qUYMK.png"
                alt="Multiplayer Action"
                className="w-full h-48 object-cover rounded-lg border border-green-900/30"
              />
            </div>
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-green-950/50 border border-green-900/50">
                <Users className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold">Multiplayer Action</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Battle in massive servers with up to 52 players. Form alliances or go solo in the fight for survival.
            </p>
          </div>

          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <img
                src="/survival-feature-e9Y5G.png"
                alt="Survival Mechanics"
                className="w-full h-48 object-cover rounded-lg border border-green-900/30"
              />
            </div>
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-green-950/50 border border-green-900/50">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold">Survival Mechanics</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Scavenge for items, upgrade your equipment, and master strategic gameplay to outlast the undead hordes.
            </p>
          </div>

          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <img
                src="/community-feature-Qm6uB.png"
                alt="Active Community"
                className="w-full h-48 object-cover rounded-lg border border-green-900/30"
              />
            </div>
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-green-950/50 border border-green-900/50">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold">Active Community</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Join 30,000+ players on Discord. Share strategies, find teammates, and stay updated on new features.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-green-950/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Keyboard className="w-10 h-10 text-green-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Game Controls
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background border border-green-900/30 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-950/50 border border-green-900/50 rounded px-4 py-2 font-mono text-green-400 font-bold min-w-[120px] text-center">
                  WASD / ↑←↓→
                </div>
                <span className="text-lg text-muted-foreground">Movement</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-950/50 border border-green-900/50 rounded px-4 py-2 font-mono text-green-400 font-bold min-w-[120px] text-center">
                  E
                </div>
                <span className="text-lg text-muted-foreground">Pick up items</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-950/50 border border-green-900/50 rounded px-4 py-2 font-mono text-green-400 font-bold min-w-[120px] text-center">
                  B
                </div>
                <span className="text-lg text-muted-foreground">Buy items (Human)</span>
              </div>
            </div>

            <div className="bg-background border border-green-900/30 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-950/50 border border-green-900/50 rounded px-4 py-2 font-mono text-green-400 font-bold min-w-[120px] text-center">
                  Z
                </div>
                <span className="text-lg text-muted-foreground">Teleport to spawn (Zombie)</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-950/50 border border-green-900/50 rounded px-4 py-2 font-mono text-green-400 font-bold min-w-[120px] text-center">
                  MOUSE
                </div>
                <span className="text-lg text-muted-foreground">Use items</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/30 to-background" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <MessageCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connect with 30,000+ players on Discord. Get updates, find teammates, share strategies, and participate in exclusive events.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-green-600 text-green-500 hover:bg-green-950/30 hover:text-green-400 text-lg px-10 py-6 h-auto font-semibold"
          >
            Join Discord
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-green-500">Braains.io</h3>
              <p className="text-muted-foreground">
                The ultimate zombie survival multiplayer experience.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Game</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    Play Now
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    Leaderboards
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-green-500 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-green-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Braains.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

