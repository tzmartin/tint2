
/**
 * @unit-test-setup
 * @ignore
 */
function setup() {
  require('Common');
}

function baseline() {
}

/**
 * @see {ButtonGroup}
 * @example
 */
function run($utils) {
  var firer;
  var win = new Window();
  win.visible = true;
  if($utils.debug) {
    var utildebug = 0;
    setInterval(function() { $utils.log('utildebug: '+(utildebug++)+'\n'); },500);
  }
  /* @hidden */ countMouseDown = 0, countMouseUp = 0, done = false;
  /* @hidden */ var bounds = win.boundsOnScreen;
  var buttonGroup = new ButtonGroup();

  var button1 = new Button();
  button1.image = "back";
  button1.addEventListener('mousedown', function() {
    clearInterval(firer);
    /* @hidden */ if($utils.debug) $utils.log('button1.mousedown\n');
    /* @hidden */ countMouseDown++;
    /* @hidden */ $utils.assert(buttonGroup.selected == 0);
  });
  button1.addEventListener('mouseup', function() {
    /* @hidden */ if($utils.debug) $utils.log('button1.mouseup\n');
    /* @hidden */ countMouseUp++;
    /* @hidden */ $utils.assert(buttonGroup.selected == 0);
    /* @hidden */ $utils.clickAt(bounds.x + 45, bounds.y + 15); // hope htis hardcoded value works.
  });

  var button3 = new Button();
  button3.image = "reload";
  button3.addEventListener('mousedown', function() {
    /* @hidden */ if($utils.debug) $utils.log('button3.mousedown\n');
    /* @hidden */ countMouseDown++;
    /* @hidden */ $utils.assert(buttonGroup.selected == 1, 'expected buttonGroup.selected == 1, got: '+(buttonGroup.selected));
  });
  button3.addEventListener('mouseup', function() {
    /* @hidden */ if($utils.debug) $utils.log('button3.mouseup\n');
    /* @hidden */ countMouseUp++;
    /* @hidden */ $utils.assert(buttonGroup.selected == 1, 'expected buttonGroup.selected == 1, got: '+(buttonGroup.selected));
    /* @hidden */ $utils.clickAt(bounds.x + 65, bounds.y + 15); // hope htis hardcoded value works.
  });

  var button2 = new Button();
  button2.image = "forward";
  button2.addEventListener('mousedown', function() {
    /* @hidden */ if($utils.debug) $utils.log('button2.mousedown\n');
    /* @hidden */ countMouseDown++;
    /* @hidden */ $utils.assert(buttonGroup.selected == 2);
  });
  button2.addEventListener('mouseup', function() {
    /* @hidden */ if($utils.debug) $utils.log('button2.mouseup\n');
    /* @hidden */ countMouseUp++;
    /* @hidden */ $utils.assert(buttonGroup.selected == 2);
    /* @hidden */ $utils.assert(countMouseDown == 3);
    /* @hidden */ done = true;
    /* @hidden */ if(done) $utils.assert(countMouseUp == 3, 'mouse up should be 3, was: ' + countMouseUp);
    /* @hidden */ if(done) $utils.ok();
  });

  buttonGroup.appendChild(button1);
  buttonGroup.appendChild(button3);
  buttonGroup.appendChild(button2);
  buttonGroup.left = buttonGroup.top = 0;

  firer = setInterval(function() {
    $utils.clickAt(bounds.x + 15, bounds.y + 15); // hope this hardcoded value works.
    //$utils.log('1');
    //if($utils.debug) {
    //  $utils.clickAt(bounds.x + 15, bounds.y); // hope this hardcoded value works.
    //$utils.log('2');
    //  $utils.clickAt(bounds.x , bounds.y + 15); // hope this hardcoded value works.
    //$utils.log('3');
    //  $utils.clickAt(bounds.x , bounds.y); // hope this hardcoded value works.
    //$utils.log('5');
    //}
  }, 1000);
  win.appendChild(buttonGroup);
  $utils.log('setup-end');
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
  timeout:true,
  name:"ButtonGroup",
};