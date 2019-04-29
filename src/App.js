import React,{Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {Container,Text} from 'native-base'
import reducers from './reducers'
import firebase from 'firebase'

class App extends Component{

    componentDidMount(){
             // Initialize Firebase
            var config = {
                apiKey: "AIzaSyBc-6nv42Yb1PUHRJP0h9JNXw94doqtgMg",
                authDomain: "seca-28394.firebaseapp.com",
                databaseURL: "https://seca-28394.firebaseio.com",
                projectId: "seca-28394",
                storageBucket: "seca-28394.appspot.com",
                messagingSenderId: "131090448652"
            };
            firebase.initializeApp(config);
    }


    render(){
        return(
        <Provider store={createStore(reducers)}>
            <Container>
                <Text>Hello World</Text>
            </Container>
        </Provider>
        )
    }
}

export default App;