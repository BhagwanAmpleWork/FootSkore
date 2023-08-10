import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useRef} from 'react';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { BottomSheetModal,BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const BottomSheetData = () => {
  //   const bottomSheetRef = useRef(null);
  //   // const snapPoints = useMemo(() => ['25%', '50%'], []);
  //   // const handleSheetChanges = useCallback(index => {
  //   //   console.log(index);
  //   // }, []);
  //    const handlePresentModalPress = () => {
  //     bottomSheetRef.current?.present();
  //    }
  //    const handleDismissModePress = () => {
  //     bottomSheetRef.current?.dismiss();
  //    }
  //   return (
  //     <View style={style.rootConatiner}>
  //       <BottomSheet
  //         ref={bottomSheetRef}
  //         index={1}
  //         snapPoints={snapPoints}
  //         onChange={handleSheetChanges}
  //       />
  //       <View>
  //         <Text>dfkdjfd</Text>
  //       </View>
  //     </View>
  //   );
};

// const App = () => {
//   return(
//     <BottomSheetModalProvider>
//       <BottomSheetModal/>
//     </BottomSheetModalProvider>
//   )
// }

const style = StyleSheet.create({
  rootConatiner: {
    flex: 1,
  },
});

export default BottomSheetData;
