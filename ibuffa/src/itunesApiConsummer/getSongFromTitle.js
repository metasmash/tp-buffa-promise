import axios from 'axios'
import _ from 'lodash'
import { destructureResults, formatSearch } from './helpers'

const baseURL = 'https://itunes.apple.com/search?'

//example of term
//const term='the+pot'

const params = (term) => ({ country: 'fr', media: 'music', term })

export const getMusicFromSearch = async (search) => {
    try {
        const { data } = await formatSearch(search).then((x) =>
            axios.get(baseURL, {
                withCredentials: true,
                params: params(search),
            })
        )

        return _.map(data.results, destructureResults)
    } catch (err) {
        console.log(err)
    }
}
