import { ReactElement } from "react";
import Loading from "./Loading";

interface genericListProps{
    list: any;
    loadingUI?: ReactElement;
    emptyListUI?: ReactElement;
    children: ReactElement;
}

export default function GenericList(props: genericListProps){
    if (!props.list){
        if (props.loadingUI){
            return props.loadingUI;
        }
        return <Loading />
    } else if (props.list.length === 0){
        if (props.emptyListUI){
            return props.emptyListUI;
        }
        return <>There are no elements to display</>
    } else{
        return props.children;
    }
}