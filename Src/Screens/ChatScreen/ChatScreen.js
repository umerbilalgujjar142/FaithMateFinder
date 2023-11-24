import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import Styles from './Styles';
import io from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postMessage, getMessages} from '../../API/add';

const ChatScreen = props => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [recipientId, setRecipientId] = useState(props.route.params.userId);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await AsyncStorage.getItem('userid');
      //convert to int
      setUserId(parseInt(id));
    };
    fetchUserId();

    const newSocket = io('http://192.168.8.102:3000');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('receive_message', msg => {
        setMessages(prevMessages => GiftedChat.append(prevMessages, msg));
      });
    }
  }, [socket]);

  const onSend = async (newMessages = []) => {
    if (socket) {
      // Send message to the server with recipientId and current userId
      socket.emit('send_message', {
        senderId: userId,
        receiverId: recipientId,
        message: newMessages[0].text,
      });
    }

    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));

    try {
      await postMessage(userId, recipientId, newMessages[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch messages for the conversation between userId and recipientId
    if (userId && recipientId) {
      getChatMessages(userId, recipientId);
    }
  }, [userId, recipientId]);

  const getChatMessages = async (userId, recipientId) => {
    try {
      const response = await getMessages(userId, recipientId);

      if (response && response.data && Array.isArray(response.data.messages)) {
        const chatMessages = response.data.messages;

        const formattedMessages = chatMessages.map(msg => ({
          _id: msg.id,
          text: msg.message,
          createdAt: new Date(msg.createdAt),
          user: {
            _id: msg.senderId,
          },
          position: msg.senderId === userId ? 'right' : 'left',
        }));

        formattedMessages.sort(
          (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
        );
        

        setMessages(formattedMessages.reverse());
      } else {
        console.error(
          'Invalid or empty response from getMessages API:',
          response,
        );
      }
    } catch (error) {
      console.error('Error fetching chat messages:', error);
    }
  };

  return (
    <View style={Styles.container}>
      <GiftedChat
        messages={messages}
        onSend={newMessages => {
          onSend(newMessages);
        }}
        user={{
          _id: userId, // Set the current user's ID
        }}
        renderBubble={props => {
          const isSentByCurrentUser = props.currentMessage.user._id === userId;

          return (
            <Bubble
              {...props}
              wrapperStyle={{
                // Style for sender's messages (right side)
                right: {backgroundColor: isSentByCurrentUser ? 'red' : 'blue'},
                // Style for recipient's messages (left side)
                left: {backgroundColor: isSentByCurrentUser ? 'blue' : 'red'},
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default ChatScreen;
