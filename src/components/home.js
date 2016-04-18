import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/content/add';
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
                showMenuIconButton={false}
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
