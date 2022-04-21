import React from 'react';
import {Button, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {Route, Routes} from 'react-router-dom'
import RestaurantInsert from './RestarurantInsert';


class Insertform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {
        return (
          <div className='position-fixed' id="modal">
            <Button color="danger" onClick={this.toggle}>가게추가</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle} charcode="X">가게추가</ModalHeader>
              <ModalBody>
                <Routes>
                  <Route path='/' element={<RestaurantInsert dbinfo={ {         
                        titlenm : '가게추가 폼', 
                        type : 'lunchInsert',
                        crud : 'insert',
                        mapper : 'lunchSQL',
                        mapperid : 'lunchInsert'
                        }
                        }></RestaurantInsert>}>
                  </Route>   
                </Routes>
              </ModalBody>
            </Modal>
          </div>
        );
    }
}
export default Insertform;