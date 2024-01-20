import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to OpenAI Abstract Analyzer!" />
        <p className="description">
          Enter the abstract of a sociology article below:
        </p>
        <form onSubmit={handleSubmit}>
          <textarea id="abstract" name="abstract" rows="4" cols="50"></textarea>
          <input type="submit" value="Analyze" />
        </form>
        <div id="response"></div>
      </main>

      <Footer />
    </div>
  )
}
