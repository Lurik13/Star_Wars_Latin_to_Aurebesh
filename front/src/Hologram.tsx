import { Stage, Layer } from 'react-konva';
import Konva from 'konva';
import { useEffect, useRef } from 'react';

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

function getOpacity(y: number) {
  if (y < 20) {
    return (y) / 100;
  } else if (y > 450 - 20) {
    return (450 - y) / 100;
  }
  return 0.2;
}

const Hologram = () => {
  const holo = useRef<any>(null);
  
  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      const y = i * 4.5;
      const rect = new Konva.Rect({
        x: 0,
        y: y,
        width: WIDTH,
        height: 2,
        fill: '#0459c9ff',
        opacity: getOpacity(y),
      });
      holo.current?.add(rect);
    }

    const anim = new Konva.Animation(() => {
      holo.current?.children?.forEach((line: any) => {
        const speed = 0.15;
        const y = line.y();
        line.opacity(getOpacity(y));
        line.y(y + speed);
        if (y > 450) {
          line.opacity(0);
          line.y(0);
        }
      });
    }, holo.current);

    anim.start();
    return () => {anim.stop()};
  }, [])

  return (
    <Stage
      width={WIDTH}
      height={HEIGHT}
      listening={false}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <Layer ref={holo} />
    </Stage>
  )
}

export default Hologram;