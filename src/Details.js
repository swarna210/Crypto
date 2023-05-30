import React,{useState,useEffect} from 'react'
import {View,StyleSheet,Text,TextInput,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
// import io from 'socket.io-client';
import axios from 'axios';

export default function Details({route}){
    const { coinId } = route.params;
    console.log("coinId in details" ,coinId)
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:3000/coinlist/${coinId}`)
          .then(response => {
            setData(response.data);
            console.log("data in details",data)
          })
          .catch(error => {
            console.log(error);
          });
      }, [coinId]);
    //   const renderdata = ({data})=>{
        
    return(
        <View style={Styles.container}>
            <View style={Styles.container1}>
                <View style={Styles.firstContainer}>
                        <Text style={Styles.text1}>{data.fullname}</Text>
                        <View style={Styles.subBox}>
                            <Text style={Styles.text2}>{data.id}</Text>
                        </View>
                        <Text style={Styles.text3}>{data.code}</Text>
                </View>
                <View>
                    <Text style={Styles.text4}>{data.title}</Text>
                </View>
            </View>
        <View style={Styles.secondContainer}>
            <View style={{flexDirection:'row'}}>
                <Text style={Styles.text5}>Percentage change{data.p_change1}</Text>
                <Text style={Styles.text6}>{data.code}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={Styles.text5}>Percentage Change {data.p_change2}</Text>
                <Text style={Styles.text6}>{data.code}</Text>
            </View>
        </View>
        <View style={Styles.thirdContainer}>
            <View>
                <Text style={Styles.text8}>OverView</Text>
                    <Text  style={Styles.text7} >
                   {data.overview}
                    </Text>
                
            </View>
            <View>
            <Text style={Styles.text8}>Background</Text>
            <Text style={Styles.text7}>{data.background}</Text>
            </View>
        </View>

        {/* <FlatList data={data} renderdata={renderdata} keyExtractor={data => data.id}/> */}
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        backgroundColor:'#dedede',
        flex:1
    },
    firstContainer:{
        flexDirection:'row',
    },
    container1:{
        // flexDirection:'row',
        height:120,
        width:'90%',
        backgroundColor:'#000',
        marginTop:10,
        borderRadius:20,
        marginLeft:20
    },
    text1:{
        color:'#fff',
        marginLeft:20,
        marginTop:20,
        fontSize:20
    },
    subBox:{
        backgroundColor:'#e8d3e4',
        height:40,
        width:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:20,
        marginLeft:30

    },
    text2:{
        color:'#2f4794',
        fontWeight:'900'
    },
    text3:{
        color:'#deb309',
        marginLeft:30,
        marginTop:20,
        fontSize:20
    },
    text4:{
        color:'#fff',
        marginTop:20,
        marginLeft:20,
        fontSize:15
    },
    secondContainer:{
        height:100,
        width:'90%',
        backgroundColor:'#000',
        marginTop:10,
        borderRadius:20,
        marginLeft:20,
        justifyContent:'center',

    },
    text5:{
        color:'#fff',
        marginLeft:20,
        fontSize:17
    },
    text6:{
        color:'#deb309',
        marginLeft:20,
        fontSize:17
    },
    thirdContainer:{
        height:290,
        backgroundColor:'#000',
        borderRadius:20,
        width:'90%',
        marginLeft:20,
        marginTop:20,
    },
    text7:{
        color:'#fff',
        marginLeft:20,
        marginRight:10
    },
    text8:{
        color:'#deb309',
        marginLeft:20,
        fontSize:17,
        marginTop:10
    }
})
