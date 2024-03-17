




export default function Search({search, setSearch}) {
    return (
        <div className="search-engine">
           <input
           type="text"
           className="city-search"
           placeholder="Enter a city..."
           name="search"
           value={search}
           onChange={(event)=> setSearch(event.target.value)}
           />
        </div>
    )
}