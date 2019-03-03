import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClassesTable from './ClassesTable';

const styles = {
    marginLeft: '10px'
}

const containerStyles = {
    width: '400px',
    height: '120px'
}

const imageStyles = {
    width: '100%',
    height: 'auto'
}

let rows;
let table = (<p>Nothing</p>);

let id = 0;
let createData = (className, classNote) => {
    id += 1;
    return { id, className, classNote };
}

class ClassesInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //valores de los textfields
            class1: '',
            noteClass1: '',
            class2: '',
            noteClass2: '',
            class3: '',
            noteClass3: '',
            showTable: false,//controla si se muestra la tabla o no
        }
        this.createTable = this.createTable.bind(this);
    }

    handleChange = (stateName, event) => {
        this.setState({[stateName]: event.target.value});
    };

    createTable = () => {
        rows = [
            createData(this.state.class1, this.state.noteClass1),
            createData(this.state.class2, this.state.noteClass2),
            createData(this.state.class3, this.state.noteClass3)
        ]
        table = <ClassesTable rows={rows} />
        this.setState({showTable: !this.state.showTable})
    };
    
    render() {
        return(
            <div className='ClassesInput' style={{marginTop: 30}}>
                <div className='container' style={containerStyles}>
                    <img src={require('./logo_unitec.png')} style={imageStyles} />
                </div>
                <form className='formClasses' style={{marginTop: 30}}>
                    <TextField 
                        placeholder="Nombre de clase"
                        value={this.state.class1}
                        onChange={this.handleChange.bind(this, 'class1')}
                    />
                    <TextField 
                        placeholder="Nota Parcial 1"
                        style= {styles}
                        value={this.state.noteClass1}
                        onChange={this.handleChange.bind(this, 'noteClass1')}
                    />
                    <br/>
                    <TextField 
                        placeholder="Nombre de clase"
                        value={this.state.class2}
                        onChange={this.handleChange.bind(this, 'class2')}
                    />
                    <TextField 
                        placeholder="Nota Parcial 1"
                        style= {styles}
                        value={this.state.noteClass2}
                        onChange={this.handleChange.bind(this, 'noteClass2')}
                    />
                    <br/>
                    <TextField 
                        placeholder="Nombre de clase"
                        value={this.state.class3}
                        onChange={this.handleChange.bind(this, 'class3')}
                    />
                    <TextField 
                        placeholder="Nota Parcial 1"
                        style= {styles}
                        value={this.state.noteClass3}
                        onChange={this.handleChange.bind(this, 'noteClass3')}
                    />
                    <br/>
                    <br/>
                    <Button 
                        variant="contained" color="primary" onClick={this.createTable.bind(this)} style={{float: 'left'}}>
                        CONTINUAR
                    </Button>
                    <br/>
                    <br/>
                </form>
                <div className="tableClasses">
                    {this.state.showTable ?
                    table :
                    <div></div>
                }</div>
            </div>
        );
    }
}

export default ClassesInput;