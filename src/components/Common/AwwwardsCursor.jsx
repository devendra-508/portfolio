"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./AwwwardsCursor.module.scss";

export default function AwwwardsCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  // Mouse coordinates
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Check if device supports fine hover (desktop/mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      setMounted(true);
    } else {
      return;
    }

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Smooth spring follow for outer ring
    const render = () => {
      // Linear interpolation for smooth trailing
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    // Detect hover over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, [role='button'], input, textarea, [data-cursor]");
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute("data-cursor-text");
        setCursorText(text || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      className={`${styles.cursorWrapper} ${!isVisible ? styles.hidden : ""} ${
        isHovered ? styles.hovered : ""
      }`}
      aria-hidden="true"
    >
      {/* Precision Center Dot */}
      <div ref={dotRef} className={styles.cursorDot} />

      {/* Trailing Fluid Magnetic Ring */}
      <div ref={ringRef} className={styles.cursorRing}>
        {cursorText && <span className={styles.cursorLabel}>{cursorText}</span>}
      </div>
    </div>
  );
}

