import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { Audio } from '../../Components'
import Typography from '@material-ui/core/Typography'
import { Container, Tooltip } from '@material-ui/core'
import { useStyles } from './Cards.css'

const MediaControlCard = ({
    artistName,
    collectionName,
    trackName,
    collectionViewUrl,
    primaryGenreName,
    previewUrl,
    trackPrice,
    collectionPrice,
    artworkUrl100,
}) => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <Container>
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
                        <div style={{ marginTop: 10 }}>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                {collectionName}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                {artistName}
                            </Typography>
                        </div>
                    </CardContent>
                </Container>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',

                    marginTop: 10,
                }}
            >
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
            >
                <Audio src={previewUrl} />
            </CardMedia>
        </Card>
    )
}

export default MediaControlCard
