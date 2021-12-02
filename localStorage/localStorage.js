import AsyncStorage from "@react-native-async-storage/async-storage"
import toCart from "../StoreRedux/Reducers/cartReducer"

export async function setStorage(key,value){
    try{
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch(e){
        console.log("error set storage with key: "+ key ," error: ",e)
    }
}

export async function getStorage(key){
    try{
        const jsonValue = await AsyncStorage.getItem(key)
        
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e){
        console.log("error get storage with key: "+ key," error: ", e )
    }
}

export async function updateStorage(key, value){
try{
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.mergeItem(key, jsonValue)

} catch(e){
    console.log("error update storage with key: "+ key," error: ", e )
}

}