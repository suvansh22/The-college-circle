import React from 'react'
import PostPage from './PostPage'
import Aapbar from './Appbar'
import Placement from './Placement'
// import Cardpage from './Cardpage'


function UserFrontPage(props){
    const [view,setView] = React.useState(<PostPage/>)

    const changeView = (nextview) =>{
        if(nextview === 'Placement')
        {
            setView(<Placement/>)
        }
        else if(nextview === 'Post')
        {
            setView(<PostPage/>)
        }
    }

    return(
        <div>
            <Aapbar changeView={(nextview)=>changeView(nextview)}/>
            {view}
        </div>
    )
}

export default UserFrontPage