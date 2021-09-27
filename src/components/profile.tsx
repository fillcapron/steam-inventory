import React from "react";
import { useEffect } from "react";
import { useAction } from "../hooks/useActions";
import { usedTypedSelector } from "../hooks/useTypedSelector";

const Profile: React.FC = () => {
    const { fetchProfile } = useAction();
    const { payload } = usedTypedSelector(state => state.user);
    const localId = localStorage.getItem('id')!

    useEffect(() => {
        fetchProfile(localId)
        console.log('Render Profile useEffect')
    }, [localId, fetchProfile]);

    return (
        <div className="profile">
            <h1>{payload.name}</h1>
            <img src={payload.avatar} alt={payload.name} />
        </div>
    )
}
export default React.memo(Profile);