import { ChangeEvent, FormEvent, useState } from 'react';
import './form.css';
import { Info } from '../typed';

const defaultService: Info = {
    name: '',
    geschlecht: 'mänlich',
    hygiene: 'normal',
    days: 0,
    typ: 'lager',
    season: 'summer',
};

type InfoProps = { onSave: (info: Info) => void };

function Form(props: InfoProps) {
    const [infos, setInfos] = useState<Info>({
        name: '',
        geschlecht: 'mänlich',
        hygiene: 'normal',
        days: 0,
        typ: 'lager',
        season: 'summer',
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log(infos);

        event.preventDefault();
        props.onSave(infos);
        setInfos(defaultService);
      //  event.currentTarget.reset();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log("handel")
        setInfos((prev: Info) => {
            let value: string | number = event.target.value;

            return { ...prev, [event.target.name]: value };
        });
    };

    return (
        <>
            <form onSubmit={onSubmit} id="travelForm">
                <div className="formGroup">
                    <h3>Namen der Reise:</h3>
                    <input type="text" placeholder="Muster Reise" id="travelName" />
                </div>

                <div className="formGroup">
                    <h3>Geschlecht</h3>
                    <input
                        onChange={handleChange}
                        type="radio"
                        name="geschlecht"
                        id="maennlich"
                        className="radio"
                        value="mänlich"
                    />
                    <label htmlFor="maennlich">Männlich</label>

                    <input
                        onChange={handleChange}
                        type="radio"
                        name="geschlecht"
                        id="weiblich"
                        className="radio"
                        value="weiblich"
                    />
                    <label htmlFor="weiblich">Weiblich</label>
                </div>

                <div className="formGroup">
                    <h3>Hygienevorlieben</h3>
                    <input
                        onChange={handleChange}
                        type="radio"
                        name="hygiene"
                        id="sauber"
                        className="radio"
                        value="sauber"
                    />
                    <label htmlFor="sauber">Sauber</label>

                    <input
                        onChange={handleChange}
                        type="radio"
                        name="hygiene"
                        id="normal"
                        className="radio"
                        value="normal"
                    />
                    <label htmlFor="normal">Normal</label>

                    <input
                        onChange={handleChange}
                        type="radio"
                        name="hygiene"
                        id="dreckig"
                        className="radio"
                        value="dreckig"
                    />
                    <label htmlFor="dreckig">Dreckig</label>
                </div>

                <div className="formGroup">
                    <h3>Anzahl Tage:</h3>
                    <input
                        onChange={handleChange}
                        name="days"
                        min="0"
                        type="number"
                        id="numberOfDays"
                    />
                </div>

                <div className="formGroup">
                    <h3>Typ Des Urlaubs</h3>
                    <input
                        onChange={handleChange}
                        type="radio"
                        name="typ"
                        id="wohnmobil"
                        className="radio"
                        value="wohnmobil"
                    />
                    <label htmlFor="wohnmobil">Wohnmobil</label>

                    <input
                        onChange={handleChange}
                        type="radio"
                        name="typ"
                        id="hotel"
                        className="radio"
                        value="hotel"
                    />
                    <label htmlFor="hotel">Hotelurlaub</label>

                    <input
                        onChange={handleChange}
                        type="radio"
                        name="typ"
                        id="lager"
                        className="radio"
                        value="lager"
                    />
                    <label htmlFor="lager">Lager</label>
                </div>

                <div className="formGroup">
                    <h3>Jahreszeit</h3>
                    <select onChange={handleChange} name="season" id="season" defaultValue="">
                        <option value="" hidden disabled>
                            Wähle Jahreszeit
                        </option>
                        <option value="winter">Winter</option>
                        <option value="spring">Frühling</option>
                        <option value="summer">Sommer</option>
                        <option value="autumn">Herbst</option>
                    </select>
                </div>

                <button type="submit">Generiere Packliste</button>
            </form>
        </>
    );
}

export default Form;
