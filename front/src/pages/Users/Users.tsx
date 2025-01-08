import Sidebar from '../../components/sidebar/Sidebar'
import User from '../../components/User/USer'

import "../../App.css"


function Users() {

  return (
    <div className='App'>
      <Sidebar/>

      <div className='Content animate__fadeInUp'>
        <User
          name = "A"
          type = "letter"
        />
        <User
          name = "Admin Admin"
          type = "user"
        />
      </div>
    </div>
  )
}

export default Users

