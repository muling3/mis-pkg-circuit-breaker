// @mis/circuit-breaker — STUB.
// Production: opossum-wrapped HTTP client (timeout/threshold/reset).
// PoC: pass-through fetch wrapper, no breaker logic yet.
export const PACKAGE = "@mis/circuit-breaker";

export interface CircuitBreakerOptions {
  service: string;
  baseUrl: string;
}

export class CircuitBreakerClient {
  constructor(private readonly opts: CircuitBreakerOptions) {}

  async get(path: string): Promise<unknown> {
    const res = await fetch(`${this.opts.baseUrl}${path}`);
    return res.json();
  }
}

export function banner(): string {
  return `[${PACKAGE}] stub loaded`;
}
