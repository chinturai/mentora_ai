import NavBar from "../components/NavBar"

const Layout = ({ children }) => {
    return <div className='min-h-screen bg-base-100'>
        <NavBar/>
        <main className='mx-auto'>
            {children}
        </main>
    </div>
}

export default Layout
