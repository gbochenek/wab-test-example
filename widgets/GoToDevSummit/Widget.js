import declare from 'dojo/_base/declare';
import BaseWidget from 'jimu/BaseWidget';
import GoToDevSummit from './GoToDevSummit/GoToDevSummit';

// To create a widget, you need to derive from BaseWidget.
export default declare([BaseWidget], {

  // Custom widget code goes here

  baseClass: 'go-to-dev-summit',
  mainWidget: null,

  // add additional properties here

  // methods to communication with app container:
  postCreate () {
    this.inherited(arguments);

    this.mainWidget = new GoToDevSummit({
      config: this.config,
      map: this.map
    },this.widgetContainer);
    
    console.log('GoToDevSummit::postCreate');
  }
  // startup() {
  //   this.inherited(arguments);
  //   console.log('GoToDevSummit::startup');
  // },
  // onOpen() {
  //   console.log('GoToDevSummit::onOpen');
  // },
  // onClose(){
  //   console.log('GoToDevSummit::onClose');
  // },
  // onMinimize(){
  //   console.log('GoToDevSummit::onMinimize');
  // },
  // onMaximize(){
  //   console.log('GoToDevSummit::onMaximize');
  // },
  // onSignIn(credential){
  //   console.log('GoToDevSummit::onSignIn', credential);
  // },
  // onSignOut(){
  //   console.log('GoToDevSummit::onSignOut');
  // }
  // onPositionChange(){
  //   console.log('GoToDevSummit::onPositionChange');
  // },
  // resize(){
  //   console.log('GoToDevSummit::resize');
  // }
});
