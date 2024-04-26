import { useEffect, useState } from 'react';
import { Info } from '../typed';

type DisplayProps = {
    infos: Info;
};

function DisplayData(props: DisplayProps) {
    const [list, setList] = useState<string[]>([]);

    useEffect(() => {
        setList([]);
        let factor: number;
        if (props.infos.hygiene === 'dreckig') {
            factor = 3;
        } else if (props.infos.hygiene === 'normal') {
            factor = 1;
        } else {
            factor = 0.8;
        }

        setList((prev) => [...prev, props.infos.days / factor + ' Unterhosen ']);
        setList((prev) => [...prev, props.infos.days / factor + ' T-Shirts']);
    }, [props.infos]);

    return (
        <>
            <p>{list}</p>
        </>
    );
}

export default DisplayData;
