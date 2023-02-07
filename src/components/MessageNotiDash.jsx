import React from 'react'
import MessageCompo from './templates/MessageCompo';

function MessageNotiDash() {
  return (
    <>
        <MessageCompo
        image='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
        personName='newPerson1'
        latestMsg='Hello there, how are you!'/>
        <MessageCompo
        image='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
        personName='newPerson2'
        latestMsg='Hii there, how are you!'/>
        <MessageCompo
        image='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
        personName='newPerson3'
        latestMsg='Hola, how are you!'/>
        <MessageCompo
        image='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
        personName='newPerson4'
        latestMsg='Yo there, how are you!'/>
        <MessageCompo
        image='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
        personName='newPerson5'
        latestMsg='Hey Man, how are you!'/>

    </>
  )
}

export default MessageNotiDash;