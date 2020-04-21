import React, {Component} from 'react';
import Main from "../Componentes/Main";
import Candidatos from '../Candidatos.json';
import * as firebase from "firebase/app";
import 'firebase/database';
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvpLOQAkXIjDeRP_NlXmDN8ArStq6bXmQ",
    authDomain: "corpjorge-156617.firebaseapp.com",
    databaseURL: "https://corpjorge-156617.firebaseio.com",
    projectId: "corpjorge-156617",
    storageBucket: "corpjorge-156617.appspot.com",
    messagingSenderId: "656411599934",
    appId: "1:656411599934:web:11384e698bf006d96d9d6f"
};

// Initialize Firebase

const person  = firebase.initializeApp(firebaseConfig);
/*
const database = firebase.database().ref().child('corpjorge-156617');
*/
var db = person.firestore();





const personas = Candidatos.Candidatos;

class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: 0
        };
    }


    render() {

        db.collection("Candidatos").get().then((querySnapshot) => {
            querySnapshot.forEach(
                (doc) => {
                    this.setState({
                        nombre: doc.data()
                    });
                });
        })

 

        return (
            <div className="main">
                <div className="container">
                    {

                    }
                    <div className="row">
                        {
                            personas.map(s => (
                                    <div className="col">
                                        {s}<Main nombre={s}/>
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Inicio;