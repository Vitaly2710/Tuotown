import React from "react";
import './style.sass'
import { AiOutlinePlus, AiOutlineRight } from 'react-icons/ai'
import Plus from '../assets/mainImg/Plus.png'
import Basket from '../assets/mainImg/bascet.png'

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
                    <div className={'main_goods'}>
                        <div className={'main_collectionOfTuoTown'}>
                            <p>Познакомьтесь с коллекцией ножей TUOTOWN</p>
                        </div>
                        <div className={'main_blockOfKnife'}>
                            <div className={'main_blockWithPlusAndImg'}>
                                <p className={'main_addInBasket'}>
                                    <div/>
                                    <div className={'basket'}/>
                                </p>
                                <div className={'main_imgSq01-b'}>
                                </div>
                            </div>
                            <p className={'main_nameKnife'}>
                                Складной нож SQ01-B
                            </p>
                            <div className={'main_priceOfKnives'}>
                                <p>850 p.</p>
                                <div>Новинка</div>
                            </div>
                        </div>
                        <div className={'main_blockOfKnife'}>
                            <div className={'main_blockWithPlusAndImg'}>
                                <p className={'main_addInBasket'}>
                                    <div/>
                                    <div className={'basket'}/>
                                </p>
                                <div className={'main_imgJj001-TUO-B'}>
                                </div>
                            </div>
                            <p className={'main_nameKnife'}>
                                Складной нож JJ001-TUO-B
                            </p>
                            <div className={'main_priceOfKnives'}>
                                <p>12 850 p.</p>
                            </div>
                        </div>
                        <div className={'main_blockOfKnife'}>
                            <div className={'main_blockWithPlusAndImg'}>
                                <p className={'main_addInBasket'}>
                                    <div/>
                                    <div className={'basket'}/>
                                </p>
                                <div className={'main_imgSq01-b'}>
                                </div>
                            </div>
                            <p className={'main_nameKnife'}>
                                Складной нож SQ01-B
                            </p>
                            <div className={'main_priceOfKnives'}>
                                <p>850 p.</p>
                            </div>
                        </div>
                        <div className={'main_blockOfKnife'}>
                            <div className={'main_blockWithPlusAndImg'}>
                                <p className={'main_addInBasket'}>
                                    <div/>
                                    <div className={'basket'}/>
                                </p>
                                <div className={'main_imgJj001-TUO-B'}>
                                </div>
                            </div>
                            <p className={'main_nameKnife'}>
                                Складной нож JJ001-TUO-B
                            </p>
                            <div className={'main_priceOfKnives'}>
                                <p>12 850 p.</p>
                            </div>
                        </div>
                        <div className={'main_instagram'}>

                        </div>
                        <div className={'main_blockOfKnife'}>
                            <div className={'main_blockWithPlusAndImg'}>
                                <p className={'main_addInBasket'}>
                                    <div/>
                                    <div className={'basket'}/>
                                </p>
                                <div className={'main_imgJj001-TUO-B'}>
                                </div>
                            </div>
                            <p className={'main_nameKnife'}>
                                Складной нож JJ001-TUO-B
                            </p>
                            <div className={'main_priceOfKnives'}>
                                <p>12 850 p.</p>
                            </div>
                        </div>
                    </div>
                    <h3 className={'main_mailConnection'}>
                        Узнавайте первым о новинках и новостях
                    </h3>
                    <div className={'main_connectInput'}>
                        <input placeholder={'Ваш e-mail'}/>
                        <button>
                            <AiOutlineRight/>
                        </button>
                    </div>
                    <div className={'main_goods'}>
                        <div className={'main_blockOfKnife'}>
                            <div className={'main_blockWithPlusAndImg'}>
                                <p className={'main_addInBasket'}>
                                    <div/>
                                    <div className={'basket'}/>
                                </p>
                                <div className={'main_imgSq01-b'}>
                                </div>
                            </div>
                            <p className={'main_nameKnife'}>
                                Складной нож SQ01-B
                            </p>
                            <div className={'main_priceOfKnives'}>
                                <p>850 p.</p>
                            </div>
                        </div>
                        <div className={'main_blockOfKnife'}>
                            <div className={'main_blockWithPlusAndImg'}>
                                <p className={'main_addInBasket'}>
                                    <div/>
                                    <div className={'basket'}/>
                                </p>
                                <div className={'main_imgJj001-TUO-B'}>
                                </div>
                            </div>
                            <p className={'main_nameKnife'}>
                                Складной нож JJ001-TUO-B
                            </p>
                            <div className={'main_priceOfKnives'}>
                                <p>12 850 p.</p>
                            </div>
                        </div>
                        <div className={'main_blockOfKnife'}>
                            <div className={'main_blockWithPlusAndImg'}>
                                <p className={'main_addInBasket'}>
                                    <div/>
                                    <div className={'basket'}/>
                                </p>
                                <div className={'main_imgSq01-b'}>
                                </div>
                            </div>
                            <p className={'main_nameKnife'}>
                                Складной нож SQ01-B
                            </p>
                            <div className={'main_priceOfKnives'}>
                                <p>850 p.</p>
                                <div>Новинка</div>
                            </div>
                        </div>
                        <div className={'main_blockOfKnife'}>
                            <div className={'main_blockWithPlusAndImg'}>
                                <p className={'main_addInBasket'}>
                                    <div/>
                                    <div className={'basket'}/>
                                </p>
                                <div className={'main_imgJj001-TUO-B'}>
                                </div>
                            </div>
                            <p className={'main_nameKnife'}>
                                Складной нож JJ001-TUO-B
                            </p>
                            <div className={'main_priceOfKnives'}>
                                <p>12 850 p.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main