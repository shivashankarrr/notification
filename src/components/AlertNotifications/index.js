import {AiFillCheckCircle} from 'react-icons/ai'
// import {RiErrorWarningFill} from 'react-icons/ri'
// import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccess = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div>
        <h1 className="heading">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  return (
    <div>
      <h1>{renderSuccess()}</h1>
    </div>
  )
}
export default AlertNotifications
