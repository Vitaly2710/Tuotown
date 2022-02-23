import React from "react";

const LittleComponent = (props) => {
    return(
    <div>
        <div className={'main_blockOfKnife'}>
            <div className={'main_blockWithPlusAndImg'}>
                <p className={'main_addInBasket'}>
                    <div/>
                    <div className={'basket'}/>
                </p>
                <div className={props.img}>
                </div>
            </div>
            <p className={'main_nameKnife'}>
                {props.name}
            </p>
            <div className={'main_priceOfKnives'}>
                <p>{props.price}</p>
                <div>{props._new}</div>
            </div>
        </div>
    </div>)
}

export default LittleComponent