
const { createTheme } = require("@mui/material/styles");

const theme = createTheme({
    typography: {
        button: {
            textTransform: "none"
        },
        body1: {
            fontSize: "18px"
        },
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: "medium",
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    backgroundColor: "white"
                }
            }
        }
    }
})

export default theme;