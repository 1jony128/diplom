
function SocialForm() {

    return (
        <div>
            <div className='row'>
                <div>
                    <span>Льготная категория</span>
                    <input 
                        className={"input full"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Социальный статус</span>
                    <input 
                        className={"input full"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Документ подтверждающий статус</span>
                    <select
                        defaultValue={"100"}
                        size="small"
                    >
                        <option disabled value={100}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
                <div>
                    <span>Инвалидность/ОВЗ</span>
                    <select
                        defaultValue={"100"}
                        size="small"
                    >
                        <option disabled value={100}></option>
                        <option value={10}>Да</option>
                        <option value={20}>Нет</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Создание особых условий</span>
                    <select
                        defaultValue={"100"}
                        size="small"
                    >
                        <option disabled value={100}></option>
                        <option value={10}>Нуждаюсь</option>
                        <option value={20}>Не нуждаюсь</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>ФЛГ</span>
                    <input 
                        className={"input"}
                        type={"text"}
                    />
                </div>
                <div>
                    <span>Дата выдачи ФЛГ</span>
                    <input 
                        className={"input large"}
                        type={"date"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Изучал язык</span>
                    <select
                        defaultValue={"100"}
                        size="small"
                    >
                        <option disabled value={100}></option>
                        <option value={10}>Английский</option>
                        <option value={30}>Немецкий</option>
                        <option value={40}>Итальянский</option>
                        <option value={50}>Французкий</option>
                        <option value={60}>Испанский</option>
                        <option value={70}>Китайский</option>
                        <option value={80}>Корейский</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>ИНН</span>
                    <input 
                        className={"input"}
                        type={"number"}
                    />
                </div>
                <div>
                    <span>СНИЛС</span>
                    <input 
                        className={"input"}
                        type={"number"}
                    />
                </div>
                <div>
                    <span>Мед полис</span>
                    <input 
                        className={"input"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className="row">
                <div>
                    <span>Родитель / опекун</span>
                    <input 
                        className={"input full"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className="row">
                <div>
                    <span>Место работы</span>
                    <input 
                        className={"input big"}
                        type={"text"}
                    />
                </div>
                <div>
                    <span>Телефон</span>
                    <input 
                        className={"input"}
                        type={"tell"}
                    />
                </div>
            </div>
            <div className="row">
                <div>
                    <span>Родитель / опекун</span>
                    <input 
                        className={"input full"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className="row">
                <div>
                    <span>Место работы</span>
                    <input 
                        className={"input big"}
                        type={"text"}
                    />
                </div>
                <div>
                    <span>Телефон</span>
                    <input 
                        className={"input"}
                        type={"tel"}
                    />
                </div>
            </div>
            <div className="row">
                <div>
                    <span>Электронная почта</span>
                    <input 
                        className={"input"}
                        type={"email"}
                    />
                </div>
            </div>
            <div className="row">
                <div>
                    <span>Место работы</span>
                    <input 
                        className={"input"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className="row">
                <div>
                    <span>Должность</span>
                    <input 
                        className={"input"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className="row">
                <div>
                    <span>Рабочий номер</span>
                    <input 
                        className={"input"}
                        type={"tel"}
                    />
                </div>
            </div>
            <div className="row">
                    <span>Дополнительная информация</span>
                    <textarea 
                        className={"textarea"}
                    />
            </div>
        </div>
    )
}

export default SocialForm
