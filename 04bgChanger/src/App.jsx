import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Buttons from './component/Buttons'

function App() {
    const [color, setColor] = useState("olive");

    const buttonStyle =
        [
            { bgColor: 'red', buttonText: 'Red' },
            { bgColor: 'green', buttonText: 'Green' },
            { bgColor: 'blue', buttonText: 'Blue' },
            { bgColor: 'yellow', buttonText: 'Yellow' },
            { bgColor: 'black', buttonText: 'Black' },
            { bgColor: 'white', buttonText: 'White' },
            { bgColor: 'orange', buttonText: 'Orange' },
            { bgColor: 'pink', buttonText: 'Pink' },
            { bgColor: 'purple', buttonText: 'Purple' },
            { bgColor: 'salmon', buttonText: 'Salmon' },
            { bgColor: 'teal', buttonText: 'Teal' },
            { bgColor: 'orchid', buttonText: 'Orchid' },
        ]

    const handleButtonClick = (newColor) => () => setColor(newColor);

    return (
        <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
                    {buttonStyle.map(({ bgColor, buttonText }) => (
                        <Buttons
                            onClick={handleButtonClick(bgColor)}
                            bgColor={bgColor}
                            buttonText={buttonText}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
