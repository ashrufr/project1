import React from 'react';
import classes from '/src/components/toolbar.module.css';

class toolbar extends React.Component {
    render() {
      return <div className={classes.toolbar}>
        {this.props.title}
        </div>
    }
}

export default toolbar;
