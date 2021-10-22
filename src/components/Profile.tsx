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
        <>
            {
                payload.avatar ?
                    <div className="profile">
                        <span className="profile-name">{payload.name}</span>
                        <img style={{ border: '2px solid' + (payload.status ? '#57cbde' : '#898989') }} src={payload.avatar} alt={payload.name} />
                    </div>
                    : []
            }
        </>
    )
}
export default Profile;