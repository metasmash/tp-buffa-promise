import _ from 'lodash'

export const formatSearch = async (search) => _.join(_.split(search.replace(/  +/g, ' '), ' '), '+')

export const destructureResults = (results) =>
    (({
        artistName,
        collectionName,
        trackName,
        collectionViewUrl,
        primaryGenreName,
        previewUrl,
        trackPrice,
        collectionPrice,
        artworkUrl100,
    }) => ({
        artistName,
        collectionName,
        trackName,
        collectionViewUrl,
        primaryGenreName,
        previewUrl,
        trackPrice,
        collectionPrice,
        artworkUrl100,
    }))(results)
