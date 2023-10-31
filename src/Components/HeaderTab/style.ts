import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    rightHeaderButton: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'green',
    },
    leftHeaderButton: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red'
    },
    headerText: {
        marginTop: 1,
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold', 
        justifyContent: 'center',
        alignItems: 'center',
    },
});