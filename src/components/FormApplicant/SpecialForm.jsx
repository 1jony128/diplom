import React, { useContext, useState } from 'react'
import { SpecContext } from '../../context/SpecContext';

function SpecialForm() {
    const { spec } = useContext(SpecContext);
    const arrSpec = [1,2,3,4,5,6,7,8,9,10]
    console.log(spec)
    return (
        <div className='row'>
            <div>
                {
                arrSpec.map(item => {
                    return (
                        <div key={item}>
                            <span>Специальность {item}</span>
                            <select
                                defaultValue={10}
                                className={"big"}
                            >
                                {
                                    spec.map(item => {
                                        return  <option key={item.id} value={item.shifr}>{item.spec}</option>
                                    })
                                }
                                <option value={10}></option>
                            </select>
                        </div>
                    )
                })
                }
            </div>
            <div>
                <div className='row'>
                    <div>
                        <span>На основе</span>
                        <select
                            defaultValue={"10"}
                            className={"large"}
                        >
                            <option value={10}>Бюджетной</option>
                            <option value={20}>Коммерческой</option>
                            <option value={30}>Контрактной</option>
                        </select>
                    </div>        
                </div>
                <div className='row'>
                    <div>
                        <span>На основаниях</span>
                        <select
                            defaultValue={"10"}
                            className={"small"}
                        >
                            <option value={10}>Общих</option>
                            <option value={20}>Целевому</option>
                        </select>
                    </div>        
                </div>
                <div className='row'>
                    <div>
                        <span>Уровень образования</span>
                        <select
                            defaultValue={"10"}
                            className={"large"}
                        >
                            <option value={10}>9 классов</option>
                            <option value={20}>11 классов</option>
                            <option value={30}>НПО, СПО, ВО</option>
                        </select>
                    </div>        
                </div>
                <div className='row'>
                    <div>
                        <span>Вид документов</span>
                        <select
                            defaultValue={"10"}
                            className={"small"}
                        >
                            <option value={10}>Оригинал</option>
                            <option value={20}>Копия</option>
                        </select>
                    </div>        
                </div>
                <div className='row'>
                    <div>
                        <span>Год окончания</span>
                        <input 
                            className={"input large"}
                            type={"date"}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <span>Город выдачи</span>
                        <input 
                            className={"input"}
                            type={"text"}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <span>Уч. заведение</span>
                        <input 
                            className={"input"}
                            type={"text"}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <span>Серия</span>
                        <input 
                            className={"input"}
                            type={"number"}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <span>Номер</span>
                        <input 
                            className={"input"}
                            type={"number"}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <span>Дата выдачи</span>
                        <input 
                            className={"input large"}
                            type={"date"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialForm
