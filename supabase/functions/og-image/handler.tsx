import React from 'https://esm.sh/react@18.2.0'
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts'

export default function handler(req: Request) {
    const url = new URL(req.url)
    const name = url.searchParams.get('name')
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 126,
                    background: 'lavender',
                }}>
                Hello {name}
            </div>
        ),
    )
}
