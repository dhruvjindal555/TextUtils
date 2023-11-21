import React from 'react'

function Alerts(props) {
    const capatilize = (word) => {
        let lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatilize(props.alert.type)} : </strong>{props.alert.message}
           
        </div>
    )
}

export default Alerts