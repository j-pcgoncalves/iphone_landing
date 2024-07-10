import * as Sentry from "@sentry/react";

function App() {

  return (
    <>
      <h1>TESTE</h1>
    </>
  )
}

export default Sentry.withProfiler(App)
