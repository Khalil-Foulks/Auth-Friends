import React from 'react'

export default function FriendCard(props){
    const { friend } = props

    if (!friend) {
		return <h3>Working on fetching friends...</h3>;
	}

    return (
            <div key ={friend.id} className={`friend ${friend.name}`}>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
            </div>
    )
}