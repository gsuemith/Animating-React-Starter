import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    // opacity: isToggled ? 1 : 0,
    color: isToggled ? 'tomato' : 'green',
    // fontSize: isToggled ? '2rem': '10em',
    transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(-50px, -50px, 0)'
  })

  return (
    <div>
      <animated.h1 style={fade}>
        {/* {isToggled ? "Hello Animated World!" : "Good Bye!"} */}
        Hello
      </animated.h1>
      <button onClick={() => setToggle(!isToggled)}>
        Toggle
      </button>
    </div>
  )
}

export default Toggle
