import {pick} from 'lodash';
import {connect} from 'react-redux';
import {CharacterList as Component} from '../components/character-list';

export const CharacterList =
    connect((state) => pick(state, 'characters'))(Component);
