import Sidebar from '../../components/sidebar/Sidebar'
import Welcome from '../../components/Welcome/Welcome'
import News from '../../components/News/News'

import "../../App.css"


function Dashboard() {

  return (
    <div className='App'>
      <Sidebar/>

      <div className='Content animate__fadeInUp'>
        <Welcome/>
        <News/>
      </div>
    </div>
  )
}

export default Dashboard

