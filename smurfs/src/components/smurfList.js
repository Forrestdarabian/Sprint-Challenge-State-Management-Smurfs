import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import smurf from './smurf';
import { getSmurfs } from '../components/actions.js/index'

const SmurfList = (props) => {

    useEffect(() => {
        props.getSmurfs()
    },[])
    return (
        <div>
            {props.smurfs.map}(smurf =>
                <smurf smurf={smurf} key={smurf.id + smurf.name}/>
            )}
      
        </div>
)
} 

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error

    }
}

export default connect(mapStateToProps,{getSmurfs})(SmurfList)