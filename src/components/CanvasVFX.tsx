import React, { useEffect, useRef, useState } from 'react';

interface CanvasVFXProps {
  intensity?: number;
  showGrid?: boolean;
}

export const CanvasVFX: React.FC<CanvasVFXProps> = ({ intensity = 1, showGrid = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseAlpha: number;
      pulseSpeed: number;
      phase: number;
    }

    const particleCount = Math.min(45, Math.floor((width * height) / 28000));
    const particles: Particle[] = [];

    const colors = [
      'rgba(212, 255, 0, ',   // Neon yellow
      'rgba(255, 0, 127, ',   // Hot pink
      'rgba(240, 240, 255, '  // Electric white
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45 * intensity,
        vy: (Math.random() - 0.5) * 0.45 * intensity,
        size: Math.random() * 2.2 + 0.8,
        color: colors[i % colors.length],
        baseAlpha: Math.random() * 0.4 + 0.15,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Light Streaks (cinematic anamorphic horizontal streaks)
    interface LightStreak {
      y: number;
      speed: number;
      width: number;
      color: string;
      alpha: number;
      direction: number;
      x: number;
    }

    const streaks: LightStreak[] = [
      { y: height * 0.25, speed: 0.8, width: 320, color: 'rgba(212, 255, 0, 0.03)', alpha: 0.04, direction: 1, x: -100 },
      { y: height * 0.65, speed: 0.6, width: 420, color: 'rgba(255, 0, 127, 0.03)', alpha: 0.03, direction: -1, x: width + 100 },
    ];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.targetX = e.clientX;
      mousePos.current.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let frame = 0;

    const render = () => {
      frame++;
      // Smooth mouse lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle Cybernetic Cross-Grid (Human Design Lab aesthetic)
      if (showGrid) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
        ctx.lineWidth = 1;
        const gridSize = 120;
        
        ctx.beginPath();
        for (let x = 0; x < width; x += gridSize) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }
        ctx.stroke();

        // Technical crosshairs at intersections near mouse
        const mouseGridX = Math.round(mousePos.current.x / gridSize) * gridSize;
        const mouseGridY = Math.round(mousePos.current.y / gridSize) * gridSize;
        
        ctx.strokeStyle = 'rgba(212, 255, 0, 0.12)';
        ctx.beginPath();
        ctx.moveTo(mouseGridX - 8, mouseGridY);
        ctx.lineTo(mouseGridX + 8, mouseGridY);
        ctx.moveTo(mouseGridX, mouseGridY - 8);
        ctx.lineTo(mouseGridX, mouseGridY + 8);
        ctx.stroke();
      }

      // 2. Anamorphic Horizontal Glow Streaks
      streaks.forEach((streak) => {
        streak.x += streak.speed * streak.direction;
        if (streak.direction === 1 && streak.x > width + streak.width) streak.x = -streak.width;
        if (streak.direction === -1 && streak.x < -streak.width) streak.x = width + streak.width;

        const grad = ctx.createLinearGradient(
          streak.x - streak.width / 2,
          streak.y,
          streak.x + streak.width / 2,
          streak.y
        );
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(0.5, streak.color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = grad;
        ctx.fillRect(streak.x - streak.width / 2, streak.y - 1, streak.width, 2);
      });

      // 3. Mouse Interactive Radial Glow (Subtle ambient flashlight)
      if (mousePos.current.x > 0 || mousePos.current.y > 0) {
        const mouseGrad = ctx.createRadialGradient(
          mousePos.current.x,
          mousePos.current.y,
          0,
          mousePos.current.x,
          mousePos.current.y,
          380
        );
        mouseGrad.addColorStop(0, 'rgba(212, 255, 0, 0.035)');
        mouseGrad.addColorStop(0.5, 'rgba(255, 0, 127, 0.015)');
        mouseGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = mouseGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 4. Floating Visual Lab Particles & Connection Filaments
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.phase += p.pulseSpeed;
        const currentAlpha = p.baseAlpha + Math.sin(p.phase) * 0.15;

        // Draw particle with subtle glow
        ctx.fillStyle = `${p.color}${Math.max(0.05, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle hair-thin lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.06;
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity, showGrid]);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas-vfx"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      style={{ opacity: 0.95 }}
    />
  );
};
