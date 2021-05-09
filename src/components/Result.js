import React from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function Result(props){

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">{props.results["Title"]}</Popover.Title>
          <Popover.Content>
            <img src={props.results["Poster"]}></img>
          </Popover.Content>
        </Popover>
      );
    
  

        return (
            <OverlayTrigger trigger={["hover", "focus"]} placement="bottom" overlay={popover}>
            <li>{props.results["Title"]} ({props.results["Year"]}) 
                <Button 
                    variant="secondary" size="sm"
                    onClick={() => props.nominateMovie(props.results)}
                    disabled={props.nominations.some(nom => nom["imdbID"] === props.results["imdbID"]) || props.nominations.length === 5 ? true : false}
                    >Nominate</Button>
            </li>
            </OverlayTrigger>
        )
}

export default Result;