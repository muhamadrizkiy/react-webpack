/**
 * Created by Hinata on 3/3/2017.
 */
import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>About TDL</h1>
                <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><a className="btn btn-lg btn-success" href="#" role="button">Learn More</a></p>
            </div>
        );
    }
}