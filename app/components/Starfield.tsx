"use client";

import React from "react";
import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = [];

    for (let i = 0; i < 500; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
      });
    }

    function animate() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      ctx.translate(width / 2, height / 2);

      stars.forEach((star) => {
        star.z -= 5;
        if (star.z <= 0) {
          star.z = width;
        }

        const k = 128 / star.z;
        const x = star.x * k;
        const y = star.y * k;
        const radius = 1 - star.z / width;

        ctx.beginPath();
        ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.z / width})`;
        ctx.fill();
      });

      ctx.translate(-width / 2, -height / 2);

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] w-full h-full"
    ></canvas>
  );
}