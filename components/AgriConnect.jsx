import React from 'react';
import { Leaf, Users, ShoppingBag, BookOpen, Sun, CloudRain, Menu, X, Play } from 'lucide-react';


const heroImage = 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3';
const farm1 = 'https://images.unsplash.com/photo-1753345741174-5e69e446c3b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Soil health image
const farm2 = 'https://images.unsplash.com/photo-uulMMGOPUwc?auto=format&fit=crop&w=800&q=80'; // Sunny acres corn field
const market = 'https://images.unsplash.com/photo-zc0lds4WNlU?auto=format&fit=crop&w=800&q=80'; // Fresh tomatoes

export default function AgriConnect() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-yellow-50 text-gray-800">
      {/* Top nav */}
      <header className="fixed w-full z-40 top-0 left-0">
        <div className="backdrop-blur-md bg-white/60 border-b border-white/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="p-2 bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-full shadow-md">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-600">AgriConnect</div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button className="text-sm font-medium hover:text-green-700">Platform</button>
              <button className="text-sm font-medium hover:text-green-700">Marketplace</button>
              <button className="text-sm font-medium hover:text-green-700">Experts</button>
              <button className="text-sm font-medium hover:text-green-700">Learn</button>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-semibold shadow">Sign in</button>
            </nav>

            <div className="md:hidden">
              <button aria-label="menu" className="p-2 rounded-md bg-white/40 shadow"><Menu className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="pt-28">
        <section className="relative overflow-hidden">
          {/* decorative blobs (mimic exein style) */}
          <div className="absolute -left-24 -top-32 w-[520px] h-[520px] bg-gradient-to-tr from-green-200 to-emerald-400 rounded-full opacity-30 blur-3xl transform rotate-45 -z-10"></div>
          <div className="absolute -right-24 -bottom-24 w-[420px] h-[420px] bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-30 blur-3xl transform -z-10"></div>

          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 py-20">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-green-600">Real-time</span>
                <br />
                Farm data & market access for every grower
              </h1>

              <p className="mt-6 text-lg text-gray-700 max-w-xl">A beautiful, simple platform that connects farmers to local buyers, agronomists, and weather intelligence — built for impact and productivity.</p>

              <div className="mt-8 flex gap-4 flex-wrap">
                <button className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform">
                  <Users className="w-4 h-4" />
                  Find Experts
                </button>
                <button className="inline-flex items-center gap-3 px-5 py-3 rounded-full border-2 border-green-200 text-green-700 font-semibold bg-white/80 hover:bg-green-50 transition">
                  <ShoppingBag className="w-4 h-4" />
                  Browse Market
                </button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">🌱</div>
                  <div>
                    <div className="font-semibold">20k+</div>
                    <div className="text-xs">Farmers onboarded</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">🚜</div>
                  <div>
                    <div className="font-semibold">150+</div>
                    <div className="text-xs">Local marketplaces</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-2xl">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-white/60 backdrop-blur-sm">
                <img src={heroImage} alt="farm hero" className="w-full h-80 object-cover" />
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Sunny Acres Co-op</h3>
                      <p className="text-sm text-gray-600 mt-1">Delivering certified organic vegetables to the city market — track harvests and demand.</p>

                      <div className="mt-4 flex items-center gap-2">
                        <div className="text-sm text-gray-700 font-semibold">This week</div>
                        <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs">High demand</div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="text-2xl font-bold text-green-700">$1.20/kg</div>
                      <div className="text-xs text-gray-500">Avg. price</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating quick stats cards */}
              <div className="absolute -bottom-6 left-6 grid grid-cols-3 gap-3">
                <div className="bg-white rounded-xl p-3 shadow border border-white/40 w-44">
                  <div className="text-xs text-gray-500">Soil Moisture</div>
                  <div className="font-semibold mt-1">42%</div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow border border-white/40 w-44">
                  <div className="text-xs text-gray-500">Next Rain</div>
                  <div className="font-semibold mt-1">48 hrs</div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow border border-white/40 w-44">
                  <div className="text-xs text-gray-500">Market Index</div>
                  <div className="font-semibold mt-1">+3.2%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Everything a farmer needs — in one place</h2>
              <p className="mt-4 text-gray-600">Expert consultations, localized weather intelligence, and direct-to-market channels so you sell fair and grow better.</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow border border-green-50 flex gap-3 items-start">
                  <div className="p-2 rounded-md bg-gradient-to-br from-green-600 to-emerald-500 text-white shadow-md"><BookOpen className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold">Ask an Agronomist</div>
                    <div className="text-sm text-gray-500">Live chat and on-demand consultations.</div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl shadow border border-green-50 flex gap-3 items-start">
                  <div className="p-2 rounded-md bg-gradient-to-br from-yellow-500 to-orange-400 text-white shadow-md"><Sun className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold">Hyperlocal Weather</div>
                    <div className="text-sm text-gray-500">7-day forecasts tailored for your fields.</div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl shadow border border-green-50 flex gap-3 items-start">
                  <div className="p-2 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md"><ShoppingBag className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold">Direct Marketplace</div>
                    <div className="text-sm text-gray-500">Sell produce to verified buyers nearby.</div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl shadow border border-green-50 flex gap-3 items-start">
                  <div className="p-2 rounded-md bg-gradient-to-br from-rose-500 to-pink-400 text-white shadow-md">🛰️</div>
                  <div>
                    <div className="font-semibold">Precision Tools</div>
                    <div className="text-sm text-gray-500">Satellite and sensor integrations for smarter yields.</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow">Get started — it's free</button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/30">
                <img src={farm1} alt="field" className="w-full h-44 object-cover" />
                <div className="p-4 bg-white/80 backdrop-blur-sm">
                  <div className="font-semibold">Soil Health Program</div>
                  <div className="text-sm text-gray-600 mt-1">Learn how to restore soil and increase yields.</div>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/30">
                <img src="https://images.unsplash.com/photo-1561451518-165c4648554f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="greenhouse" className="w-full h-44 object-cover" />
                <div className="p-4 bg-white/80 backdrop-blur-sm">
                  <div className="font-semibold">Co-op Spotlight</div>
                  <div className="text-sm text-gray-600 mt-1">How local cooperatives scaled up with AgriConnect.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market preview */}
        <section className="bg-gradient-to-b from-white to-yellow-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Local Marketplace Picks</h3>
              <button className="text-sm text-green-700 font-semibold">See all</button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[{
                img: 'https://images.unsplash.com/photo-1689154683800-391752e77996?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Organic Tomatoes
                title: 'Organic Tomatoes',
                price: '$1.50/kg',
                seller: 'Green Valley'
              },{
                img: 'https://images.unsplash.com/photo-1598533639123-ab55777ef8d9?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Sweet Corn (dozen)
                title: 'Sweet Corn (dozen)',
                price: '$2.00',
                seller: 'Sunny Acres'
              },{
                img: 'https://plus.unsplash.com/premium_photo-1665455301915-f56917a69ace?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Heritage Apples
                title: 'Heritage Apples',
                price: '$2.80/kg',
                seller: 'Orchard Hill'
              }].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition">
                  <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-green-700 font-bold">{item.price}</div>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">{item.seller}</div>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 px-3 py-2 rounded-md bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm">Buy</button>
                      <button className="px-3 py-2 rounded-md border border-gray-200 text-sm">Message</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video / Learn CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold">Learn modern farming — in minutes</h3>
              <p className="mt-4 text-gray-600">Bite-sized courses and hands-on tutorials to help increase yields, manage pests, and run a profitable farm.</p>
              <div className="mt-6">
                <button className="px-5 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold inline-flex items-center gap-3"><Play className="w-4 h-4" />Start learning</button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border border-white/30">
              <img src="https://images.unsplash.com/photo-1708794666324-85ad91989d20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="learning video" className="w-full h-56 object-cover" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-12">
          <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-600 rounded-full"><Leaf className="w-4 h-4 text-white" /></div>
                <div className="font-bold">AgriConnect</div>
              </div>
              <p className="text-gray-300">Connecting growers, buyers and experts to build resilient food systems.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <div className="text-gray-400 flex flex-col gap-2 text-sm">
                <span>Marketplace</span>
                <span>Expert Network</span>
                <span>Weather Tools</span>
                <span>Learning</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="text-gray-400 text-sm">
                hello@agriconnect.org
n                <br /> +250 78 000 0000
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">© {new Date().getFullYear()} AgriConnect — Built for impact</div>
        </footer>
      </main>
    </div>
  );
}
