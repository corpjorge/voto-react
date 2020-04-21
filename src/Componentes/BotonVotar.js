import React, { Component } from 'react';

class BotonVotar extends Component {

    constructor(props) {
        super(props);
        this.votar = this.votar.bind(this);
    }

    votar(voto) {

        alert('Voto por ' +voto);
        /*
        let data = fetch('/post/1')
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            */
    }
    render() {
        return (
            <button onClick={() => this.votar(this.props.nombre)} className="nav-link btn btn-neutral">
                <i className="now-ui-icons arrows-1_share-66"/>
                <p> Votar</p>
            </button>
        );
    }
}

export default BotonVotar;
