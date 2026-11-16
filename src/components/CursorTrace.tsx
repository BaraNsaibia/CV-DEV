import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number; // in frames
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export const CursorTrace: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only run on devices with fine pointer (mouse), not touch screens
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const points: Point[] = [];
    const sparks: Spark[] = [];
    let mouse = { x: -100, y: -100, active: false };
    let isRunning = false;
    let idleCounter = 0;

    const maxPoints = 22;

    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      idleCounter = 0;

      // Add trail point
      points.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (points.length > maxPoints) {
        points.shift();
      }

      // Add a couple of subtle sparks on motion
      if (Math.random() > 0.4) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 20 + Math.random() * 15,
          size: Math.random() * 1.5 + 1,
        });
      }

      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', onPointerLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle blueprint grid illumination spotlight at cursor
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const spotlight = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          130
        );
        spotlight.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
        spotlight.addColorStop(0.5, 'rgba(14, 165, 233, 0.03)');
        spotlight.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = spotlight;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 130, 0, Math.PI * 2);
        ctx.fill();

        // Subtle precision crosshair circle
        ctx.strokeStyle = 'rgba(96, 165, 250, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.stroke();

        // Tiny center dot
        ctx.fillStyle = 'rgba(96, 165, 250, 0.7)';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Age points
      for (let i = points.length - 1; i >= 0; i--) {
        points[i].age += 1;
        if (points[i].age > maxPoints) {
          points.splice(i, 1);
        }
      }

      // 3. Draw smooth spline ribbon trail
      if (points.length > 2) {
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const progress = i / points.length; // 0 (oldest) to 1 (newest)
          const alpha = progress * (1 - p1.age / maxPoints) * 0.55;

          ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
          ctx.lineWidth = 1 + progress * 2;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();

          // Vector node anchor dot at points
          if (i % 3 === 0 && alpha > 0.15) {
            ctx.fillStyle = `rgba(96, 165, 250, ${alpha * 1.3})`;
            ctx.beginPath();
            ctx.arc(p1.x, p1.y, 1.8 * progress, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 4. Update and draw sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life += 1;

        const progress = 1 - s.life / s.maxLife;
        if (progress <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(147, 197, 253, ${progress * 0.6})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * progress, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Idle check to preserve battery and 0% CPU
      if (points.length === 0 && sparks.length === 0) {
        idleCounter++;
        if (idleCounter > 10) {
          isRunning = false;
          return;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseleave', onPointerLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-trace-canvas"
      aria-hidden="true"
    />
  );
};
