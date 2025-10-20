import { useEffect, useRef, useState } from 'react'
import './SearchOverlay.css'

function SearchOverlay({ onClose, onSubmit }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  function handleKey(e) {
    if (e.key === 'Escape') onClose()
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(query)
  }

  return (
    <div className="search-wrap" onKeyDown={handleKey}>
      <div className="search-card">
        <form onSubmit={handleSubmit} className="search-row">
          <input
            ref={inputRef}
            className="search-input"
            placeholder="Search jewelry..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn" type="submit">Search</button>
          <button className="btn outline" type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  )
}

export default SearchOverlay


