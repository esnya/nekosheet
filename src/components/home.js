import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import Add from 'material-ui/lib/svg-icons/content/add';
import React, {PropTypes} from 'react';
import {CharacterList} from '../containers/character-list';
import {CreateDialog} from '../containers/create-dialog';

export const Home = (props) => {
    const {
        onCreate,
    } = props;

    return (
        <div>
            <AppBar
                iconElementRight={
                    <IconButton onTouchTap={onCreate}><Add /></IconButton>
                }
                title="Nekosheet"
            />
            <CharacterList />
            <CreateDialog />
        </div>
    );
};
Home.propTypes = {
    onCreate: PropTypes.func.isRequired,
};
