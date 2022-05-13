import React from "react";
import Alert from 'react-bootstrap/Alert';

function AlertMessage({variant, message}){
	return(
		<Alert key={variant} variant={variant}>
			{message}
		</Alert>
	)
}

export default AlertMessage;