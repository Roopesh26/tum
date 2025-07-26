import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  useRupeeCursor?: boolean;
  as?: typeof Link | 'button';
  to?: string;
}

export const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  useRupeeCursor = false,
  as: Component = 'button',
  to,
  ...props
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const rippleIdRef = useRef(0);

  const createRipple = (event: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;

    const newRipple: Ripple = {
      id: rippleIdRef.current++,
      x: x - size / 2,
      y: y - size / 2,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  const handleClick = (event: React.MouseEvent) => {
    if (!disabled) {
      createRipple(event);
      onClick?.();
    }
  };

  const commonProps = {
    ref: buttonRef,
    onClick: handleClick,
    className: `
      relative overflow-hidden select-none
      ${useRupeeCursor ? 'rupee-cursor' : ''}
      ${className}
    `,
    ...props,
  };

  const rippleElements = ripples.map((ripple) => (
    <span
      key={ripple.id}
      className="absolute bg-white opacity-30 rounded-full pointer-events-none animate-ping"
      style={{
        left: ripple.x,
        top: ripple.y,
        width: ripple.size,
        height: ripple.size,
      }}
    />
  ));

  if (Component === Link && to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link {...commonProps} to={to}>
          {children}
          {rippleElements}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...commonProps}
      type={type}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {rippleElements}
    </motion.button>
  );
};
