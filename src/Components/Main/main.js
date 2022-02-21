import React from "react";
import './style.sass'

const Main = () => {
    return (
        <>
            <section className={'main'}>
                <div className={'main_container'}>
                    <div className={'main_wrapperOfTypes'}>
                        <div className={'main_kitchenKnives'}>
                            <div className={'main_firsType'}/>
                            <p className={'main_firsTypeText'}>Кухонные ножи</p>
                        </div>
                        <div className={'main_foldingKnives'}>
                            <div className={'main_secondType'}/>
                            <p className={'main_secondTypeText'}>Складные ножи</p>
                        </div>
                        <div className={'main_knifeSharpener'}>
                            <div className={'main_thirdType'}/>
                            <p className={'main_thirdTypeText'}>Точилки для ножей</p>
                        </div>
                        <div className={'main_kitchenAccessories'}>
                            <div className={'main_fourthType'}/>
                            <p className={'main_fourthTypeText'}>Аксессуары для кухни</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main