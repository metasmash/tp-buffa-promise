import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import ReactAudioPlayer from 'react-audio-player'
import Typography from '@material-ui/core/Typography'
import { Tooltip } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: 10,
        maxHeight: 170,
        width: 700,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        outline: 'none',
    },
}))

export default function MediaControlCard({
    artistName,
    collectionName,
    trackName,
    collectionViewUrl,
    primaryGenreName,
    previewUrl,
    trackPrice,
    collectionPrice,
    artworkUrl100,
}) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Tooltip title={trackName}>
                        <Typography
                            style={{
                                maxWidth: 150,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}
                            variant="h5"
                        >
                            {trackName}
                        </Typography>
                    </Tooltip>
                    <div style={{ marginTop: 50 }}>
                        <Typography variant="subtitle1" color="textSecondary">
                            {collectionName}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {artistName}
                        </Typography>
                    </div>
                </CardContent>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',

                    marginTop: 10,
                }}
            >
                <ReactAudioPlayer
                    style={{ marginRight: 10, outline: 'none' }}
                    src={previewUrl}
                    controls
                />

                <a href={collectionViewUrl} target="_blank" rel="noreferrer">
                    <Typography variant="subtitle1" color="textSecondary">
                        Access the album link
                    </Typography>
                </a>

                <Typography variant="subtitle1" color="textSecondary">
                    Track price: {trackPrice}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Album price: {collectionPrice}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Genre: {primaryGenreName}
                </Typography>
            </div>
            <CardMedia
                className={classes.cover}
                image={artworkUrl100}
                title={trackName}
                src={previewUrl}
            />
        </Card>
    )
}
