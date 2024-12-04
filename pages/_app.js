import GlobalStyle from '../src/theme/GlobalStyle'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div>
                <GlobalStyle/>
                <Component {...pageProps} />
            </div>            
        </>
    )
}

export default MyApp;