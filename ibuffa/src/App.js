import React, { useState, useEffect } from 'react'
import {
    Button,
    Grid,
    Input,
    Typography,
    CircularProgress,
    ThemeProvider,
    responsiveFontSizes,
    createMuiTheme,
} from '@material-ui/core'
import { getMusicFromSearch } from './itunesApiConsummer/getSongFromTitle'
import _ from 'lodash'
import { css } from './App.css'
import { Card } from './Components'

const App = () => {
    const [terms, setTerms] = useState('')
    const [search, setSearch] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [firstAttempt, setFirstAttempt] = useState(true)

    const theme = responsiveFontSizes(createMuiTheme())

    const fetchData = async () => {
        await setFirstAttempt(false)
        await setIsLoading(true)
        await setSearch([])
        await getMusicFromSearch(terms)
            .then((x) => {
                setSearch(x)
                _.delay(() => setIsLoading(false), 1500)
            })
            .catch((x) => {
                setSearch([])
                _.delay(() => setIsLoading(false), 1500)
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
                style={css.grid}
            >
                <Button
                    style={css.searchButton}
                    variant="contained"
                    color="primary"
                    href="https://github.com/metasmash/tp-buffa-promise/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github repo
                </Button>
                <ThemeProvider theme={theme}>
                    <Typography component="h3" variant="h3">
                        Welcome to iTunes api client.
                    </Typography>
                </ThemeProvider>
                <Input
                    type="text"
                    style={css.input}
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
                style={{ marginTop: 100, marginBottom: 50 }}
            >
                {firstAttempt ? (
                    <ThemeProvider theme={theme}>
                        <Typography color="primary" variant="h3">
                            Search a music (artist, track name,...)
                        </Typography>
                    </ThemeProvider>
                ) : isLoading ? (
                    <CircularProgress />
                ) : !_.isEmpty(search) ? (
                    _.map(search, (x, key) => (
                        <Grid key={key} style={{ width: '100%', flexGrow: 1 }}>
                            <Card {...x} />
                        </Grid>
                    ))
                ) : (
                    <ThemeProvider theme={theme}>
                        <Typography color="error" variant="h3">
                            No music found :'(
                        </Typography>
                    </ThemeProvider>
                )}
            </Grid>
        </div>
    )
}

export default App
