import React from 'react';
import { Dialog } from '@material-ui/core';

function Banner(){
    return(
        <Dialog open="true">
            <h2 className="banner">Thank you for participating in The Shoppies!</h2>
        </Dialog>
    )
}

export default Banner;