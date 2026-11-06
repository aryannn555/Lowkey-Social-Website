"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isVisible = true;

    // Detect screen width
    const width = container.clientWidth;
    const height = container.clientHeight;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const particleCount = isTablet ? 60 : 180;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for phone and elements
    const phoneGroup = new THREE.Group();
    scene.add(phoneGroup);

    // 1. Phone Body (Dark metallic frame)
    const phoneWidth = 2.4;
    const phoneHeight = 4.8;
    const phoneDepth = 0.14;

    const bodyGeo = new THREE.BoxGeometry(phoneWidth, phoneHeight, phoneDepth);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.2,
      metalness: 0.9,
    });
    const phoneMesh = new THREE.Mesh(bodyGeo, bodyMat);
    phoneGroup.add(phoneMesh);

    // Bezel border rim with subtle pink reflection
    const edgeGeo = new THREE.BoxGeometry(
      phoneWidth + 0.04,
      phoneHeight + 0.04,
      0.08
    );
    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0x242424,
      roughness: 0.35,
      metalness: 0.95,
    });
    const edgeMesh = new THREE.Mesh(edgeGeo, edgeMat);
    edgeMesh.position.z = -0.02;
    phoneGroup.add(edgeMesh);

    // Dynamic High-Res Canvas Texture for Profile Card
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 1200;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      // Background
      ctx.fillStyle = "#141414";
      ctx.fillRect(0, 0, 600, 1200);

      // Gradient photo area
      const grad = ctx.createLinearGradient(0, 0, 600, 680);
      grad.addColorStop(0, "#2c1426");
      grad.addColorStop(0.5, "#481c37");
      grad.addColorStop(1, "#180f16");
      ctx.fillStyle = grad;
      ctx.fillRect(24, 24, 552, 680);

      // Subtle avatar glow
      const avatarGlow = ctx.createRadialGradient(300, 320, 20, 300, 320, 240);
      avatarGlow.addColorStop(0, "rgba(232, 88, 154, 0.5)");
      avatarGlow.addColorStop(1, "rgba(232, 88, 154, 0)");
      ctx.fillStyle = avatarGlow;
      ctx.beginPath();
      ctx.arc(300, 320, 240, 0, Math.PI * 2);
      ctx.fill();

      // Avatar circle
      ctx.fillStyle = "#1f181d";
      ctx.beginPath();
      ctx.arc(300, 320, 110, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(232, 88, 154, 0.4)";
      ctx.lineWidth = 4;
      ctx.stroke();

      // Monogram in avatar
      ctx.fillStyle = "#E8589A";
      ctx.font = "bold 80px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("A", 300, 320);

      // Campus badge
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.roundRect(48, 56, 260, 48, 24);
      ctx.fill();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 20px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("🎓 Acropolis '26", 68, 88);

      // Verified tag
      ctx.fillStyle = "rgba(232, 88, 154, 0.25)";
      ctx.roundRect(48, 620, 170, 44, 22);
      ctx.fill();
      ctx.fillStyle = "#F07AB8";
      ctx.font = "bold 18px sans-serif";
      ctx.fillText("✓ Campus Match", 64, 648);

      // Profile details
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 44px sans-serif";
      ctx.fillText("Ananya, 20", 40, 770);

      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.font = "24px sans-serif";
      ctx.fillText("B.Tech Computer Science", 40, 815);

      // Bio
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.font = "24px sans-serif";
      ctx.fillText("Probably debugging code at 2am or hunting", 40, 880);
      ctx.fillText("for iced coffee near the canteen ☕", 40, 915);

      // Interest tags
      const tags = ["Robotics", "Indie Rock", "Design", "Midnight Drives"];
      let tagX = 40;
      const tagY = 980;
      ctx.font = "20px sans-serif";
      for (const tag of tags) {
        const tagWidth = ctx.measureText(tag).width + 36;
        if (tagX + tagWidth > 560) break;
        ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
        ctx.roundRect(tagX, tagY, tagWidth, 42, 21);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
        ctx.stroke();
        ctx.fillStyle = "#EAEAEA";
        ctx.fillText(tag, tagX + 18, tagY + 28);
        tagX += tagWidth + 14;
      }

      // Action buttons
      // Pass
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.beginPath();
      ctx.arc(200, 1100, 46, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 36px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("✕", 200, 1112);

      // Like
      ctx.fillStyle = "#E8589A";
      ctx.beginPath();
      ctx.arc(400, 1100, 52, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 40px sans-serif";
      ctx.fillText("♥", 400, 1112);
    }

    const screenTex = new THREE.CanvasTexture(canvas);
    screenTex.minFilter = THREE.LinearFilter;
    const screenGeo = new THREE.PlaneGeometry(phoneWidth - 0.1, phoneHeight - 0.1);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTex,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = phoneDepth / 2 + 0.005;
    phoneGroup.add(screenMesh);

    // 2. Dual Thin Wireframe Torus Rings
    // Ring 1 (Pink)
    const torusGeo = new THREE.TorusGeometry(3.3, 0.008, 16, 120);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xE8589A,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    // Ring 2 (Purple/Cyan Outer)
    const torusGeo2 = new THREE.TorusGeometry(3.9, 0.005, 16, 140);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: 0x9333EA,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const torus2 = new THREE.Mesh(torusGeo2, torusMat2);
    torus2.rotation.x = -Math.PI / 4;
    scene.add(torus2);

    // 3. Drifting Pink, White & Purple Particles
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount * 3);

    const pinkColor = new THREE.Color("#E8589A");
    const whiteColor = new THREE.Color("#FFFFFF");
    const purpleColor = new THREE.Color("#C084FC");

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * 14;
      particlePositions[idx + 1] = (Math.random() - 0.5) * 12;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 8 - 1;

      const rand = Math.random();
      const chosenColor = rand > 0.6 ? pinkColor : rand > 0.3 ? purpleColor : whiteColor;
      particleColors[idx] = chosenColor.r;
      particleColors[idx + 1] = chosenColor.g;
      particleColors[idx + 2] = chosenColor.b;

      particleSpeeds[idx] = (Math.random() - 0.5) * 0.004;
      particleSpeeds[idx + 1] = 0.002 + Math.random() * 0.005;
      particleSpeeds[idx + 2] = (Math.random() - 0.5) * 0.003;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeo.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const pinkPointLight = new THREE.PointLight(0xE8589A, 5, 16);
    pinkPointLight.position.set(3, 2, 4);
    scene.add(pinkPointLight);

    const coolRimLight = new THREE.PointLight(0x7090ff, 2.5, 14);
    coolRimLight.position.set(-3, -2, 3);
    scene.add(coolRimLight);

    // Interactive Drag + Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0.08;
    let targetRotY = -0.15;
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        const normX = (e.clientX / window.innerWidth) * 2 - 1;
        const normY = -(e.clientY / window.innerHeight) * 2 + 1;
        mouseX = normX;
        mouseY = normY;
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPointerX;
      const deltaY = e.clientY - prevPointerY;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;

      dragVelocityX = deltaX * 0.005;
      dragVelocityY = deltaY * 0.005;

      phoneGroup.rotation.y += dragVelocityX;
      phoneGroup.rotation.x += dragVelocityY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", onResize);

    // Initial phone tilt
    phoneGroup.rotation.x = 0.08;
    phoneGroup.rotation.y = -0.15;
    phoneGroup.position.set(0.6, 0, 0);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      if (!isDragging) {
        // Return smoothly towards target rotation
        targetRotX = 0.08 - mouseY * 0.25;
        targetRotY = -0.15 + mouseX * 0.35;

        phoneGroup.rotation.x += (targetRotX - phoneGroup.rotation.x) * 0.05;
        phoneGroup.rotation.y += (targetRotY - phoneGroup.rotation.y) * 0.05;
      } else {
        // Friction on drag
        dragVelocityX *= 0.92;
        dragVelocityY *= 0.92;
      }

      // Smooth floating oscillation
      phoneGroup.position.y = Math.sin(elapsedTime * 1.4) * 0.12;

      // Double Torus Slow Rotation
      torus.rotation.z = elapsedTime * 0.12;
      torus.rotation.y = elapsedTime * 0.09;
      torus2.rotation.z = -elapsedTime * 0.08;
      torus2.rotation.x = Math.PI / 4 + Math.sin(elapsedTime * 0.5) * 0.1;

      // Particles drift with gentle sine wave
      const posArray = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        posArray[idx + 1] += particleSpeeds[idx + 1];
        posArray[idx] += Math.sin(elapsedTime + i) * 0.001;

        if (posArray[idx + 1] > 6) {
          posArray[idx + 1] = -6;
          posArray[idx] = (Math.random() - 0.5) * 14;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(animationFrameId);

      torusGeo.dispose();
      torusMat.dispose();
      torusGeo2.dispose();
      torusMat2.dispose();
      bodyGeo.dispose();
      bodyMat.dispose();
      edgeGeo.dispose();
      edgeMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      screenTex.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
      style={{ touchAction: "none" }}
    />
  );
}
