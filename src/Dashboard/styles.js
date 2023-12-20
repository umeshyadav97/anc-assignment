import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();
  return {
    mainPaper: {
      borderRadius: "14px",
      boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    container: {
      borderRadius: "12px",
      minWidth: 100,
      maxHeight: "120px",
      color: "white",
      paddingLeft: "18px",
      paddingTop: "20px",
    },
    value: {
      fontSize: 24,
      fontFamily: "Inter Regular",
      marginTop: "20px",
    },
    // list data css
    itemData: {
      border: "1px solid #EAECF0",
      borderRadius: "8px",
    },
    background: {
      backgroundColor: "#EAECF0",
      padding: "10px",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
    },
    headingText: {
      fontSize: "22px",
      fontWeight: "bold",
    },
    teamName: {
      fontSize: "16px",
      fontWeight: "600",
    },
  };
};
