import React from 'react';
import { Dialog } from '@material-ui/core';
import Confetti from 'react-dom-confetti'

function Banner(){
    return(
        <Dialog open="true">
            
            <h2 className="banner"><Confetti active="true"/>Thank you for participating in The Shoppies!</h2>
        </Dialog>
    )
}

export default Banner;