import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Toc from 'material-ui/svg-icons/action/toc';
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover/Popover';
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

export class TableOfContents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    close() {
        this.setState({open: false});
    }

    render() {
        const {open} = this.state;
        const Style = {
            Overlay: {
                position: 'fixed',
                left: 0,
                top: 64,
            },
            Button: {
                padding: 6,
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                width: 'auto',
                height: 'auto',
            },
        };

        const menuItemElememnts = [
            ['top', 'キャラクター'],
            ['basis', '基本情報'],
            ['ability', '能力値'],
            ['standards', '基準値'],
            ['skill', '技能'],
            ['feat', '戦闘特技'],
            ['language', '言語'],
            ['honor', '名誉点/アイテム'],
            ['note', '経歴/メモ'],
            ['weapon', '武器'],
            ['armor', '鎧'],
            ['shield', '盾'],
            ['combat', '回避/防護点'],
            ['ornament', '装飾品'],
            ['inventory', '所持品'],
            ['supply', '消耗品'],
        ].map(([id, text]) => (
            <MenuItem
                href={`#${id}`}
                key={id}
                primaryText={text}
                onTouchTap={() => this.close()}
            />
        ));

        return (
            <div>
                <Paper style={Style.Overlay}>
                    <IconButton
                        ref={(c) => (this.anchorEl = findDOMNode(c))}
                        style={Style.Button}
                        onTouchTap={() => this.setState({open: !open})}
                    >
                        <Toc />
                    </IconButton>
                </Paper>
                <Popover
                    anchorEl={this.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    open={open}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={() => this.close()}
                >
                    <Menu>{menuItemElememnts}</Menu>
                </Popover>
            </div>
        );
    }
}
