import { createTheme } from '@mui/material/styles';

const colors = {
    mainDark: '#484848',
    lightDark: '#A5A5A5',
    cancelBtnGrey: '#686868',
    iconGrey: '#6C6C6C',
    lightGrey: '#D9D9D9',
    black: '#000',
};

const fontSize = {
    title: 18,
    normal: 14,
    btn: 13,
    subtitle: 12,
};

const theme = createTheme({
    typography: {
        fontFamily: 'Open Sans, sans-serif',
        root: {
            fontFamily: 'Open Sans, sans-serif',
            color: colors.mainDark,
            fontSize: fontSize.title,
        },
        title: {
            fontSize: fontSize.title,
        },
        normal: {
            fontSize: fontSize.normal,
        },
        subtitle: {
            fontSize: fontSize.subtitle,
            color: colors.lightDark,
        },
        footer: {
            fontSize: fontSize.subtitle,
            fontFamily: 'Exo',
            fontWeight: 600,
            color: colors.lightDark,
        },
    },
    palette: {
        primary: {
            light: colors.mainDark,
            main: colors.mainDark,
        },
        lightDark: {
            light: colors.lightDark,
            main: colors.lightDark,
        },
        cancelBtnGrey: {
            light: colors.cancelBtnGrey,
            main: colors.cancelBtnGrey,
        },
        iconGrey: {
            light: colors.iconGrey,
            main: colors.iconGrey,
        },
        blackBtn: {
            light: colors.black,
            main: colors.black,
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                },
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    marginBottom: '0.35em',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: fontSize.btn,
                    textTransform: 'none',
                },
                iconSizeMedium: {
                    '.MuiSvgIcon-root': {
                        fontSize: fontSize.normal,
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    '.black': {
                        color: colors.mainDark, 
                    },
                },
            },
        },
        MuiListItemSecondaryAction: {
            styleOverrides: {
                root: {
                    display: 'flex',
                },
            },
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: 'auto',
                    cursor: 'pointer',
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    '&.pre-load': {
                        width: 10,
                        height: 10,
                        border: '1px solid #E0E0E0',
                        borderRadius: '50%',
                        padding: 0,
                        margin: '5px',
                    },
                    '&.small': {
                        width: '5px',
                        height: '5px',
                        backgroundColor: colors.lightGrey,
                        borderRadius: '50%',
                        padding: 0,
                        margin: '5px',
                        transition: 'width 0.3s, height 0.3s',
                    },
                    '&.big': {
                        width: '10px',
                        height: '10px',
                        backgroundColor: colors.lightGrey,
                        borderRadius: '50%',
                        padding: 0,
                        margin: '5px',
                        transition: 'width 0.3s, height 0.3s',
                    },
                    '&.MuiGrid-direction-xs-column':{
                        '&.MuiGrid-root>.MuiGrid-item>.MuiPaper-root': {
                            flexDirection: 'row',
                            textAlign: 'left',
                            padding:0,
                        },
                    },

                },       
            },
        },
    },
});

export default theme;
