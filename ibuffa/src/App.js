import React, { useState, useEffect } from 'react'
import { Button, Input } from '@material-ui/core'
import { getMusicFromSearch } from './itunesApiConsummer/getSongFromTitle'
import _ from 'lodash'
import { MyFirstComponent } from './Components'

function App() {
    const [terms, setTerms] = useState('')
    const [search, setSearch] = useState()

    useEffect(() => {
        console.log('component did mount')
    }, [])

    useEffect(() => {
        if (search) {
            console.log(search)
        }
    }, [search])

    return (
        <div style={{ marginLeft: 100, marginTop: 100 }}>
            <div className="App">Welcome to my app</div>
            <MyFirstComponent />
            <Input
                type="text"
                value={terms}
                onChange={(x) => setTerms(x.target.value)}
            />
            <Button
                onClick={() => {
                    getMusicFromSearch(terms).then((x) => setSearch(x))
                }}
            >
                Search
            </Button>
            <div style={{ marginTop: 100 }}>
                {search
                    ? _.map(search, (x, key) => <div key={key}>fetched.</div>)
                    : 'Empty'}
            </div>
        </div>
    )
}

export default App
