const Layout = ({ children }) => {
    return (
        <div className="container mx-auto">
            <div className="p-8 flex justify-center align-center bg-red-500 rounded-xl m-2 text-white">
                <div className="text-4xl py-2 md:py-8 sm:py-3">Pokeñex</div>
            </div>
            {children}
        </div>
    )
}
export default Layout