import '../styles/global.css';

// Tudo que vier aqui, vai aparecer para todos os componentes
function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp;
