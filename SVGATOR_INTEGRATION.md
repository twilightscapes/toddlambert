# SVGator Integration Guide

## Overview

This integration allows you to create interactive video memes by combining YouTube videos with SVGator animated SVGs. You can sync animations with video playback, add interactive overlays, and create dynamic ticker-style text overlays.

## Components Created

### 1. SVGatorController (`src/utils/svgator.ts`)
Core utility class that manages SVGator instances and their interaction with videos.

**Features:**
- Automatically loads SVGator player script
- Manages multiple SVGator instances
- Supports both `<object>` embeds and inline SVGs
- Provides play, pause, stop, seek controls
- Event listeners for animation events
- Video sync capabilities

### 2. Enhanced YouTubeEmbed Component
Extended with SVGator integration props:

**New Props:**
- `svgatorSync`: boolean - Enable SVGator integration
- `svgatorId`: string - Unique ID for the SVGator instance
- `interactiveMode`: 'sync' | 'independent' | 'controller' - How SVG and video interact

### 3. TickerOverlay Component (`src/components/TickerOverlay.astro`)
Reusable scrolling text ticker overlay.

**Props:**
- `text`: string - Ticker message
- `speed`: number - Animation duration in seconds
- `fontSize`: number - Text size
- `textColor`: string - Text color (hex or rgba)
- `backgroundColor`: string - Bar background color
- `position`: 'top' | 'middle' | 'bottom' - Vertical position

### 4. SVGatorExample Component
Comprehensive examples demonstrating all modes.

## Usage Examples

### Mode 1: Synced Animation
SVG animation plays/pauses with the video:

```astro
<YouTubeEmbed
  url="https://www.youtube.com/watch?v=YOUR_VIDEO"
  title="My Meme"
  clickToLoad={true}
  overlaySvg="/animations/my-animation.svg"
  svgatorSync={true}
  svgatorId="my-svg-animation"
  interactiveMode="sync"
  showMuteButton={true}
/>
```

### Mode 2: Independent Animation
SVG runs continuously regardless of video state:

```astro
<YouTubeEmbed
  url="https://www.youtube.com/watch?v=YOUR_VIDEO"
  overlaySvg="/animations/background-effect.svg"
  svgatorSync={true}
  interactiveMode="independent"
/>
```

### Mode 3: Ticker Overlay
Scrolling text overlay (inline SVG):

```astro
<div style="position: relative;">
  <YouTubeEmbed
    url="https://www.youtube.com/watch?v=YOUR_VIDEO"
    clickToLoad={true}
  />
  
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
    <TickerOverlay 
      text="🚨 BREAKING NEWS: Your message here! 🚨"
      speed={15}
      position="bottom"
      textColor="#ffffff"
      backgroundColor="rgba(255, 0, 0, 0.9)"
    />
  </div>
</div>
```

### Mode 4: Controller Mode (Advanced)
SVG elements trigger video actions (requires custom JS):

```astro
<YouTubeEmbed
  url="https://www.youtube.com/watch?v=YOUR_VIDEO"
  overlaySvg="/animations/interactive-controls.svg"
  svgatorSync={true}
  svgatorId="controller-svg"
  interactiveMode="controller"
/>
```

Then add custom JavaScript to handle SVG clicks:

```javascript
const controller = window.SVGatorController;
const svg = document.getElementById('controller-svg');

svg.addEventListener('load', () => {
  const svgDoc = svg.contentDocument;
  const playBtn = svgDoc.getElementById('play-button');
  
  playBtn?.addEventListener('click', () => {
    // Trigger video play through your custom logic
  });
});
```

## Workflow for Creating Video Memes

### 1. Create Your SVGator Animation
1. Go to https://www.svgator.com
2. Design your animated overlay (text, shapes, effects)
3. Export as SVG file
4. Place in `public/animations/` folder

### 2. Prepare Your Video
1. Upload to YouTube (can be unlisted)
2. Note the video ID or full URL
3. Consider start/end times if you only want a clip

### 3. Set Up in Keystatic (when schema is extended)
Future: You'll be able to configure all this through Keystatic's CMS interface.

### 4. Add to Your Post
```astro
---
import YouTubeEmbed from '@/components/YouTubeEmbed.astro';
---

<YouTubeEmbed
  url={post.data.youtube.value.url}
  overlaySvg={post.data.svgatorUrl}
  svgatorSync={post.data.svgatorSync}
  interactiveMode={post.data.interactiveMode}
  clickToLoad={true}
  showMuteButton={true}
/>
```

## API Reference

### SVGatorController Methods

```typescript
// Register an SVGator instance
await controller.register(id: string, element: HTMLObjectElement | SVGSVGElement)

// Control playback
controller.play(id: string)
controller.pause(id: string)
controller.stop(id: string)
controller.restart(id: string)
controller.seek(id: string, time: number) // time in seconds

// Get timing info
controller.getCurrentTime(id: string) // returns seconds
controller.getTotalTime(id: string) // returns seconds

// Event listeners
controller.on(id: string, event: string, callback: Function)
controller.off(id: string, event: string, callback: Function)

// Sync with video
controller.syncWithVideo(
  svgId: string,
  videoElement: HTMLVideoElement | HTMLIFrameElement,
  mode: 'sync' | 'independent' | 'controller'
)
```

### Available Events
- `'play'` - Animation started playing
- `'pause'` - Animation paused
- `'stop'` - Animation stopped
- `'complete'` - Animation completed one cycle
- `'loop'` - Animation looped

## Tips & Best Practices

### Performance
- Keep SVG file sizes under 200KB for best performance
- Use `clickToLoad={true}` to prevent autoplay issues
- Consider lazy loading for multiple videos on a page

### Animation Design
- Design for 16:9 aspect ratio (1920x1080)
- Use transparent backgrounds in SVGator
- Test animations at different speeds to match video pacing
- Keep interactive elements large enough to click (min 44x44px)

### Accessibility
- Always provide `overlaySvgAlt` descriptions
- Ensure ticker text is readable (good contrast)
- Don't rely solely on animation to convey information
- Consider users who may have reduced motion preferences

### Mobile Considerations
- Test touch interactions on SVG overlays
- Ensure ticker text is readable on small screens
- Consider different ticker speeds for mobile (slower = more readable)

## Troubleshooting

### SVG not animating
1. Check browser console for errors
2. Verify SVGator script loaded: `window.SVGatorPlayer`
3. Ensure SVG file is accessible (check network tab)
4. Check that `svgatorSync={true}` is set

### Video sync not working
1. Verify `interactiveMode="sync"` is set
2. Check that iframe has loaded before sync attempt
3. Look for console logs: "✨ SVGator synced with video"
4. For YouTube, ensure iframe API is enabled

### Ticker not showing
1. Check z-index (should be 65+)
2. Verify container has `position: relative`
3. Ensure ticker overlay div has `position: absolute`
4. Check that text color contrasts with video content

## Next Steps

### Extend Keystatic Schema
Add SVGator fields to your post content type in `src/content/config.ts`:

```typescript
svgatorUrl: fields.text({
  label: 'SVGator Animation URL',
  description: 'Path to your SVGator SVG file'
}),
svgatorSync: fields.checkbox({
  label: 'Enable SVGator Sync',
  defaultValue: false
}),
interactiveMode: fields.select({
  label: 'Interactive Mode',
  options: [
    { label: 'Synced', value: 'sync' },
    { label: 'Independent', value: 'independent' },
    { label: 'Controller', value: 'controller' }
  ],
  defaultValue: 'sync'
}),
tickerText: fields.text({
  label: 'Ticker Text',
  description: 'Text for scrolling ticker overlay'
})
```

### Create More Templates
Build additional SVG overlay templates for common meme formats:
- "Deal With It" sunglasses
- "To Be Continued" arrow
- Reaction overlays
- Custom watermarks
- Animated borders/frames

## Resources

- [SVGator Documentation](https://www.svgator.com/help)
- [SVGator JavaScript API](https://www.svgator.com/help/javascript-api)
- [YouTube IFrame API](https://developers.google.com/youtube/iframe_api_reference)
