import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 170,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        maxWidth: 300,
    },
    cover: {
        width: 157,
        aspectRatio: 1,
        outline: 'none',
    },
}))
