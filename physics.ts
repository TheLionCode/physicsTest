type data = {
  radius: number;
  xCoord: number;
  xVel: number;
  yCoord: number;
  yVel: number;
  zCoord: number;
  zVel: number;
}

export default function collision(
  ball1: data = {
    radius: 2,
    xCoord: 3,
    xVel: 4,
    yCoord: 0,
    yVel: 5,
    zCoord: 6,
    zVel: 8,
  },
  ball2: data = {
    radius: 2,
    xCoord: 5,
    xVel: -3,
    yCoord: 0,
    yVel: 5,
    zCoord: 8,
    zVel: 9,
  }
) {
  const parallel = () => {
    const xVec = ball1.xVel / ball2.xVel;
    const yVec = ball1.yVel / ball2.yVel;
    const zVec = ball1.zVel / ball2.zVel;

    if (xVec === yVec && xVec === zVec && yVec === zVec) {
      return true;
    } else {
      return false;
    }
  };

  const collisionCoord = () => {
    const xTime =
      (ball2.xCoord + ball2.radius - (ball1.xCoord + ball1.radius)) /
      (ball1.xVel - ball2.xVel);
    const yTime =
      (ball2.yCoord + ball2.radius - (ball1.yCoord + ball1.radius)) /
      (ball1.yVel - ball2.yVel);
    const zTime =
      (ball2.zCoord + ball2.radius - (ball1.zCoord + ball1.radius)) /
      (ball1.zVel - ball2.zVel);

    if (xTime === yTime && xTime === zTime) {
      const xCollsion = ball1.xVel * xTime + (ball1.xCoord + ball1.radius);
      const yCollsion = ball1.yVel * xTime + (ball1.yCoord + ball1.radius);
      const zCollsion = ball1.zVel * xTime + (ball1.zCoord + ball1.radius);

      const coordinates = {
        xCollsion,
        yCollsion,
        zCollsion,
      };

      if (yCollsion < 0) {
        return false;
      } else {
        return console.log(coordinates);
      }
    } else {
      return console.log('false');
    }
  };

  if (!parallel) {
    collisionCoord;
  } else return console.log('false');
}
