import React from 'react'

const MyFirstComponent = () => {
    const myFirstFunction = () => 'toto'

    return (
        <div>
            <h1>{myFirstFunction()}</h1>
        </div>
    )
}

export default MyFirstComponent
