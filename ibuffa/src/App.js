import React, { useState } from 'react'
import { Button, Input } from '@material-ui/core'
import { formatSearch } from './itunesApiConsummer/helpers'
import { getMusicFromSearch } from './itunesApiConsummer/getSongFromTitle'

function App() {
    const [terms, setTerms] = useState('')

    return (
        <div style={{ marginLeft: 100, marginTop: 100 }}>
            <div className="App">Welcome to my app</div>
            <Input
                type="text"
                value={terms}
                onChange={(x) => setTerms(x.target.value)}
            />
            <Button
                onClick={() => {
                    getMusicFromSearch(terms).then(console.log)
                }}
            >
                Search
            </Button>
        </div>
    )
}

export default App
