import axios from 'axios'
import _ from 'lodash'
import { destructureResults, formatSearch } from './helpers'

const baseURL = 'https://itunes.apple.com/search?country=fr&media=music&term='

//example of term
//const term='the+pot'

export const getMusicFromSearch = async (search) => {
    try {
        const { data } = await formatSearch(search).then((x) =>
            axios.get(`${baseURL}${x}`)
        )

        return _.map(data.results, destructureResults)
    } catch (err) {
        console.log(err)
    }
}
