const SearchBox = () => {
    return (
        <div className=' ml-6 max-w-none lg:max-w-md mx-auto lg:mr-0  '>
            <div className="relative flex items-center w-auto  h-10 lg:w-full lg:h-12 rounded-lg focus-within:shadow-lg bg-zinc-100 overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                    className="peer bg-zinc-100 h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search your destination.." />
            </div>
        </div>
    )
}
export default SearchBox;