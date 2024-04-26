import { useState } from 'react';
import './App.css';
import Form from './components/form';
import { Info } from './typed';
import DisplayData from './components/displayData';

function App() {
    const [infos, setInfos] = useState<Info>();

    const onSave = (infos: Info) => {

      setInfos(infos);
    };

    return (
        <>
            <Form onSave={onSave}></Form>
            {infos && <DisplayData infos={infos}></DisplayData>}
        </>
    );
}

export default App;
