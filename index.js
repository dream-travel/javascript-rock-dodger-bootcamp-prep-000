/**
 * Don't change these constants!
 */
const DODGER = document.getElementById('dodger');
const GAME = document.getElementById('game');
const GAME_HEIGHT = 400;
const GAME_WIDTH = 400;
const LEFT_ARROW = 37; // use e.which!
const RIGHT_ARROW = 39; // use e.which!
const ROCKS = [];
const START = document.getElementById('start');

var gameInterval = null

/**
 * Be aware of what's above this line,
 * but all of your work should happen below.
 */

function checkCollision(rock) {
  // implement me!
  // use the comments below to guide you!
  // const top = `${positionToInteger(rock.style.top)}px`;
  //
  // // rocks are 20px high
  // // DODGER is 20px high
  // // GAME_HEIGHT - 20 - 20 = 360px;
  // const dodgerLeftEdge = `${positionToInteger(DODGER.style.left)}px`;
  //
  // // FIXME: The DODGER is 40 pixels wide -- how do we get the right edge?
  // const dodgerRightEdge = `${positionToInteger(DODGER.style.left) + 40}px`;
  //
  // const rockLeftEdge = `${positionToInteger(rock.style.left)}px`;
  //
  // // FIXME: The rock is 20 pixel's wide -- how do we get the right edge?
  // const rockRightEdge = `${positionToInteger(rock.style.left) + 20}px`;
///////////////////////////////////////////////////////////////////////////////

  const top = positionToInteger(rock.style.top);

  const dodgerLeftEdge = positionToInteger(DODGER.style.left);

  // FIXME: The DODGER is 40 pixels wide -- how do we get the right edge?
  const dodgerRightEdge = positionToInteger(DODGER.style.left) + 40;

  const rockLeftEdge = positionToInteger(rock.style.left);

  // FIXME: The rock is 20 pixel's wide -- how do we get the right edge?
  const rockRightEdge = positionToInteger(rock.style.left) + 20;

  // if (top > 360) {
  //     if (positionToInteger(rock.style.left) < positionToInteger(DODGER.style.left) && positionToInteger(rock.style.left) + 20 > positionToInteger(DODGER.style.left)) {
  //       console.log('collision dodger left side');
  //       console.log(`Rock: ${positionToInteger(rock.style.left)}-${positionToInteger(rock.style.left) + 20}, Dodger: ${positionToInteger(DODGER.style.left)}-${positionToInteger(DODGER.style.left) + 40}`);
  //       return true;
  //
  //     } else if (positionToInteger(rock.style.left) > positionToInteger(DODGER.style.left) && positionToInteger(rock.style.left) + 20 < positionToInteger(DODGER.style.left) + 40) {
  //       console.log('collision mid dodger');
  //       console.log(`Rock: ${positionToInteger(rock.style.left)}-${positionToInteger(rock.style.left) + 20}, Dodger: ${positionToInteger(DODGER.style.left)}-${positionToInteger(DODGER.style.left) + 40}`);
  //       return true;
  //
  //     } else if (positionToInteger(rock.style.left) < positionToInteger(DODGER.style.left) + 40 && positionToInteger(rock.style.left) + 20 > positionToInteger(DODGER.style.left) + 40) {
  //       console.log('collision dodger right side');
  //       console.log(`Rock: ${positionToInteger(rock.style.left)}-${positionToInteger(rock.style.left) + 20}, Dodger: ${positionToInteger(DODGER.style.left)}-${positionToInteger(DODGER.style.left) + 40}`);
  //       return true;
  //
  //     } else {
  //       return false;
  //     }
  // }



  if (top > 360) {
      if (rockLeftEdge < dodgerLeftEdge && rockRightEdge > dodgerLeftEdge) {
        console.log('collision on left side of dodger');
        console.log(`Rock: ${positionToInteger(rock.style.left)}-${positionToInteger(rock.style.left) + 20}, Dodger: ${positionToInteger(DODGER.style.left)}-${positionToInteger(DODGER.style.left) + 40}`);
        return true;

      } else if (rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) {
        console.log('collision mid dodger');
        console.log(`Rock: ${positionToInteger(rock.style.left)}-${positionToInteger(rock.style.left) + 20}, Dodger: ${positionToInteger(DODGER.style.left)}-${positionToInteger(DODGER.style.left) + 40}`);
        return true;

      } else if (rockLeftEdge < dodgerRightEdge && rockRightEdge > dodgerRightEdge) {
        console.log('collision on right side of dodger');
        console.log(`Rock: ${positionToInteger(rock.style.left)}-${positionToInteger(rock.style.left) + 20}, Dodger: ${positionToInteger(DODGER.style.left)}-${positionToInteger(DODGER.style.left) + 40}`);
        return true;

      } else {
        return false;
      }
  }


      // if (false /**
    //            * Think about it -- what's happening here?
    //            * There's been a collision if one of three things is true:
    //            * 1. The rock's left edge is < the DODGER's left edge,
    //            *    and the rock's right edge is > the DODGER's left edge;
    //            * 2. The rock's left edge is > the DODGER's left edge,
    //            *    and the rock's right edge is < the DODGER's right edge;
    //            * 3. The rock's left edge is < the DODGER's right edge,
    //            *    and the rock's right edge is > the DODGER's right edge
    //            */) {
    //   return true
    // }

}

function createRock(x) {
  const rock = document.createElement('div');

  rock.className = 'rock';
  rock.style.left = `${x}px`;

  // // Hmmm, why would we have used `var` here?
  var top = 0;

  rock.style.top = top;

  /**
   * Now that we have a rock, we'll need to append
   * it to GAME and move it downwards.
   */
   GAME.appendChild(rock);
  //  console.log(`Rock: ${positionToInteger(rock.style.left)}-${positionToInteger(rock.style.left) + 20}`)

  /**
   * This function moves the rock. (2 pixels at a time
   * seems like a good pace.)
   */
    function moveRock() {
    // implement me!
    // (use the comments below to guide you!)
    /**
     * If a rock collides with the DODGER,
     * we should call endGame()
     */
     if (checkCollision(rock) === true) {
       endGame();
     }
    //  } else {
    //    step()
    //  }
    /**
     * Otherwise, if the rock hasn't reached the bottom of
     * the GAME, we want to move it again.
     */
    //  if (top < 400) {
      // moveRock()
      // step()
    //  }
    /**
     * But if the rock *has* reached the bottom of the GAME,
     * we should remove the rock from the DOM
     */


     if (top >= 400) {
       GAME.removeChild(rock);
     }
    }

  // We should kick of the animation of the rock around here
    function step() {
      var topNumbers = rock.style.top.replace('px', '');
      let top = parseInt(topNumbers, 10);


      if (top < 400) {
        rock.style.top = `${top += 2}px`;
        // window.requestAnimationFrame(step)
      }
    }


    const stepInterval = setInterval(step, 15);
    window.requestAnimationFrame(step);
  // Add the rock to ROCKS so that we can remove all rocks
  // when there's a collision
  ROCKS.push(rock);

  // Finally, return the rock element you've created
  return rock;
}

/**
 * End the game by clearing `gameInterval`,
 * removing all ROCKS from the DOM,
 * and removing the `moveDodger` event listener.
 * Finally, alert "YOU LOSE!" to the player.
 */
function endGame() {
  clearInterval(gameInterval);
  window.removeEventListener('keydown', moveDodger);
  while (0 < ROCKS.length) {
    ROCKS.pop();
  }
  // ROCKS = []
  alert("YOU LOSE!");
}

function moveDodger(e) {
  // implement me!
  /**
   * This function should call `moveDodgerLeft()`
   * if the left arrow is pressed and `moveDodgerRight()`
   * if the right arrow is pressed. (Check the constants
   * we've declared for you above.)
   * And be sure to use the functions declared below!
   */


     if (e.which === LEFT_ARROW) {
       e.preventDefault();
       e.stopPropagation();
       moveDodgerLeft();
      //  console.log(`Dodger: ${positionToInteger(DODGER.style.left)}-${positionToInteger(DODGER.style.left) + 40}`);
     } else if (e.which === RIGHT_ARROW) {
       e.preventDefault();
       e.stopPropagation();
       moveDodgerRight();
      //  console.log(`Dodger: ${positionToInteger(DODGER.style.left)}-${positionToInteger(DODGER.style.left) + 40}`);
     }
}

function moveDodgerLeft() {
  var leftNumbers = DODGER.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 4}px`;
  }
}

function moveDodgerRight() {
  var rightNumbers = DODGER.style.left.replace('px', '');
  var right = parseInt(rightNumbers, 10);

  if (right < 360) {
    dodger.style.left = `${right + 4}px`;
  }
}

/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0;
}

function start() {
  window.addEventListener('keydown', moveDodger);

  START.style.display = 'none';

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000);
}
