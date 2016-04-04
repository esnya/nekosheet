import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import React, {PropTypes} from 'react';
import {Character} from '../shapes/character';

export const CharacterListItem = (props) => {
    const {
        id,
        user_id,
        name,
        created,
        modified,
    } = props;

    return (
        <ListItem
            href={`/${id}`}
            primaryText={name}
            secondaryText={
                `@${user_id} created:${created} modified:${modified}`
            }
        />
    );
};
CharacterListItem.propTypes = Character;

export const CharacterList = (props) => {
    const {
        characters,
    } = props;

    return (
        <List>
            {characters.map((c) => <CharacterListItem {...c} key={c.id} />)}
        </List>
    );
};
CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape(Character)).isRequired,
};
