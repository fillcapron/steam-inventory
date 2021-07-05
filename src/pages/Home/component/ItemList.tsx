import Item from './item'

type TProps = {
    props:  string | boolean | any
}

const ItemList: React.FC<TProps> = ({props}) => {

    const {error, currentItems, loading} = props

    if (loading){
        return <h1>Идет загрузка</h1>
    }
    if (error){
        return <h1>{error}</h1>
    }
    return(
        <div>
        {currentItems.length? currentItems.map((elem:object, i:number) => {
            return (
            <Item item={elem} key={i}/>
            )}):[]}
        </div>
    )
}

export default ItemList