import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native'

const DefaultPage = ({ children }) => (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroller}>
            {children}
        </ScrollView>
    </View>
)


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    scroller: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

DefaultPage.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultPage