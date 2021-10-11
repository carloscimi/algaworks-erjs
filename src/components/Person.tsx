import { useEffect, useState } from "react"

export default function Person (props: any) {
    const [person, setPerson] = useState<string>('');

    useEffect(() => {
        setPerson(props.person);
    }, [props.person]);
    

    return <div>
        <h1>Perfil</h1>
        <p>Este é o perfil de {person}</p>
    </div>
}