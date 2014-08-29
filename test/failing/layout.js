
/**
 * @unit-test-setup
 * @ignore
 */
function setup() {
  global.Window = require('Window');
  global.Button = require('Button');
}

function baseline() {
}

/**
 * @see {Notification}
 * @example
 */
function run($utils) {
  /* @hidden */ count = 0;

  // TODO: Fix height %
  var win = new Window();
  var buttonNormal = new Button();
  buttonNormal.title = "Hello";
  win.appendChild(buttonNormal);
  buttonNormal.middle = '100%';
  buttonNormal.center = '100%';
  buttonNormal.width = '200px';

  /*

  buttonNormal.top = '0';
  buttonNormal.left = '10%';
  buttonNormal.right = '-10%'; crashes
*/

  // if no intrinsic size, autofits based on child constraints, defaults to frame? if no child constraints?
  // if its -1 it grows to either its frame or strinks/autofits to its
  /*win.addLayoutConstraint({
    priority:'required', relationship:'=',
    firstItem:buttonNormal, firstAttribute:'top',
    secondItem:win, secondAttribute:'top',
    multiplier:1, constant:0
  });*/
  /*buttonNormal.addLayoutConstraint({
    priority:'required', relationship:'='
  })*/

  /* window static layout constraints
  win.addLayoutConstraint({
    priority:'required', relationship:'=',
    firstItem:win, firstAttribute:'width',
    multiplier:0, constant:500
  });
  win.addLayoutConstraint({
    priority:'required', relationship:'=',
    firstItem:win, firstAttribute:'height',
    multiplier:0, constant:500
  });*/


  /* top bindings 
  win.addLayoutConstraint({
    priority:'required', relationship:'=',
    firstItem:buttonNormal, firstAttribute:'top',
    secondItem:win, secondAttribute:'bottom',
    multiplier:0.0001, constant:0
  });*/
  /* bottom bindings
  win.addLayoutConstraint({
    priority:'required', relationship:'=',
    firstItem:buttonNormal, firstAttribute:'bottom',
    secondItem:win, secondAttribute:'bottom',
    multiplier:1, constant:0
  });
  win.addLayoutConstraint({
    priority:'required', relationship:'=',
    firstItem:buttonNormal, firstAttribute:'height',
    secondItem:win, secondAttribute:'height',
    multiplier:1, constant:0
  })*/

}

/**
 * @unit-test-shutdown
 * @ignore
 */
function shutdown() {
}

module.exports = {
  setup:setup, 
  run:run, 
  shutdown:shutdown, 
  shell:false,
  name:"Layout",
};