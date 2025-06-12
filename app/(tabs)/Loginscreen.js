import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

const Loginscreen = () => {
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'green'} barStyle={'light-content'} translucent={false} />
          <View style={styles.header}> 
           <View style={styles.btn}>
            <View style={styles.flexbtn}>
                <Text>login</Text>
            </View>
            <View>
                <Text>Sign Up</Text>
            </View>
           </View>
          </View>
        </SafeAreaView>
    )
}

 export default Loginscreen

const styles = StyleSheet.create({
    container : {
       bottom:23,
        backgroundColor :'white',
        bottom:150,
        height:'200000'
    },

    header : {
        height: 190,
        backgroundColor: '#1ED760',
        bottom:15,
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,
        
cd
    },

    btn :{
        top:150,
        marginHorizontal:12, GI
        display:'flex',
        alignContent:"center",
        justifyContent:'center',
        flexDirection:'row',
        gap:20,
        height:20,
       
    },

    flexbtn:{
         color:'blue',
    }
})
