import { useState } from 'react';

export default function Converter() {
    const [color, setColor] = useState('');

    const handlerChange = ({ target }) => {
        if (target.value.length < 7) {
            return;
        }

        const converter = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value);

        if (converter === null) {
            setColor('Ошибка!');
            return;
        }

        const rgb = `${parseInt(converter[1], 16)},
            ${parseInt(converter[2], 16)},
            ${parseInt(converter[3], 16)}`;
        setColor(`rgb(${rgb})`);
    };

    return (
        <div className="converter-color" style={{ backgroundColor: color }}>
            <div className="container">
                <input
                    className="input"
                    type="text"
                    placeholder="#xxxxxx"
                    maxLength={7}
                    onChange={handlerChange} />
                <div className="result">{color}</div>
            </div>
        </div>

    );
}