import React from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = () => {

    const { signOut } = React.useContext(AuthContext);

    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Welcome Home !</Text>
            {/* <TouchableOpacity  onPress={signOut()}>
            <Text >Logout</Text>
            </TouchableOpacity> */}
        </View>
    );
}

export default Home;

