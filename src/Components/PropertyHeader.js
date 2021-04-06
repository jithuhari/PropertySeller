import React, { useState } from 'react';
import colors from '../config/colors';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function PropertyHeader({ text, navigation }) {


    const [modalOpen, setModalOpen] = useState(false);


    const pressHandler = () => {
        navigation.goBack()
    }


    return (

        <View style={styles.header}>

            <Modal visible={modalOpen}
                transparent={true}
            >
                <View
                    style=
                    {{
                        backgroundColor: "#000000aa",
                        flex: 1, justifyContent: 'center',

                    }}>
                    <View
                        style=
                        {{
                            backgroundColor: colors.MapContainerColor,
                            margin: 50,
                            padding: 20,
                            borderRadius: 10
                        }}
                    >
                        <View style={styles.DeleteView}>
                            <Text style={styles.DeleteText}>Delete Property</Text>
                        </View>

                        <View style={styles.DeleteView}>
                            <Text style={styles.DeleteTextSub}>Are you sure you want to delete this property ?</Text>
                        </View>

                        <View style={styles.RowView}>
                            <View style={styles.AdjustPos}>
                                <TouchableOpacity
                                    onPress={
                                        () => setModalOpen(false)
                                    }>
                                    <Text style={styles.DeleteTextSub}>NO</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={styles.AdjustPos}>
                                <Text style={styles.DeleteTextSub}>YES</Text>
                            </View>

                        </View>

                    </View>

                </View>
            </Modal>


            <TouchableOpacity
                onPress={pressHandler}
            >

                <View>
                    <FontAwesome style={styles.iconItem} name="chevron-left" size={20}></FontAwesome >
                </View>

            </TouchableOpacity>

            <View><Text style={styles.title}>PropertyId:{text} </Text></View>

            <View>
                <AntDesign
                    onPress={() => setModalOpen(true)}
                    style={styles.iconItem}
                    name="delete"
                    size={25}>
                </AntDesign>
            </View>

            <TouchableOpacity>
            <SimpleLineIcons style={styles.iconItem} name="pencil" size={25}></SimpleLineIcons>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.background,
        justifyContent: 'space-between',
        elevation:2

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: colors.secondary

    },
    iconItem: {
        color: colors.secondary,
        margin: 5
    },
    DeleteView: {
        padding: 5,
    },
    DeleteText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondary
    },
    DeleteTextSub: {
        fontSize: 17,
        color: colors.secondary
    },
    RowView: {
        flexDirection: 'row'
    },
    AdjustPos: {
        marginLeft: 75,
        marginTop: 15,
    }

});