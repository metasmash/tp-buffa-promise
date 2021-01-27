import React, { useState, useEffect } from 'react'
import {
    Button,
    Grid,
    Input,
    Typography,
    CircularProgress,
} from '@material-ui/core'
import { getMusicFromSearch } from './itunesApiConsummer/getSongFromTitle'
import _ from 'lodash'
import { Card } from './Components'

function App() {
    const [terms, setTerms] = useState('')
    const [search, setSearch] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [firstAttempt, setFirstAttempt] = useState(true)

    const fetchData = async () => {
        await setFirstAttempt(false)
        await setIsLoading(true)
        await setSearch([])
        await getMusicFromSearch(terms)
            .then((x) => {
                setSearch(x)
                setIsLoading(false)
            })
            .catch((x) => {
                setSearch([])
                setIsLoading(false)
                console.log(x)
            })
        return { status: 'done' }
    }

    useEffect(() => {
        console.log('component did mount')
    }, [])

    return (
        <div style={{ height: '100%' }}>
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
                <Button
                    style={{
                        position: 'absolute',
                        width: 200,
                        right: 0,
                        top: 0,
                    }}
                    variant="contained"
                    color="primary"
                    href="https://github.com/metasmash/tp-buffa-promise/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github repo
                </Button>
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
                            fetchData().then(console.log)
                        }
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    style={{ height: 32 }}
                    onClick={() => {
                        fetchData().then(console.log)
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
                {firstAttempt ? (
                    <Typography color="primary" variant="h3">
                        Search a music (artist, track name,...)
                    </Typography>
                ) : isLoading ? (
                    <CircularProgress />
                ) : !_.isEmpty(search) ? (
                    _.map(search, (x, key) => <Card key={key} {...x} />)
                ) : (
                    <Typography color="error" variant="h3">
                        No music found :'(
                    </Typography>
                )}
            </Grid>
        </div>
    )
}

export default App
