import { useEffect, useState } from "react";

import APIURL from "../apiUrl"

function GetInmueblesAvailable() {
    const [data, setData] = useState([]);
    let url = APIURL + 'inmuebles/availables';
    const x = () => {
        fetch(url, {
            method: "GET",
        }).then((response) => response.json())
            .then((json) => {
                setData(json);
            }).catch((error) => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        x();
    }, []);

    return (
        data
    );

}

export default GetInmueblesAvailable;