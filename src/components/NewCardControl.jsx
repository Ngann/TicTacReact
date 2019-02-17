import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewCardForm from './NewCardForm';
import PropTypes from 'prop-types';

class NewCardControl extends React.Component {

 constructor(props) {
   super(props);
   this.state = {
     formVisibleOnPage: false
   };
   this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
 }

 handleTroubleshootingConfirmation(){
   this.setState({formVisibleOnPage: true});
 }

 render(){
   let currentlyVisibleContent = null;
   if (this.state.formVisibleOnPage){
     currentlyVisibleContent = <NewCardForm onNewCardCreation={this.props.onNewCardCreation}/>;
   } else {
     currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
   }
   return (
     <div>
       {currentlyVisibleContent}
     </div>
   );
 }
}

NewCardControl.propTypes = {
 onNewCardCreation: PropTypes.func
};

export default NewCardControl;
