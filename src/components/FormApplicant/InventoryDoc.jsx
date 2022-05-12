import React from 'react'

function InventoryDoc() {
    return (
        <div className='inventory'>
            <h2>Опись документов</h2>
            <div className="row m-1">
                <div className='row'>
                    <div className='column'>
                        <span>Заявление, согласие</span>
                        <span>на обработку </span>
                        <span>персональных данных</span>
                    </div>
                    
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Паспорт(копия)</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Аттестат оригинал</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Аттестат копия</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Фото</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Мед заключение</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>ФЛГ(копия)</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Прививочный сертификат</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Снилс(копия)</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Мед полис(копия)</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Инн(копия)</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Приписное свидетельство / военный билет</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Характеристики</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Документ подтверждающий соц</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className="row m-1">
                <div>
                    <span>Сертификат Covid-19</span>
                    <select
                        defaultValue={"0"}
                        size="small"
                    >
                        <option disabled value={0}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default InventoryDoc
