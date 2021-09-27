import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { allActions } from "../redux/store/action";
import { useMemo } from "react";

export const useAction = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(allActions, dispatch),[dispatch])
}