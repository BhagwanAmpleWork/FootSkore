import { View, Text,StyleSheet,Alert} from 'react-native'
import React from 'react'

const About = (props) => {

  // React.useEffect(() => {
  //   const uns = props.navigation.addListener('transitionEnd', (e) => {
  //      Alert.alert("bhagwan");
  //   })
  //   return uns;

  // },[props.navigation])

  React.useLayoutEffect(() => {
      props.navigation.setOptions({
      // headerLargeTitle : true,
    
      headerSearchBarOptions : {
        placeHolder : 'Search',
      
      }
    })
  },[props.navigation]); 
 

    const hasUnsavedChanges = Boolean(true)
    React.useEffect(
        () =>
          props.navigation.addListener('beforeRemove', (e) => {
            const action = e.data.action;
            if (!hasUnsavedChanges) {
              return;
            }
    
            e.preventDefault();
    
            Alert.alert(
              'Discard changes?',
              'You have unsaved changes. Are you sure to discard them and leave the screen?',
              [
                { text: "Don't leave", style: 'cancel', onPress: () => {} },
                {
                  text: 'Discard',
                  style: 'destructive',
                  onPress: () => props.navigation.dispatch(action),
                },
              ]
            );
          }),
        [hasUnsavedChanges, props.navigation]
      );

     

  return (
    <View style={style.contain}>
      <Text>About</Text> 
    </View>
  )
}

const style = StyleSheet.create({
    contain : {
        flex:1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default About