import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Test import components
import { Drawer, withTheme } from 'react-native-paper'


const DrawerContent = ({ user }) => {

return (
  <SafeAreaView>
    {/* Drawer content Example */}
    <Drawer.Item
    icon="star"
    label="First Item"
    />
  </SafeAreaView>
)
}

DrawerContent.defaultProps = {
  user: {},
}

DrawerContent.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user.user,    
})

export default withTheme(connect(mapStateToProps)(DrawerContent))