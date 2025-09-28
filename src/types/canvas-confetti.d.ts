declare module 'canvas-confetti' {
  interface ConfettiOptions {
    particleCount?: number;
    spread?: number;
    origin?: {
      x: number;
      y: number;
    };
    colors?: string[];
    ticks?: number;
    gravity?: number;
    decay?: number;
    startVelocity?: number;
    shapes?: string[];
  }

  function confetti(options?: ConfettiOptions): void;
  export = confetti;
}
