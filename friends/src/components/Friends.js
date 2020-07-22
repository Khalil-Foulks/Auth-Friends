import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendCard from './FriendCard'
import FriendForm from './FriendForm'

export default function Friends(){
    const [friends, setFriends] = useState([])

    const getData = () => {
        axiosWithAuth()
            .get("api/friends")
            .then(res => {
                console.log(res);
                setFriends(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className="friends">
            <div>
                <FriendForm/>
            </div>
            {
                friends.map(friend => {
                        return (
                            <FriendCard key={friend.id} friend={friend}/>
                        )
                })
            }
        </div>

    )
}