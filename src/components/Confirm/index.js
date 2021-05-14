import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {clearCart} from './../../redux/Cart/cart.actions'
import {useDispatch} from 'react-redux'

const Alert =()=> {
    
  submit = () => {
    confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => alert()
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ]
      
      })
        }
            return (
      <div className='container'>
        <button onClick={this.submit}>Confirm dialog</button>
      </div>
    );
  }
