import React from "react";
import './style.sass'
import { AiOutlineRight } from 'react-icons/ai'
import LittleComponent from "./littleComponent";

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
                        <LittleComponent name = 'Складной нож SQ01-B' price = '850 р' img = 'main_imgSq01-b' _new = 'новинка'/>
                        <LittleComponent name = 'Складной нож JJ001-TUO-B' price = '12 850 р.' img = 'main_imgJj001-TUO-B' />
                        <LittleComponent name = 'Складной нож SQ01-B' price = '850 р' img = 'main_imgSq01-b' />
                        <LittleComponent name = 'Складной нож JJ001-TUO-B' price = '12 850 р.' img = 'main_imgJj001-TUO-B' />
                        <div className={'main_instagram'}>

                        </div>
                        <LittleComponent name = 'Складной нож JJ001-TUO-B' price = '12 850 р.' img = 'main_imgJj001-TUO-B' />
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
                        <LittleComponent name = 'Складной нож SQ01-B' price = '850 р' img = 'main_imgSq01-b' />
                        <LittleComponent name = 'Складной нож JJ001-TUO-B' price = '12 850 р.' img = 'main_imgJj001-TUO-B'  />
                        <LittleComponent name = 'Складной нож SQ01-B' price = '850 р' img = 'main_imgSq01-b' _new = 'новинка' />
                        <LittleComponent name = 'Складной нож JJ001-TUO-B' price = '12 850 р.' img = 'main_imgJj001-TUO-B' />
                    </div>
                </div>
                <div className={'main_line'}/>
                <div className={'main_newOrPopular'}>
                    <div className={'main_choose'}>
                        <button className={'new'}>Новинка</button>
                        <button className={'popular'}>Популярное</button>
                    </div>
                    <div className={'main_goods'}>
                        <LittleComponent name = 'Складной нож SQ01-B' price = '850 р' img = 'main_imgSq01-b' _new = 'новинка'/>
                        <LittleComponent name = 'Складной нож JJ001-TUO-B' price = '12 850 р.' img = 'main_imgJj001-TUO-B' _new = 'новинка'/>
                        <LittleComponent name = 'Складной нож SQ01-B' price = '850 р' img = 'main_imgSq01-b' _new = 'новинка'/>
                        <LittleComponent name = 'Складной нож JJ001-TUO-B' price = '12 850 р.' img = 'main_imgJj001-TUO-B' _new = 'новинка'/>

                    </div>
                </div>
                <div className={'main_line'}/>
                <div className={'main_containerForKnifes'}>
                    <div className={'main_informationPartOne'}>
                        <div className={'main_imageInPartOne'}/>
                        <div className={'main_textInPartOne'}>
                            <h2>«Tuotown» – легендарные ножи, создающие шедевры</h2>
                            <p>Компания «Tuotown» – эксклюзивный представитель профессиональных кухонных ножей, изготовленных лучшими мастерами Восточной Азии с применением передового европейского оборудования и современных материалов. Они отличаются идеальным балансом и фантастической остротой. Сочетают в себе вековые традиции и новейшие разработки. Также предлагаем широкий ассортимент сопутствующих товаров.</p>
                        </div>
                    </div>
                    <div className={'main_informationPartTwo'}>
                        <div className={'main_textInPartTwo'}>
                            <p className={'main_beauty'}>
                                Истинная красота ножа — совершённая функциональность и визуальная гармония. Этот предмет издревле сопутствовал человеку: от зари цивилизации до сегодняшних дней.
                                <p className={'main_throughout'} >
                                    На протяжении всей истории человечества он был верным помощником, незаменимым инструментом и грозным оружием. Предлагаем изделия Hi-end качества по доступным ценам настоящим ценителям японских ножей.
                                </p>
                            </p>
                            <p className={'main_feature'}>
                                Отличительной чертой нашего интернет-магазина являются уникальные торговые предложения, эксклюзивность продукции, неизменно высокое качество и выгодные цены.
                                <p className={'main_selling'}>
                                    Осуществляем продажи элитных японских кухонных ножей для профессионалов и любителей. В обширной ассортиментной линейке представлены изделия для различных потребностей и любого бюджета — от столовых приборов до шеф-ножей.
                                </p>
                            </p>
                            <h2>Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</h2>

                        </div>
                        <div className={'main_imageInPartTwo'}/>
                    </div>
                </div>
                <div className={'main_line'}/>
                <div className={'main_allInterestingAbout'}>
                    <div className={'main_containerAllInteresting'}>
                        <h3 className={'main_headingInAll'}>Всё самое интересное о ножах</h3>
                        <div className={'main_cardsInInteresting'}>
                            <div className={'main_blockInInteresting'}>
                                <p className={'main_dataInInteresting'}>4 августа 2021 19:24</p>
                                <p className={'main_textInInteresting'}>Традиционные виды японских кухонных ножей</p>
                            </div>
                            <div className={'main_blockInInteresting'}>
                                <p className={'main_dataInInteresting'}>4 августа 2021 19:24</p>
                                <p className={'main_textInInteresting'}>Всемирная история режущих клинков — взгляд в прошлое</p>
                            </div>
                            <div className={'main_blockInInteresting'}>
                                <p className={'main_dataInInteresting'}>4 августа 2021 19:24</p>
                                <p className={'main_textInInteresting'}>Как ухаживать за японскими кухонными ножами?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main