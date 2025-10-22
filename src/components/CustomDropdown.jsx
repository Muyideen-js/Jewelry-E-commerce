import { useState, useRef, useEffect } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import './CustomDropdown.css'

function CustomDropdown({ options, value, onChange, placeholder = "Select option" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || '')
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleSelect(option) {
    setSelectedValue(option.value)
    onChange(option.value)
    setIsOpen(false)
  }

  const selectedOption = options.find(option => option.value === selectedValue)

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button
        className={`dropdown-trigger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="dropdown-text">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <FiChevronDown className={`dropdown-icon ${isOpen ? 'rotated' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <button
              key={option.value}
              className={`dropdown-item ${selectedValue === option.value ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomDropdown
