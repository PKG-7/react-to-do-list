import { useState } from "react"

export default function ToDoForm() {
    const [userInput, setUserInput] = useState('')

    const handleChange = () => {}
    const handleSubmit = () => {}
    const handleKeyPress = () => {}

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Введите значение...'
            />
            <button>Сохранить</button>
        </form>
    )
}
