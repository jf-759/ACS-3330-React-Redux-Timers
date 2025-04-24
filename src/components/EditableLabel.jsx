import { useState, useEffect } from 'react'
import { FaPen } from 'react-icons/fa'
import './EditableLabel.css'

function EditableLabel({ value, onSave }) {
    const [isEditing, setIsEditing] = useState(false)
    const [tempValue, setTempValue] = useState(value || "")

    useEffect(() => {
        setTempValue(value || "")
    }, [value])

    const handleBlur = () => {
        setIsEditing(false)
        if(tempValue.trim() !== value) {
            onSave(tempValue.trim())
        }
    }

    return isEditing ? (
        <input
        type='text'
        value={tempValue}
        autoFocus
        onChange={(e) => setTempValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                handleBlur()
            }
        }}
        />
    ) : (
        <span 
            className='edit'
            onDoubleClick={() => setIsEditing(true)}
        >
            {value}
            <FaPen size={12} color='#888' />
        </span>
    )
}

export default EditableLabel