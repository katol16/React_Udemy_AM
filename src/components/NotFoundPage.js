import {Link} from "react-router-dom";
import React from "react";

// Poniższy komponent będzie wyświetlany, gdy nie znajdzie danej strony, czyli jak ktoś wpiszę cokolwiek po localhost:3030/cokolwiek. Czyli w react router musimy sie zabezpieczyć na przypadek błędu 404
const NotFoundPage = () => (
    <div>
        404! - <a href='/'>Go home (zadziała ten link, ale przeładuje całą strone a tego byśmy nie chcieli)</a>
        Lepsza metoda<Link to='/'>Go HOME! za pomoca Link, która korzysta z client side Routing i nie będzie przeładowywyać całej strony</Link>
    </div>
);

export default NotFoundPage;