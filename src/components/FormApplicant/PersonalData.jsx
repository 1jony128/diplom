

function PersonalData() {

    return (
        <div>
            <div className='row'>
                <div>
                    <span>Номер заявления</span>
                    <input 
                        className={"input small"}
                        placeholder={"Номер заявления"}
                        type={"number"}
                    />
                </div>
                <div>
                    <span>Дата подачи заявления</span>
                    <input 
                        className={"input large"}
                        type={"date"}
                    />
                </div>
                
            </div>
            <div className="row">
                <div>
                    <span>Общежитие</span>
                    <input 
                        className={"input big"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Район регистрации</span>
                    <input 
                        className={"input big"}
                        placeholder={"Район регистрации"}
                        type={"text"}
                    />
                </div>
                
             
            </div>
            <div className="row">
                <div>
                    <span>Предоставление документов</span>
                    <select
                        defaultValue={"10"}
                        size="small"
                    >
                        <option value={10}>Лично</option>
                        <option value={20}>Эл. почта </option>
                        <option value={30}>Портал е-услуги</option>
                        <option value={30}>Почта</option>
                        <option value={30}>Доверенность</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Балл аттестата</span>
                    <input 
                        className={"input small"}
                        placeholder={"Балл аттестата"}
                        type={"number"}
                    />
                </div>
                <div>
                    <span>Форма обучения</span>
                    <select
                        defaultValue={"10"}
                        size="small"
                    >
                        <option value={10}>Очная</option>
                        <option value={20}>Заочная</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Фамилия</span>
                    <input 
                        className={"input large"}
                        placeholder={"Иванов"}
                        type={"text"}
                    />
                </div>
                <div>
                    <span>Имя</span>
                    <input 
                        placeholder={"Иван"}
                        className={"input large"}
                        type={"text"}
                    />
                </div>
                <div>
                    <span>Отчество</span>
                    <input 
                        placeholder={"Иванович"}
                        className={"input large"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Дата рождения</span>
                    <input 
                        className={"input large"}
                        type={"date"}
                    />
                </div>
                <div>
                    <span>Место рождения</span>
                    <input 
                        className={"input big"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Пол</span>
                    <select
                        defaultValue={"10"}
                        size="small"
                    >
                        <option value={10}>Мужской</option>
                        <option value={20}>Женский</option>
                    </select>
                </div>
                <div>
                    <span>Гражданство</span>
                    <input 
                        className={"input big"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className="row">
                <div>
                    <span>Документ удостоверяющий личность</span>
                    <input 
                        className={"input"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Серия номер</span>
                    <input 
                        className={"input"}
                        placeholder={"Серия номер"}
                        type={"number"}
                    />
                </div>
                <div>
                    <span>Кем выдан</span>
                    <input 
                        className={"input big"}
                        type={"text"}
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
                <div>
                    <span>Национальность</span>
                    <input 
                        className={"input"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Прописан по адресу</span>
                    <input 
                        className={"input full"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Адрес проживания</span>
                    <input 
                        className={"input full"}
                        type={"text"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Телефон личный</span>
                    <input 
                        className={"input"}
                        type={"tell"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Телефон контактного лица</span>
                    <input 
                        className={"input"}
                        type={"tell"}
                    />
                </div>
            </div>
            <div className='row'>
                <div>
                    <span>Телефон контактного лица</span>
                    <input 
                        className={"input"}
                        type={"tell"}
                    />
                </div>
            </div>
        </div>
    )
}

export default PersonalData
