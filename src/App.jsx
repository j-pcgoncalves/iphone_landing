import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import * as Sentry from "@sentry/react";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
    </main>
  )
}

export default Sentry.withProfiler(App)
