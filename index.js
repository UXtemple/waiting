import React from 'react';

const animation = `@keyframes scaleout {
  0% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}`;

const Waiting = props => {
  const style = {
    animation: 'scaleout 1.0s infinite linear',
    backgroundColor: props.color,
    borderRadius: props.size,
    height: props.size,
    WebkitAnimation: 'scaleout 1.0s infinite linear',
    width: props.size
  };

  return (
    <div style={style}>
      <style>{animation}</style>
    </div>
  );
}
Waiting.defaultProps = {
  color: '#323232',
  size: 32
}
export default Waiting;
