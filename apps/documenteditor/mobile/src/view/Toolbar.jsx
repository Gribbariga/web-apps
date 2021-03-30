import React from 'react';
import {Navbar, NavLeft, NavRight, NavTitle, Link, Icon} from 'framework7-react';
import { Device } from '../../../../common/mobile/utils/device';
import {Search} from "../controller/Search";

const ToolbarView = props => {
    const disableEditBtn = props.isObjectLocked || props.stateDisplayMode || props.disabledEditControls;
    return (
        <Navbar id='editor-navbar'>
            <div slot="before-inner" className="main-logo"><Icon icon="icon-logo"></Icon></div>
            <NavLeft>
                {props.isShowBack && <Link className='btn-doc-back' icon='icon-back' onClick={props.onBack}></Link>}
                <Link icon='icon-undo' className={!props.isCanUndo && 'disabled'} onClick={props.onUndo}></Link>
                <Link icon='icon-redo' className={!props.isCanRedo && 'disabled'} onClick={props.onRedo}></Link>
            </NavLeft>
            {!Device.phone && <NavTitle>{props.docTitle}</NavTitle>}
            <NavRight>
                <Link className={disableEditBtn && 'disabled'} id='btn-edit' icon='icon-edit-settings' href={false} onClick={e => props.openOptions('edit')}></Link>
                <Link className={disableEditBtn && 'disabled'} id='btn-add' icon='icon-plus' href={false} onClick={e => props.openOptions('add')}></Link>
                { Device.phone ? null : <Link icon='icon-search' searchbarEnable='.searchbar' href={false}></Link> }
                {props.displayCollaboration && <Link id='btn-coauth' href={false} icon='icon-collaboration' onClick={e => props.openOptions('coauth')}></Link>}
                <Link className={props.disabledSettings && 'disabled'} id='btn-settings' icon='icon-settings' href={false} onClick={e => props.openOptions('settings')}></Link>
            </NavRight>
            {/* { Device.phone ? null : <Search /> } */}
            <Search useSuspense={false} />
        </Navbar>
    )
};

export default ToolbarView;