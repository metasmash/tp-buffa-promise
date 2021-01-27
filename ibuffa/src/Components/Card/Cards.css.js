import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: 10,
        height: 170,
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
        width: 157,
        aspectRatio: 1,
        outline: 'none',
    },
}))
