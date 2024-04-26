import { ChangeEvent, FormEvent, useState } from "react";
import "./form.css";





function Form() {

    const [infos, setInfos] = useState<NewInfos>(
        {brand: "", expense: 0, important: false, name: "", numberplate: "", type: "small"}
    );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    event.currentTarget.reset();
  };

  const handleChange= (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{


    let value: string | number = event.target.value;


    return{...prev, [event.target.name]: value}
  }

  return (
    <>
      <form action="" id="travelForm">
        <div className="formGroup">
          <h3>Namen der Reise:</h3>
          <input type="text" placeholder="Muster Reise" id="travelName" />
        </div>

        <div className="formGroup">
          <h3>Geschlecht</h3>
          <input onChange={handleChange}
            type="radio"
            name="geschlecht"
            id="maennlich"
            className="radio"
          />
          <label htmlFor="maennlich">Männlich</label>

          <input onChange={handleChange}
            type="radio"
            name="geschlecht"
            id="weiblich"
            className="radio"
          />
          <label htmlFor="weiblich">Weiblich</label>
        </div>

        <div className="formGroup">
          <h3>Hygienevorlieben</h3>
          <input onChange={handleChange}
            type="radio"
            name="hygienevorlieben"
            id="sauber"
            className="radio"
          />
          <label htmlFor="sauber">Sauber</label>

          <input onChange={handleChange}
            type="radio"
            name="hygienevorlieben"
            id="normal"
            className="radio"
          />
          <label htmlFor="normal">Normal</label>

          <input onChange={handleChange}
            type="radio"
            name="hygienevorlieben"
            id="dreckig"
            className="radio"
          />
          <label htmlFor="dreckig">Dreckig</label>
        </div>

        <div className="formGroup">
          <h3>Anzahl Tage:</h3>
          <input onChange={handleChange} min="0" type="number" id="numberOfDays" />
        </div>

        <div className="formGroup">
          <h3>Typ Des Urlaubs</h3>
          <input onChange={handleChange} type="radio" name="typ" id="wohnmobil" className="radio" />
          <label htmlFor="wohnmobil">Wohnmobil</label>

          <input onChange={handleChange} type="radio" name="typ" id="hotel" className="radio" />
          <label htmlFor="hotel">Hotelurlaub</label>

          <input onChange={handleChange} type="radio" name="typ" id="lager" className="radio" />
          <label htmlFor="lager">Lager</label>
        </div>

        <div className="formGroup">
          <h3>Jahreszeit</h3>
          <select onChange={handleChange} name="season" id="season">
            <option value="" hidden disabled selected>
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
