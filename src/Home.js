import React ,{useState,useEffect} from 'react'
import {View,StyleSheet,Text,TextInput,FlatList} from 'react-native'
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons'
// import io from 'socket.io-client';

export default function Home({navigation}){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://192.168.29.192:3000/coinlist')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
          console.log("data in home",data)
      }, []);
const Details= (coinId) =>{
    navigation.navigate('Details', { coinId });
    console.log("coinId in home",coinId)
}
const renderItem = ({item})=>{
    return(
        <View style={Styles.coinContainer}>
        <Text style={Styles.coinText}>{item.name}</Text>
        <Text style={Styles.coinSubText} onPress={()=> Details(item.id)}>{item.code}</Text>
    </View>
    )
}

    return(
      
        <View style={Styles.container}>
            
            <View style={{marginTop:20}}>
                <TextInput placeholder='Search Coin Here' style={Styles.inputText}/>
            </View>
           
                <FlatList data={data} renderItem={renderItem} />
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        backgroundColor:'#dedede',
        flex:1
    },
    headerContainer:{
        flexDirection:'row',
        backgroundColor:'#3b3838',
        height:50,
        alignItems:'center',
    },
    iconStyle:{
        marginLeft:10
    },
    homeText:{
        fontSize:15,
        color:'#fff',
        marginLeft:120
    },
    inputText:{
        backgroundColor:'#fff',
        borderWidth:0.5,
        borderRadius:20,
        width:'90%',
        marginLeft:20,
        paddingLeft:20,
        height:40

    },
    coinContainer:{
        backgroundColor:'#000',
        height:55,
        width:'90%',
        borderRadius:15,
        marginTop:20,
        marginLeft:20,
        // justifyContent:'center',
        flexDirection:'row'
    },
    coinText:{
        color:'#fff',
        fontSize:20,
        marginLeft:20,
        marginTop:10
    },
    coinSubText:{
        color:'#deb309',
        fontSize:20,
        marginLeft:140,
        marginTop:10,
        
    }
})