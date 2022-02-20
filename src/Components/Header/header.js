import React from "react";
import './style.sass';

const Header = () => {
    return (
            <div className={'header'}>
                <div className={'header_container'}>
                    <div className={'header_contact'}>
                        <div className={'header_menu'}/>
                        <div className={'header_location'}/>
                        <p className={'header_mainNumber'}>
                            8 981 120-11-17
                        </p>
                        <div className={'header_phone'}/>
                        <div className={'header_basket'}/>
                    </div>
                    <div className={'header_logo'}>
                        <div className={'header_wrapperForLogo'}/>
                    </div>
                    <div className={'header_order'}>
                        <div className={'header_basket'}/>
                        <div className={'header_mail'}/>
                        <div className={'header_search'}/>
                    </div>
                </div>
            </div>
    )
}

export default Header