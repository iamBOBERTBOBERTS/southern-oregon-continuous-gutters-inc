export const glowVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const flowFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uBlue;
  uniform vec3 uGold;
  uniform float uIntensity;
  varying vec2 vUv;
  varying vec3 vPosition;

  float softLine(float value, float center, float width) {
    return 1.0 - smoothstep(width, width + 0.18, abs(value - center));
  }

  void main() {
    float flow = fract(vUv.x * 1.35 - uTime * 0.18);
    float pulse = smoothstep(0.0, 0.28, flow) * (1.0 - smoothstep(0.55, 1.0, flow));
    float core = softLine(vUv.y, 0.5, 0.09);
    float edge = pow(1.0 - abs(vUv.y - 0.5) * 2.0, 2.6);
    vec3 color = mix(uBlue, uGold, smoothstep(0.66, 1.0, vUv.x));
    float alpha = (core * 0.68 + edge * 0.24) * (0.42 + pulse * 0.58) * uIntensity;
    gl_FragColor = vec4(color * (1.15 + pulse * 1.4), alpha);
  }
`;

export const haloFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uBlue;
  uniform vec3 uGold;
  varying vec2 vUv;

  void main() {
    vec2 p = vUv - vec2(0.5);
    float radius = length(p);
    float sweep = 0.5 + 0.5 * sin(uTime * 0.55 + p.x * 7.0);
    float halo = smoothstep(0.74, 0.0, radius) * 0.34;
    vec3 color = mix(uBlue, uGold, smoothstep(0.25, 0.92, vUv.x + sweep * 0.12));
    gl_FragColor = vec4(color * (0.8 + sweep * 0.5), halo);
  }
`;
