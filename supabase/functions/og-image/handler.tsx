import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts'

export default function handler(req: Request) {
    return new ImageResponse(
    (
      <div
        style={{
          width: '100px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          background: 'lavender',
        }}
      >
        Hello Ben
      </div>
    )
  )
}