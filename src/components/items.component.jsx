import { connect } from "react-redux"
import { deleteItem } from "../redux/actions"

const List =({listItems, deleteItem})=> {
    const todoItems = listItems.map((item) => {
       
            return(
                <div  key={item.id}>
                    <p  onClick={() => {deleteItem(item.id)}}>{item.item}</p>
                </div>
            )
       
        
    })
    return(
    <div >
        {todoItems}
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteItem: id => dispatch(deleteItem(id))
})

const mapStateToProps =({item: {listItems}})=>({
    listItems: listItems
})

export default connect(mapStateToProps, mapDispatchToProps)(List)