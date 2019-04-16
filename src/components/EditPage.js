import React from "react";

const EditPage = (props) => {
    console.log(props);
    return (
        <div>
            {/*w props.match.params.id mamy przekazane id, które przekazlaismyw  url edit/:id, np edit/99*/}
            Editing the expanse with id of {props.match.params.id}
        </div>
    )
};

export default EditPage;