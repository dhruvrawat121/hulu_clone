import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import Navbar from '../components/Navbar'
import requests from "../utils/requests"
import Results from "../components/results"

export default function Home({ results }) {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <Results results={results} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then(res => res.json());
  return {
    props: {
      results:request.results
    }
  }

}