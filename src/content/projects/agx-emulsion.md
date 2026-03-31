---
title: "AGX Emulsion"
subtitle: "A physics-based spectral model of silver halide film response built from AgX dye coupling data."
category: "personal"
categoryLabel: "Film Emulation"
year: 2026
coverGradient: "radial-gradient(ellipse at 35% 45%, #2a1808 0%, #1a1004 40%, #0a0a0a 75%)"
tags: ["Python", "NumPy", "Colour-Science", "Spectral", "ACES"]
featured: true
coverImage: "/images/agx.jpg"
externalUrl: "https://github.com/qiuboujun"
---

![AgX Emulsion](/images/agx.jpg)

## Overview

AgX Emulsion is a CUDA-accelerated OpenFX plugin for DaVinci Resolve and other OFX hosts that recreates a film imaging pipeline instead of applying a fixed LUT. It can run as a full film path, from camera exposure through negative stock, print stock, and scan/output conversion, or as a Grain + Halation Only effect that preserves the incoming grade while adding film-like texture and highlight behavior.

## Methodology

The plugin breaks the look into separate stages so the user can tune the result without collapsing everything into one transform:

**Input & Capture** accepts ACES2065-1 linear, ARRI LogC3, ARRI LogC4, or sRGB input, then applies exposure, scene white balance, and optional spectral optical filters before the film response.

**Film & Print Response** simulates selectable negative and print stocks, optional print stage enable/disable, preserve viewing illuminant behavior, color timing, DIR couplers, flashing, bleach bypass, and D-min normalization.

**Spatial Effects** adds physically scaled bloom, halation, and density domain grain with presets, per channel controls, seeded randomness, and film format aware sizing for 16mm, 35mm, and 65mm workflows.

## Results

The result is a practical grading plugin that can produce stock-dependent color, contrast, density rolloff, print interaction, and analog texture directly inside an OFX timeline. In Full mode it behaves like a film-print-scan pipeline with film and print stock controls; in Grain + Halation Only mode it works as a high-quality finishing layer for an existing color pipeline. The plugin is designed for interactive, high-resolution use rather than offline LUT export alone.

## Technical Notes

The system combines a Python toolkit for profiles, spectral assets, and reference modeling with a C++17/CUDA processing core exposed through OpenFX. The plugin includes GPU LUT acceleration, device-resident processing paths, and multi-GPU tiling support, and exposes controls for film stock, print stock, output color space, optical filters, flashing, color timing, bloom, halation, grain, couplers, and bleach bypass directly in the host UI.
