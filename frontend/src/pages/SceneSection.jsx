// components/SceneSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function SceneSection({ children, fade = true, fadeDuration = 800, style = {}, ...props }) {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className={`scene-section${fade ? ' fade-section' : ''}${inView ? ' is-visible' : ''}`}
      style={{
        ...style,
        minHeight: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        transition: fade ? `opacity ${fadeDuration}ms` : undefined,
        opacity: fade ? (inView ? 1 : 0) : undefined,
      }}
      {...props}
    >
      {children}
    </section>
  );
}
