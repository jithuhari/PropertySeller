import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import colors from '../config/colors';

const PickerExp = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker  
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    
  },
  picker: {
    //flex: 1,
    paddingTop: 40,
    color: colors.secondary,
  },
 
});

export default PickerExp;