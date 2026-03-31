---
title: "HDR Stills"
subtitle: "iPadOS App"
category: "personal"
categoryLabel: "Personal"
year: 2025
coverGradient: "radial-gradient(ellipse at 50% 40%, #1a2a3a 0%, #0c1520 50%, #050810 100%)"
tags: ["iPadOS", "Swift", "HDR", "SwiftUI", "MetalKit", "AVFoundation"]
featured: true
coverImage: "/images/hdr-stills-sample1.jpg"
---

![HDR Stills](/images/hdr-stills-sample2.jpg)

## About the Project

HDR Stills is a native iOS media review app for color critical still image and video inspection. Built for evaluating HDR and SDR content with accurate color space handling, LUT based transforms, frame accurate playback, source timecode awareness, fullscreen review, and touch based annotation workflows on Apple devices.

## Methodology

The app separates image and video review into distinct stages so users can inspect media without collapsing the workflow into a single baked transform.

**Media Ingest & Inspection** loads stills and video, preserves source metadata where available, supports embedded timecode for video, and provides frame-accurate navigation for shot review.

**Color Management & Viewing Pipeline** lets users switch input and viewing color spaces independently, evaluate HDR and SDR material, apply LUTs, and compare different display and rendering intents in a controlled review environment.

**Review & Interaction Tools** includes zoom and pan inspection, fullscreen viewing, quick UI hide and show for distraction free review, progress and timecode controls, direct timecode jump, and annotation tools for visual feedback during review sessions.

## Results

A practical iOS review tool for artists, colorists, and imaging workflows that need more than a basic gallery or player. It supports both still and motion review, enables precise visual evaluation under different color pipelines, and makes it easy to inspect frames, compare rendering behavior, and communicate notes directly on the image.

## Technical Notes

The system combines SwiftUI for the native interface, MetalKit and Core Image for high-performance rendering, and AVFoundation and CoreMedia for video playback, timing, and source timecode handling. It includes custom Metal-backed viewers, LUT and color space switching, HDR and SDR display workflows, fullscreen presentation logic, annotation overlay systems, and frame and timecode-driven controls designed for responsive interactive use on iOS.

Releasing Q2 2026.
