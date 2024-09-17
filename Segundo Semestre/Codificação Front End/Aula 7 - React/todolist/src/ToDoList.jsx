import React, {useState} from "react";

function ToDolist(){
    return(
        //minha pagina toDolist
        <div className="to-do-list">
            <h1>Coisas a fazer</h1>
            <div>
                <input type="text" placeholder="Digite sua tarefa"/>
                <button> Adicionar</button>
            </div>
        </div>
    );
}

export default ToDolist;