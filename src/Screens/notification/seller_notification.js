import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Colors from '../../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../Components/custom_button';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import AdminHome from '../Seller/SellerHome';
import AddNotifi from '../notification/add_notification';
const DATA = [
    {
        id: "1",
        title: "Notification 1",
        date: "12/02/2021"
    },
    {
        id: "2",
        title: "Notification 2",
        date: "07/02/2021"
    },
    {
        id: "3",
        title: "Notification 3",
        date: "02/02/2021"
    },
]


const SellerNotification = () =>{

    const [modalOpenHome,setModalOpenHome]=useState(false);
    const [modalOpenAddNotifi,setModalOpenAddNotifi]=useState(false);
    const navigation = useNavigation();
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

    const Item = ({ item, onPress, style }) => (

        <View style={styles.input}>
            <View>
                <Text style={styles.notfi}>{item.title}</Text>
                <Text style={{ color: "grey" }}>{item.date}</Text>
            </View>
            <TouchableOpacity onPress={() => setDeleteModal(true)}>
                <Entypo
                    name="dots-three-vertical"
                    size={20}
                    color={Colors.secondary}
                />
            </TouchableOpacity>
            {/* deleteModal */}
            <Modal
                isVisible={deleteModal}

                style={{ margin: 0 }}
                backdropOpacity={0}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => setDeleteModal(false)}
                onBackButtonPress={() => setDeleteModal(false)}

            >
                <View style={styles.modal}>
                    <TouchableOpacity>
                        <Text style={{ color: Colors.secondary, fontSize: 17 }}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>


    );
    return(
        <View style={{ backgroundColor: Colors.background, flex:1 , alignItems:'center'}}>
            {/* header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> setModalOpenHome(true)}>
                    <MaterialIcons name="keyboard-arrow-left" size={30} color={Colors.secondary} />
                </TouchableOpacity>
                <View style={styles.head}>
                    <Text style={styles.title}>Notifications</Text>
                </View>
            </View>

            {/* body */}
           
               
                <View style={styles.card}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}

                />
            </View>

                
                <CustomButton text="ADD" onpress={()=> setModalOpenAddNotifi(true)} />
           
        {/* deleteModal
        <Modal
        isVisible={deleteModal}
        
          style={{ margin: 0 }}
          backdropOpacity={0.3}
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
          onBackdropPress={() => setDeeleteModal(false)}
          onBackButtonPress={() => deleteModal(false)}

        >
            <View style={styles.modal}>
                <TouchableOpacity>
                <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </Modal> */}

         {/* Seller Home */}
         <Modal isVisible={modalOpenHome} style={{margin:0,paddingTop:15}}>
                    <AdminHome/>
         </Modal>


              {/* Seller Home */}
         <Modal isVisible={modalOpenAddNotifi} style={{margin:0}}>
                    <AddNotifi/>
        </Modal>

        </View>

        
    );
}

export default SellerNotification;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        elevation: 2,
        flexDirection: 'row'
    },
    head: {
        width: "80%",


    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.secondary,
        alignSelf: 'center'

    },
    card: {
        width: '95%',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        backgroundColor: Colors.card,
        paddingBottom: 20,
        paddingTop:50
        
    },
    input: {
        width: '79%',
        padding: 5,
        borderRadius: 11,
        //elevation: 1.5,
        // shadowColor: '#000',
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.4,
        // shadowRadius: 3,
        backgroundColor:Colors.background,
        height: 75,
        margin: 5,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        

    },
    notfi:{
        color:Colors.secondary,
        fontSize:18
    },
    modal: {
        width: '30%',
        height: 35,
        borderRadius: 3,
        backgroundColor: Colors.background,
        padding: 5,
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        position: 'absolute',
        right:30,
        top:120

    }
});