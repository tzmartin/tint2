
/**
 * @unit-test-setup
 * @ignore
 */
function setup() {
  global.Window = require('Window');
  global.Menu = require('Menu');
  global.MenuItem = require('MenuItem');
  global.StatusBar = require('StatusBar');
}

function baseline() {
}

/**
 * @see {Notification}
 * @example
 */
function run($utils) {

  var statusmenu = new Menu("StatusMenu");
  var someMenu = new Menu("SomeMenu");
  var someSuperMenuItem = new MenuItem('Some Item 1');
  someSuperMenuItem.submenu = someMenu;
  var someMenuItem = new MenuItem("Test Menu","z");
  someMenuItem.addEventListener('click', function() { });
  someMenu.appendChild(someMenuItem);
  var someOtherSuperMenuItem = new MenuItem('This Item');
  var someMenuItem3 = new MenuItem("New","n","shift");
  someMenuItem3.enabled = true;
  someMenuItem3.addEventListener('click', function() { });
  var someMenu2 = new Menu("SomeMenu2");
  someMenu2.appendChild(someMenuItem3);
  someOtherSuperMenuItem.submenu = someMenu2;

  statusmenu.appendChild(someSuperMenuItem);
  statusmenu.appendChild(someOtherSuperMenuItem);

  var statusbar = new StatusBar();
  //statusbar.menu = statusmenu;
  statusbar.image = 'reload';
  statusbar.title = 'hello';
  statusbar.addEventListener('click', function() {
    console.log('clicked');
  })

  setTimeout(function(){
    statusbar.close();
    $utils.ok();
  }, 1000);
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
  name:"StatusBar",
};