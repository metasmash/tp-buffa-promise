import _ from 'lodash'

export const formatSearch = async (search) =>
    _.join(_.split(search,' '), '+')

