import { useState } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Input from './components/UI/Input';
import { SpecProvider } from './context/SpecContext';
import FormApplicant from './pages/FormApplicant';
import FormSpecializationy from './pages/FormSpecializationy';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {

  const [spec, setSpec] = useState([
    {
     "shifr": "21.02.15",
     "spec": "Открытые горные работы Заочно",
     "id": 1
    },
    {
     "shifr": "21.02.17",
     "spec": "Подземная разработка месторождений полезных испокпаемых Заочно",
     "id": 2
    },
    {
     "shifr": "21.02.18",
     "spec": "Обогащение полезных исопаемых Заочно",
     "id": 3
    },
    {
     "shifr": "08.01.17",
     "spec": "Электромонтажник - наладчик",
     "id": 4
    },
    {
     "shifr": "15.01.31",
     "spec": "Мастер контрольно-измерительных  приборов и автоматики",
     "id": 5
    },
    {
     "shifr": "18.01.27",
     "spec": "Машинист технологических насосов и компрессоров",
     "id": 6
    },
    {
     "shifr": "23.01.01",
     "spec": "Оператор транспортного терминала",
     "id": 7
    },
    {
     "shifr": "23.01.08",
     "spec": "Слесарь по ремонту строительных машин",
     "id": 8
    },
    {
     "shifr": "09.02.07",
     "spec": "Информационные системы и программирование",
     "id": 9
    },
    {
     "shifr": "13.02.07",
     "spec": "Электроснабжение (по отраслям)",
     "id": 10
    },
    {
     "shifr": "13.02.11",
     "spec": "Техническая эксплуатация и обслуживание электрического и электромеханического оборудования (по отраслям)",
     "id": 11
    },
    {
     "shifr": "15.02.03",
     "spec": "Техническая эксплуатация гидравлических машин, гидроприводов и гидропневмоавтоматики",
     "id": 12
    },
    {
     "shifr": "21.02.15",
     "spec": "Открытые горные работы",
     "id": 13
    },
    {
     "shifr": "21.02.17",
     "spec": "Подземная разработка месторождений полезных испокпаемых",
     "id": 14
    },
    {
     "shifr": "21.02.18",
     "spec": "Обогащение полезных исопаемых",
     "id": 15
    },
    {
     "shifr": "22.02.06",
     "spec": "Сварочное производствор",
     "id": 16
    },
    {
     "shifr": "23.02.07",
     "spec": "Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобиля",
     "id": 17
    },
    {
     "shifr": "43.02.14",
     "spec": "Гостинечное дело",
     "id": 18
    },
    {
     "shifr": "21.01.08",
     "spec": "Машинист на открытых горных работах",
     "id": 19
    },
    {
     "shifr": "10.02.05",
     "spec": "Обеспечение информационной безопасности автоматизированных систем",
     "id": 20
    },
    {
     "shifr": "13.02.07",
     "spec": "Электроснабжение (по отраслям) Заочно",
     "id": 21
    },
    {
     "shifr": "13.02.11",
     "spec": "Техническая эксплуатация и обслуживание электрического и электромеханического оборудования (по отраслям) Заочно",
     "id": 22
    }])

    const [printMode, setPrintMode] = useState()

  return (
    <div className="App">
      <SpecProvider value={{ spec, setSpec }}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Main printMode={printMode}/>}>
              <Route path="" element={<Home />} />
              <Route path="applicant" element={<FormApplicant setPrintMode={setPrintMode} printMode={printMode}/>} />
              <Route path="specializationy" element={<FormSpecializationy />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SpecProvider>
      
    </div>
  );
}

export default App;
