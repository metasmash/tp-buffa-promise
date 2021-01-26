import React, { useState, useEffect } from 'react'
import { Button, Grid, Input, Typography } from '@material-ui/core'
import { getMusicFromSearch } from './itunesApiConsummer/getSongFromTitle'
import _ from 'lodash'
import { Card } from './Components'

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
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{
                    paddingTop: 50,
                    paddingBottom: 20,
                    margin: 'auto',
                    backgroundColor: '#3d6e94',
                    position: 'sticky',
                    top: 0,
                    zIndex: 6,
                    boxShadow: '0px 15px 14px 0px rgba(0,0,0,0.5)',
                }}
            >
                <Typography
                    style={{ marginBottom: 20 }}
                    component="h3"
                    variant="h3"
                >
                    Welcome to iTunes api client.
                </Typography>
                <Input
                    type="text"
                    style={{ backgroundColor: 'white', width: '80%' }}
                    value={terms}
                    onChange={(x) => setTerms(x.target.value)}
                    onKeyPress={(x) => {
                        if (x.key === 'Enter') {
                            getMusicFromSearch(terms).then(setSearch)
                        }
                    }}
                />
                <Button
                    onClick={() => {
                        getMusicFromSearch(terms).then(setSearch)
                    }}
                >
                    Search
                </Button>
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ marginTop: 100 }}
            >
                {search ? (
                    _.map(search, (x, key) => <Card key={key} {...x} />)
                ) : (
                    <Typography component="colorError" variant="colorError">
                        No music found
                    </Typography>
                )}
            </Grid>
        </div>
    )
}

export default App
