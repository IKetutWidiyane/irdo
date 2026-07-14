import React, { useEffect, useRef, useCallback } from 'react';

const SHAPES = ['circle', 'square', 'diamond', 'triangle'];
const COLORS = [
  'rgba(99, 102, 241, 0.5)',  // irdo-500
  'rgba(129, 140, 248, 0.4)', // irdo-400
  'rgba(165, 180, 252, 0.3)', // irdo-300
  'rgba(79, 70, 229, 0.4)',   // irdo-600
];

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -100, y: -100, prevX: -100, prevY: -100 });
  const rafRef = useRef(null);
  const lastSpawnRef = useRef(0);

  const spawnParticle = useCallback((x, y) => {
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const size = 4 + Math.random() * 8;
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.5 + Math.random() * 1.5;
    const rotation = Math.random() * 360;
    const rotationSpeed = (Math.random() - 0.5) * 4;

    particlesRef.current.push({
      x,
      y,
      size,
      color,
      shape,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.5,
      alpha: 0.7 + Math.random() * 0.3,
      life: 1,
      decay: 0.015 + Math.random() * 0.015,
      rotation,
      rotationSpeed,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let mounted = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = clientX;
      mouseRef.current.y = clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -100;
      mouseRef.current.y = -100;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animate = (timestamp) => {
      if (!mounted) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn particles based on mouse movement
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const px = mouseRef.current.prevX;
      const py = mouseRef.current.prevY;

      if (mx > 0 && my > 0 && (mx !== px || my !== py)) {
        // Spawn multiple particles per frame for trail effect
        if (timestamp - lastSpawnRef.current > 30) {
          const dist = Math.sqrt((mx - px) ** 2 + (my - py) ** 2);
          const count = Math.min(Math.floor(dist / 8) + 1, 3);

          for (let i = 0; i < count; i++) {
            const offsetX = (Math.random() - 0.5) * 6;
            const offsetY = (Math.random() - 0.5) * 6;
            spawnParticle(mx + offsetX, my + offsetY);
          }
          lastSpawnRef.current = timestamp;
        }
      }

      // Limit particles
      if (particlesRef.current.length > 80) {
        particlesRef.current = particlesRef.current.slice(-80);
      }

      // Update and draw particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // gravity
        p.vx *= 0.98; // friction
        p.vy *= 0.98;
        p.alpha -= p.decay;
        p.life -= p.decay;
        p.rotation += p.rotationSpeed;

        if (p.life <= 0 || p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;

        const s = p.size;

        switch (p.shape) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
            ctx.fill();
            break;

          case 'square':
            ctx.fillRect(-s / 2, -s / 2, s, s);
            break;

          case 'diamond':
            ctx.beginPath();
            ctx.moveTo(0, -s / 2);
            ctx.lineTo(s / 2, 0);
            ctx.lineTo(0, s / 2);
            ctx.lineTo(-s / 2, 0);
            ctx.closePath();
            ctx.fill();
            break;

          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -s / 2);
            ctx.lineTo(-s / 2, s / 2);
            ctx.lineTo(s / 2, s / 2);
            ctx.closePath();
            ctx.fill();
            break;

          default: break;
        }

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      mounted = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [spawnParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ touchAction: 'none' }}
    />
  );
};

export default CursorTrail;