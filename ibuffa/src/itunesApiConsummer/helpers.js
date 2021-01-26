import _ from 'lodash'

export const formatSearch = async (search) => _.join(_.split(search, ' '), '+')

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
    }) => ({
        artistName,
        collectionName,
        trackName,
        collectionViewUrl,
        primaryGenreName,
        previewUrl,
        trackPrice,
        collectionPrice,
    }))(results)
