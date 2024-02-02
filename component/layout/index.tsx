import Header from './header'
import Footer from './footer'

interface LayoutInterface {
    children : JSX.Element|JSX.Element[]|null
}

function checkWindow() {
    return typeof window !== "undefined";
  }

checkWindow()


export default function Layout ({children} : LayoutInterface) {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
        )
}