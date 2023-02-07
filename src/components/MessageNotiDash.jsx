import React from 'react'
import MessageCompo from './templates/MessageCompo';

function MessageNotiDash() {
  return (
    <>
        <MessageCompo
        userImg='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
        user='newPerson1'
        name='Hello there, how are you!'/>
        <MessageCompo
        userImg='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
        user='newPerson2'
        name='Hii there, how are you!'/>
        <MessageCompo
        userImg='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
        user='newPerson3'
        name='Hola, how are you!'/>
        <MessageCompo
        userImg='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
        user='newPerson4'
        name='Yo there, how are you!'/>
        <MessageCompo
        userImg='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
        user='newPerson5'
        name='Hey Man, how are you!'/>

    </>
  )
}

export default MessageNotiDash;