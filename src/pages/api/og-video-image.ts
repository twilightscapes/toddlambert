import type { APIRoute } from 'astro';
import sharp from 'sharp';

export const GET: APIRoute = async ({ url }) => {
  const thumbnailUrl = url.searchParams.get('thumbnail');
  
  if (!thumbnailUrl) {
    return new Response('Missing thumbnail parameter', { status: 400 });
  }

  try {
    // Fetch the original thumbnail
    const thumbnailResponse = await fetch(thumbnailUrl);
    if (!thumbnailResponse.ok) {
      return new Response('Failed to fetch thumbnail', { status: 500 });
    }

    const imageBuffer = await thumbnailResponse.arrayBuffer();

    // Create play button SVG (Bluesky style)
    const playButtonSvg = `
      <svg width="120" height="120" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path fill="#1C2736" fill-rule="evenodd" clip-rule="evenodd" 
              d="M6.514 2.143A1 1 0 0 0 5 3v18a1 1 0 0 0 1.514.858l15-9a1 1 0 0 0 0-1.716l-15-9Z"
              filter="url(#shadow)"/>
      </svg>
    `;

    const playButtonBuffer = Buffer.from(playButtonSvg);

    // Resize thumbnail to OG image size and composite with play button
    const compositedImage = await sharp(Buffer.from(imageBuffer))
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .composite([
        {
          input: playButtonBuffer,
          gravity: 'center'
        }
      ])
      .jpeg({ quality: 90 })
      .toBuffer();

    return new Response(compositedImage.buffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
};
