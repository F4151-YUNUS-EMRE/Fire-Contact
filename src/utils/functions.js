import {
    getDatabase,
    ref,
    set,
    push,
    onValue,
    remove,
    update
} from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "./firebase";
import Toastify from "./toastify";


export const AddUser=(info)=>{
    const db=getDatabase(firebase)
    const userRef=ref(db,"users/")
    const newUserRef=push(userRef)

    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    })
    console.log("bilgiler geldi")
}


export const useFetch=()=>{
  const [contactList, setContactList] = useState()
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const db = getDatabase(firebase)
        const userRef = ref(db, "users/")

        onValue(userRef,(snapshot)=>{
            const data=snapshot.val()
            const userArray=[]
                
            for(let id in data){
                userArray.push({id,...data[id]})
            }
            console.log(userArray)
            setContactList(userArray)
            setIsLoading(false)
        })
    }, [])
    return {
        isLoading,
        contactList
    }
}


export const DeleteUser=(id)=>{
       const db = getDatabase(firebase)
       const userRef = ref(db, "users/")
       remove(ref(db,"users/"+id))
       Toastify("Deleted Successfully!")
}


export const UpdateUser=(info)=>{
       const db = getDatabase(firebase)
       const userRef = ref(db, "users/")

       const updates = {};
       updates["users/"+info.id]=info

       return update(ref(db), updates)
}