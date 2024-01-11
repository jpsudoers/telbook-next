import React, {useContext} from "react";
import {Chip} from "primereact/chip";
import {Button} from "primereact/button";
import PlanningContext from "@/context/planning/Planning.context";

export const IsCurrent = (node) => {
    const {
        editPlanningMedium,
    } = useContext(PlanningContext);
    let {name} = node.data;
    let {current} = node;
    let fontWeight = current ? 'bold' : 'normal';

    const handleFinish = (e) => {
        e.preventDefault();
        editPlanningMedium(node.id)
    }

    return <span style={{fontWeight: fontWeight}}>
        {name}
        {
            current &&
            <span>
                <Chip style={{marginLeft: '10px', backgroundColor: 'green', color: 'white', fontSize: '10px'}}
                      label="En curso"/>
                <Button severity="danger" style={{marginLeft: '420px', fontSize: '10px'}}
                        label="Finalizar" onClick={handleFinish}/>
            </span>
        }
        </span>;
}

