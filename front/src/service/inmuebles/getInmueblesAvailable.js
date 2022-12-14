import { useEffect, useState } from "react";

import APIURL from "../apiUrl"

function GetInmueblesAvailable() {
    const [data, setData] = useState([]);
    let url = APIURL + 'inmuebles/availables';
    async function x () {
        await fetch(url, {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        data
    );

}

export default GetInmueblesAvailable;